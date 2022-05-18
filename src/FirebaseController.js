import 'babel-polyfill';
import Utils from './Utils';
import { Game } from './model/Game';

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
      judges: game.judges || [],
      isPublic: game.isPublic,
      maxTime: game.maxTime,
      maxPoints: game.maxPoints,
      zones: game.zones,
      gates: game.gates,
      gameStatus: game.gameStatus,
      owner: game.owner
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
            fiascoControlTextValues: [],
            controlTextValues: [],
            gateProgression: 1,
            gateProgressionData: [],
            gatesWithBonification: 0,
            gatesWithFail: 0,
            judgedBy: [],
            points: player.points,
            totalPoints: player.points,
            simpathyPoints: 0,
            time: player.time
          }];
          player.totalTime = player.time;
          player.totalPoints = player.points;
          player.totalGateProgression = 1;
        });
        data.gates = [1];
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
        data.jids,
        data.owner);
      game.gid = element.id;

      result.push(game);
    });

    return result;
  }

  async getGamesFromUser(uid, okCallback, koCallback) {
    try {
      const games = [];
      const q = query(collection(this.db, "games"), 
        where("uids", "array-contains", uid));
      const querySnapshot = await getDocs(q);

      querySnapshot.docs.forEach((gameData)=>{
        const game = gameData.data();

        if(!game.jids || game.jids.indexOf(uid)<0) {
          games.push(gameData);
        }
      });

      okCallback && okCallback(this.transformGamesIntoModel(games));
      } catch(e) {
        koCallback && koCallback();
    }
  }

  async getGamesFromJudge(jid, okCallback, koCallback) {
    try {
      const q = query(collection(this.db, "games"), 
        where("jids", "array-contains", jid));
      const querySnapshot = await getDocs(q);

      okCallback && okCallback(this.transformGamesIntoModel(querySnapshot.docs));
      } catch(e) {
        koCallback && koCallback();
    }
  }

  async getGamesFromDirector(jid, okCallback, koCallback) {
    try {
      const games = [];
      const q = query(collection(this.db, "games"), 
        where("owner", "array-contains", jid));
      const querySnapshot = await getDocs(q);

      querySnapshot.docs.forEach((gameData)=>{
        const game = gameData.data();

        if(!game.jids || game.jids.indexOf(jid)<0) {
          games.push(gameData);
        }
      });

      okCallback && okCallback(this.transformGamesIntoModel(games));
    } catch(e) {
      koCallback && koCallback();
    }
  }

  async setGame(game, okCallback, koCallback) {
    try {
      const gameRef = await addDoc(collection(this.db, "games"), this.transformGamesIntoData(game));
      game.gid = gameRef.id;
      okCallback && okCallback(game);
    } catch (e) {
      koCallback && koCallback();
    }  
  }

  updateGame(game) {
    updateDoc(doc(this.db, "games", game.gid), this.transformGamesIntoData(game));
  }

  async removeGame(gid) {
    await deleteDoc(doc(this.db, "games", gid));
    remove(ref(this.rdb, `gameProgression/${gid}/`));
    remove(ref(this.rdb, `presenceRequests/${gid}/`));
  }

  async removeIdFromGame(game, id, where) {
    const docRef = doc(this.db, "games", game.gid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const updatedGame = docSnap.data();
      const position = updatedGame[where].indexOf(id);

      updatedGame.gid = docSnap.id;
      updatedGame[where].splice(position, 1);
      const currentGameData = this.transformGamesIntoData(updatedGame),
        updateData = {};
        updateData[where] = currentGameData[where];
      
      currentGameData[where] = updateData[where];
      updateDoc(doc(this.db, "games", game.gid), updateData);

      return updatedGame;
    }

    return game;
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

  getGameProgressionOnce(gid, okCallback, koCallback) {
    const dataSnapshot = get(ref(this.rdb, `gameProgression/${gid}`));
    
    dataSnapshot.then((snapshot)=>{
      okCallback && okCallback(snapshot.key, snapshot.val());
    }, koCallback);
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

  setGameProgression(gid, playerId, group, zone, data) {
    set(ref(this.rdb, `gameProgression/${gid}/${group}/${playerId}/${zone}`), data);
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
          zone.data && (game.players[playerPos].zones[zonePos] = zone.data);
        });
      });

      okCallback && okCallback(game);
    }, koCallback);
  }

  createGameProgression(game) {
    for(let i=0; i<game.players.length;i++) {
      for(let j=0; j<game.zones; j++) {
        this.setGameProgression(game.gid, 
            game.players[i].id,
            game.players[i].group,
            j,
            {
              status: 'waiting',
              data: {}
            });
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

  setDirectorPresenceRequest(gid, zone, playerName, fromName, onPresenceRequestStatusChange) {
    const gameRequestRef = push(ref(this.rdb, `presenceRequests/${gid}/`), {
      zone: zone,
      playerName: playerName,
      fromName: fromName,
      date: new Date().toLocaleDateString(),
      status : 'pending'
    });

    onValue(gameRequestRef, (snapshot) => {
      const data = snapshot.val();
      data && onPresenceRequestStatusChange(data, snapshot.key);
    });
  }

  getDirectorPresenceRequest(gid, onPresenceRequestAdded, onPresenceRequestChanged) {
    const gameProgressionRef = ref(this.rdb, `presenceRequests/${gid}`);

    onChildAdded(gameProgressionRef, (snapshot) => {
      onPresenceRequestAdded(snapshot.key, snapshot.val());
    });

    onChildChanged(gameProgressionRef, (snapshot) => {
      onPresenceRequestChanged(snapshot.key, snapshot.val());
    });
  }

  acceptDirectorPresenceRequest(gid, requestKey) {
    set(ref(this.rdb, `presenceRequests/${gid}/${requestKey}/status/`), "accepted");
  }

  removeDirectorPresenceRequest(gid) {
    remove(ref(this.rdb, `presenceRequests/${gid}`));
  }
}

export default FirebaseController;