import 'babel-polyfill';
import Utils from './Utils';
import Game from './model/Game';

import { initializeApp } from "firebase/app"
import { getDatabase, 
         onValue,
         onChildAdded,
         onChildRemoved,
         push,
         set,
         remove,
         ref, 
         endAt} from "firebase/database";
import { addDoc, getFirestore } from "firebase/firestore"
import { setDoc, 
         doc,
         getDoc, 
         query, 
         collection, 
         where,
         orderBy,
         limit,
         startAt,
         getDocs,
         deleteDoc } from "firebase/firestore";

import {  getAuth, 
  getRedirectResult,
  signInWithRedirect, 
  signInWithPopup, 
  setPersistence,
  browserLocalPersistence,
  GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyATlKKGw99gurKNwHL7BU1-_Llj0hwJy60",
  authDomain: "crawlear-com.firebaseapp.com",
  databaseURL: "https://crawlear-com-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "crawlear-com",
  storageBucket: "crawlear-com.appspot.com",
  messagingSenderId: "879856500816",
  appId: "1:879856500816:web:4287599cc229d5f4c3d155",
  measurementId: "G-YD7VLXPTM2"
};

class FirebaseController {
  constructor() {
    this.app = initializeApp(firebaseConfig);
    this.provider = new GoogleAuthProvider();
    this.auth = getAuth();
    this.db = getFirestore();
    this.rdb = getDatabase();
  }

  async userSearch(name, okCallback, koCallback) {
    try {
      const gamesRef = collection(this.db, "users");
      const q = query(gamesRef, orderBy('displayName'), startAt(name), limit(10));
      const querySnapshot = await getDocs(q);
      const result = [];

      querySnapshot.forEach((doc)=>{
        const data = doc.data();

        result.push({
          uid: doc.id,
          displayName: data.displayName,
          photoURL: data.photoURL
        });
      });
      okCallback && okCallback(result);
      } catch(e) {
        koCallback && koCallback(e);
    }
  }

  async getUser(uid, okCallback, koCallback) {
    const docRef = doc(this.db, "users", uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      okCallback(docSnap.data());
    } else {
      koCallback();
    }
  }

  async setUser({uid, displayName, photoURL, handicap, description}, okCallback, koCallback) {
    const data = {
      displayName: displayName,
      photoURL: photoURL,
      handicap: handicap,
      registrationDate: new Date().toString(),
      description: description || ""
    };

    try {
      await setDoc(doc(this.db, "users", uid), data);
      okCallback && okCallback(data);

    } catch (e) {
      koCallback && koCallback();
    }
  }

  transformGamesIntoData(game) {
    if (game.uids.indexOf(window.crawlear.user.uid)<0) {
      game.uids.push(window.crawlear.user.uid);
    }

    return {
      name: game.name,
      uids: game.uids,
      date: game.date,
      location: game.location,
      gameType: game.gameType,
      pointsType: game.pointsType, 
      players: game.players,
      isPublic: game.isPublic,
      maxTime: game.maxTime,
      maxPoints: game.maxPoints
    };
  }

  transformGamesIntoModel(data) {
    let result = [];

    data.forEach(element => {
      const data = element.data();
      const game = new Game(data.name, 
          data.date, 
          data.isPublic, 
          data.location, 
          data.players, 
          data.gameStatus, 
          data.gameType, 
          data.pointsType, 
          data.uids,
          data.maxPoints,
          data.maxTime);

      game.setGid(element.id);
      result.push(game);
    });

    return result;
  }

  async getGamesFromUser(uid, okCallback, koCallback) {
    try {
      const q = query(collection(this.db, "games"), where("uids", "array-contains", uid));
      const querySnapshot = await getDocs(q);
      okCallback && okCallback(this.transformGamesIntoModel(querySnapshot.docs));
      } catch(e) {
        koCallback && koCallback();
    }
  }

  async getPublicGames(okCallback, koCallback) {
    try {
      const q = query(collection(this.db, "games"), where("isPublic", "==", true));
      const querySnapshot = await getDocs(q);

      okCallback && okCallback(querySnapshot.docs);
      } catch(e) {
        koCallback && koCallback();
    }
  }

  setGame(game, okCallback, koCallback) {
    let playersUid = [];
    
    if(this.isUserLogged()) {
      game.players.forEach(element => { 
        element.uid && playersUid.push(element.uid); 
      });

      try {
        addDoc(collection(this.db, "games"), this.transformGamesIntoData(game));
        okCallback && okCallback();
      } catch (e) {
        koCallback && koCallback();
      }  
    }
  }

  async removeGame(gid) {
    await deleteDoc(doc(this.db, "games", gid));
  }

  async removeUidFromGame(game, uid) {
    const position = game.uids.indexOf(uid);

    game.uids.splice(position, 1);

    if(game.uids.length>0) {
      setDoc(doc(this.db, "games", game.gid), {
        name: game.name,
        uids: game.uids,
        date: game.date,
        location: game.location,
        gameType: game.gameType,
        pointsType: game.pointsType, 
        players: game.players,
        isPublic: game.isPublic,
        maxTime: game.maxTime,
        maxPoints: game.maxPoints
      });
    } else {
      this.removeGame(game.gid);
    }
  }

  isUserLogged() {
    return this.auth.currentUser != null;
  }

  checkIfLogged(onLoggin) {
    this.checkIfRedirect(onLoggin);
    this.auth.onAuthStateChanged((user) => {
        if (user) {
          this.getUser(user.uid, (data)=>{
            this.setUserInContext(data, user.uid);
              onLoggin();
            }, ()=> {
                user.handicap = 0;
                this.setUser(user, (data)=> {
                  this.setUserInContext(data, user.uid);
                  onLoggin();
                }, ()=>{});
          });
        }
    });
  }

  checkIfRedirect(callback) {
    getRedirectResult(this.auth)
    .then((result) => {
      this.getUser(result.user.uid, (data)=>{
        this.setUserInContext(data, result.user.uid);
        callback && callback(data);
      }, ()=> {
        this.setUser(result.user, callback, (data)=>{
          this.setUserInContext(data, result.user.uid);
        })
      });
    }).catch((error) => { });
  }

 setUserInContext(data, uid) {
    window.crawlear = {
      ...window.crawlear,
      user: data
    };
  
    window.crawlear.user.registrationDate = new Date(data.registrationDate).toLocaleDateString();
    window.crawlear.user.uid = uid;
  }
  
  signInWithGoogle(callback) {
    setPersistence(this.auth, browserLocalPersistence)
    .then(() => {
      if (Utils.isMobile()) {
        signInWithRedirect(this.auth, this.provider);
      } else {
        signInWithPopup(this.auth, this.provider)
        .then((result) => {
            this.getUser(result.user.uid, (data)=>{
              this.setUserInContext(data, result.user.uid);
              callback && callback(data);
            }, ()=> {
              this.setUser(result.user, callback, (data)=>{
                this.setUserInContext(data, result.user.uid);
              })
      
            });
        }).catch((error) => { });  
      }
    })
    .catch((error) => { })
  }
      
  logout() {
    getAuth().signOut();
    window.crawlear.user = {};
  };

  getUserGameRequests(uid, okCallback, koCallback, onRequestAdded, onRequestRemoved) {
    const requestsRef = ref(this.rdb, `gameRequests/${uid}`);

    onChildAdded(requestsRef, (snapshot) => {
      const res = {};

      res[snapshot.key] = snapshot.val();
      onRequestAdded(res);
    });

    onChildRemoved(requestsRef, (snapshot) => {
      onRequestRemoved(snapshot.key);
    });
  }

  acceptGameRequest(toUid, grUid) {
    set(ref(this.rdb, `gameRequests/${toUid}/${grUid}/status/`), "accepted");
    remove(ref(this.rdb, `gameRequests/${toUid}/${grUid}/`));
  }

  rejectGameRequest(toUid, grUid) {
    set(ref(this.rdb, `gameRequests/${toUid}/${grUid}/status/`), "rejected");
    remove(ref(this.rdb, `gameRequests/${toUid}/${grUid}/`));
  }

  setUserGameRequest(from, fromName, toUid, gameName, onGameRequestStatusChange) {
    const gameRequestRef = push(ref(this.rdb, `gameRequests/${toUid}/`), {
      fromUid: from,
      fromName: fromName,
      toUid: toUid,
      gameName: gameName,
      date: new Date().toLocaleDateString(),
      status : 'pending'
    });

    onValue(gameRequestRef, (snapshot) => {
      const data = snapshot.val();
      data && onGameRequestStatusChange(data, data.status);
    });
  }

}

export default FirebaseController;