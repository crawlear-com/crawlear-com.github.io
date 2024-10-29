import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import { FirebaseApp, initializeApp } from "firebase/app"
import {
    getFirestore,
    doc,
    getDoc,
    Firestore
} from "firebase/firestore"
import { Game } from './games/Game'

const firebaseConfig = {
    apiKey: "AIzaSyATlKKGw99gurKNwHL7BU1-_Llj0hwJy60",
    authDomain: "crawlear-com.firebaseapp.com",
    databaseURL: "https://crawlear-com-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "crawlear-com",
    storageBucket: "crawlear-com.appspot.com",
    messagingSenderId: "879856500816",
    appId: "1:879856500816:web:4287599cc229d5f4c3d155",
    measurementId: "G-YD7VLXPTM2"
}

export default class SSFirebaseBaseController {
    app: FirebaseApp
    db: Firestore

    constructor() {
        //this.app = initializeApp(firebaseConfig)
        this.db = getFirestore(this.app)
    }

    async getGame(gid: string): Promise<Game | null> {
        const docRef = doc(this.db, "games", gid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const res = docSnap.data();
            const game = new Game(res.name, res.date, res.location, res.isPublic,
                res.gameType, res.players, res.judges, res.maxTime, res.maxPoints,
                res.gates, res.zones, res.gameStatus, res.uids, res.jids, res.owner)

            game.gid = docRef.id;

            return game
        }

        return null
    }
}
