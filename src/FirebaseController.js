import 'babel-polyfill';
import Utils from './Utils';
import { Game } from './model/Game';

import { initializeApp } from "firebase/app"
import { getDatabase, 
         onValue,
         onChildAdded,
         onChildRemoved,
         onChildChanged,
         push,
         set,
         get,
         remove,
         ref } from "firebase/database";
import { addDoc, getFirestore } from "firebase/firestore"
import { setDoc, 
         doc,
         getDoc,
         updateDoc,
         query, 
         collection, 
         where,
         orderBy,
         limit,
         startAt,
         getDocs,
         deleteDoc } from "firebase/firestore";

import { getAuth, 
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

  async setUser({uid, displayName, photoURL, description}, okCallback, koCallback) {
    const data = {
      displayName: displayName,
      photoURL: photoURL,
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
    return {
      name: game.name,
      uids: game.uids,
      jids: game.jids,
      date: game.date,
      location: game.location,
      gameType: game.gameType,
      players: game.players,
      judges: game.judges,
      isPublic: game.isPublic,
      maxTime: game.maxTime,
      maxPoints: game.maxPoints,
      zones: game.zones,
      gates: game.gates,
      gameStatus: game.gameStatus
    };
  }

  transformGamesIntoModel(data) {
    let result = [];

    data.forEach(element => {
      let game;
      const data = element.data(),
        zones = data.zones;

      if (!zones) {
        data.players.forEach((player)=>{
          player.zones = [{
            controlTextValues: player.controlTextValues,
            gateProgression: 1,
            points: player.points,
            time: player.time
          }];
          player.totalTime = player.time;
          player.totalPoints = player.points;
          player.totalGateProgression = 1;
        });
        data.gates = 1;
        data.zones = 1;
      }
      game = new Game(data.name, 
        data.date,
        data.location,
        data.isPublic, 
        data.gameType, 
        data.players, 
        data.judges || [],
        data.maxTime,
        data.maxPoints,
        data.gates,
        data.zones,
        data.gameStatus,
        data.uids,
        data.jids);
      game.gid = element.id;

      result.push(game);
    });

    return result;
  }

  async getGamesFromUser(uid, okCallback, koCallback) {
    const currentGames = [];
    const userGames = [];

    try {
      const q = query(collection(this.db, "games"), 
        where("uids", "array-contains", uid));
      const querySnapshot = await getDocs(q);

      querySnapshot.docs.forEach((game)=>{
        const data = game.data();
        
        if(!data.jids || data.jids.indexOf(window.crawlear.user.uid)<0) {
          if (typeof data.gameStatus === 'undefined' || data.gameStatus === 2) {
            userGames.push(game);
          } else if(data.gameStatus === 0 || data.gameStatus === 1){
            currentGames.push(game);
          } else {
            userGames.push(game);
          }
        }
      });

      okCallback && okCallback(this.transformGamesIntoModel(userGames), 
        this.transformGamesIntoModel(currentGames));
      } catch(e) {
        koCallback && koCallback();
    }
  }

  async getGamesFromJudge(jid, okCallback, koCallback) {
    try {
      const q = query(collection(this.db, "games"), 
        where("jids", "array-contains", jid));
      const judgeGames = [];
      const currentGames = [];
      const querySnapshot = await getDocs(q);

      querySnapshot.docs.forEach((game)=>{
        const data = game.data();
        
        if(data.gameStatus !== 2) {
          currentGames.push(game);
        } else {
          judgeGames.push(game);
        }
      });

      okCallback && okCallback(this.transformGamesIntoModel(judgeGames),
        this.transformGamesIntoModel(currentGames));
      } catch(e) {
        koCallback && koCallback();
    }
  }

  async setGame(game, okCallback, koCallback) {
    if(this.isUserLogged()) {
      try {
        if (game.uids.length<=0) {
          game.uids.push(window.crawlear.user.uid);
        }

        const gameRef = await addDoc(collection(this.db, "games"), this.transformGamesIntoData(game));
        game.gid = gameRef.id;
        okCallback && okCallback(game);
      } catch (e) {
        koCallback && koCallback();
      }  
    }
  }

  updateGame(game) {
    updateDoc(doc(this.db, "games", game.gid), this.transformGamesIntoData(game));
  }

  async removeGame(gid) {
    await deleteDoc(doc(this.db, "games", gid));
  }

  async removeUidFromGame(game, uid) {
    const position = game.uids.indexOf(uid);

    game.uids.splice(position, 1);

    if(game.uids.length>0) {
      updateDoc(doc(this.db, "games", game.gid), this.transformGamesIntoData(game));
    } else {
      this.removeGame(game.gid);
    }
  }

  async removeUidFromJudgeGame(game, jid) {
    const position = game.jids.indexOf(jid);

    game.jids.splice(position, 1);
    setDoc(doc(this.db, "games", game.gid), this.transformGamesIntoData(game));
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

  getGameProgression(gid, okCallback, koCallback, onRequestAdded, onRequestChanged) {
    const gameProgressionRef = ref(this.rdb, `gameProgression/${gid}`);

    onChildAdded(gameProgressionRef, (snapshot) => {
      onRequestAdded(snapshot.key, snapshot.val());
    });

    onChildChanged(gameProgressionRef, (snapshot) => {
      onRequestChanged(snapshot.key, snapshot.val());
    });
  }

  setGameProgression(gid, uid, zone, data) {
    set(ref(this.rdb, `gameProgression/${gid}/${uid}/${zone}`), data);
  }

  removeGameProgression(gid) {
    remove(ref(this.rdb, `gameProgression/${gid}`));
  }

  getGameResult(game, okCallback, koCallback) {
    const dataSnapshot = get(ref(this.rdb, `gameProgression/${game.gid}`));
    
    dataSnapshot.then((snapshot)=>{
      const gameProgression = snapshot.val();

      Object.entries(gameProgression).forEach((player, playerPos)=>{
        player[1].forEach((zone, zonePos)=>{
          game.players[playerPos].zones[zonePos] = zone;
        });
      });

      okCallback && okCallback(game);
    }, koCallback);
  }

  async setGameResultForPlayerZone(game, player, zone) {
    const playerZone = game.players[player].zones[zone];
    const docRef = doc(collection(doc(this.db, "games", game.gid), "players"), `${player}`);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();

      data.players[player].zones[zone] = playerZone;
      setDoc(docRef, data);
    }
  }

  createGameProgression(game) {
    for(let i=0; i<game.players.length;i++) {
      for(let j=0; j<game.zones; j++) {
        this.setGameProgression(game.gid, 
            game.players[i].id,
            j,
            'waiting');
      }
    }
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