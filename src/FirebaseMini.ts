
import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import { FirebaseApp, initializeApp } from "firebase/app"
import { Auth, getAuth, GoogleAuthProvider } from "firebase/auth"
import { Firestore, getFirestore, query, collection, where, getDocs } from 'firebase/firestore'


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

interface FirebaseMini {
  app: FirebaseApp
  provider: GoogleAuthProvider
  auth: Auth
  db: Firestore
}

class FirebaseMini {
  constructor() {
    this.app = initializeApp(firebaseConfig)
    this.provider = new GoogleAuthProvider()
    this.auth = getAuth()
    this.db = getFirestore()
    this.initAppCheck()    
  }

  async getPublicGames() {
    try {
      const gids: Array<any> = [];
      const q = query(collection(this.db, "games"), 
        where("isPublic", "==", true));
      const querySnapshot = await getDocs(q);

      querySnapshot.docs.forEach((gameData)=>{
        const game = gameData.data();

        gids.push({ gid: game.gid })
      });
      return gids
      } catch(e) {
        return []
    }
  }

  initAppCheck() {
    initializeAppCheck(this.app, {
      provider: new ReCaptchaV3Provider('6LfMPSIiAAAAABUfGLi_j7mnUr1snw9RriT8eBqP'),
      isTokenAutoRefreshEnabled: true
    })
  }
}

export default FirebaseMini