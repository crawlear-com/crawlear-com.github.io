import 'babel-polyfill';
import Utils from './Utils';
import { Game } from './model/Game.ts';

import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import FCMController from './pwa/FCMController';

import { initializeApp } from "firebase/app";
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
import { addDoc,
         setDoc, 
         doc,
         getDoc,
         updateDoc,
         query,
         collection, 
         where,
         orderBy,
         limit,
         startAt,
         getFirestore,
         getDocs,
         deleteDoc,
         writeBatch } from "firebase/firestore";

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
  measurementId: "G-YD7VLXPTM2",
  fcmKey: "BF8jxdqAtWQhEodSWKx5G5MeV1vumAdNLZrsnHC7hzzW7ZtRlCoJJ_9dvZVq5WsepT8oM9FqUGgpjqS4s2AqRYA"
};

class FirebaseController {
  constructor() {
    this.app = initializeApp(firebaseConfig);
    this.provider = new GoogleAuthProvider();
    this.auth = getAuth();
    this.db = getFirestore();
    this.rdb = getDatabase();
    this.initAppCheck();
    this.fcm = new FCMController(this.app, firebaseConfig.fcmKey);
  }

  async userSearch(name, okCallback, koCallback) {
    try {
      const usersRef = collection(this.db, "users");
      const q = query(usersRef, orderBy('displayName'), startAt(name), limit(10));
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
      const user = docSnap.data();

      user.uid = docRef.id;
      okCallback && okCallback(user);
    } else {
      koCallback && koCallback();
    }
  }

  async getUserExtraData(uid, okCallback, koCallback) {
    try {
      const data = {};
      let q = query(collection(this.db, "games"), 
        where("uids", "array-contains", uid)),
       querySnapshot = await getDocs(q);
      data.pilotGames = querySnapshot.docs.length;

      q = query(collection(this.db, "games"), 
        where("jids", "array-contains", uid));
      querySnapshot = await getDocs(q);
      data.judgeGames = querySnapshot.docs.length;

      q = query(collection(this.db, "games"), 
        where("owner", "array-contains", uid));
      querySnapshot = await getDocs(q);
      data.ownerGames = querySnapshot.docs.length;

      q = query(collection(this.db, "follows"), 
      where("toUid", "==", uid));
      querySnapshot = await getDocs(q);
      data.followers = querySnapshot.docs.length;

      q = query(collection(this.db, "follows"), 
      where("fromUid", "==", uid));
      querySnapshot = await getDocs(q);
      data.following = querySnapshot.docs.length;

      okCallback && okCallback(data);
      } catch(e) {
        koCallback && koCallback();
    }
  }

  async setUser({uid, displayName, photoURL, description, instagram}, okCallback, koCallback) {
    const data = {
      displayName: displayName,
      photoURL: photoURL,
      registrationDate: new Date().toString(),
      description: description || "",
      instagram: instagram || ""
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
      owner: game.owner,
      courtesyTime: game.courtesyTime
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
            time: player.time,
            handicap: 0
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

  async getGame(gid, okCallback, koCallback) {
    const docRef = doc(this.db, "games", gid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const res = docSnap.data();

      res.gid = docRef.id;
      okCallback(res);
    } else {
      koCallback();
    }
  }


  async getGamesFromUser(uid, onlyIsPublic, okCallback, koCallback) {
    try {
      const games = [];
      const q = query(collection(this.db, "games"), 
        where("uids", "array-contains", uid));
      const querySnapshot = await getDocs(q);

      querySnapshot.docs.forEach((gameData)=>{
        const game = gameData.data();

        if(!game.jids || game.jids.indexOf(uid)<0) {
          ((onlyIsPublic && game.isPublic) || !onlyIsPublic) && games.push(gameData);
        }
      });

      okCallback && okCallback(this.transformGamesIntoModel(games));
      } catch(e) {
        koCallback && koCallback();
    }
  }

  async getGamesFromJudge(jid, onlyIsPublic, okCallback, koCallback) {
    try {
      const games = [];
      const q = query(collection(this.db, "games"), 
        where("jids", "array-contains", jid));
      const querySnapshot = await getDocs(q);

      querySnapshot.docs.forEach((gameData)=>{
        const game = gameData.data();

        if ((onlyIsPublic && game.isPublic) || !onlyIsPublic) {
          games.push(gameData);
        }
      });

      okCallback && okCallback(this.transformGamesIntoModel(games));
      } catch(e) {
        koCallback && koCallback();
    }
  }

  async getGamesFromDirector(jid, onlyIsPublic, okCallback, koCallback) {
    try {
      const games = [];
      const q = query(collection(this.db, "games"), 
        where("owner", "array-contains", jid));
      const querySnapshot = await getDocs(q);

      querySnapshot.docs.forEach((gameData)=>{
        const game = gameData.data();

        if(!game.jids || game.jids.indexOf(jid)<0) {
          ((onlyIsPublic && game.isPublic) || !onlyIsPublic) && games.push(gameData);
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

  initAppCheck() {
    const appCheck = initializeAppCheck(this.app, {
      provider: new ReCaptchaV3Provider('6LfMPSIiAAAAABUfGLi_j7mnUr1snw9RriT8eBqP'),
      isTokenAutoRefreshEnabled: true
    });
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
    data.instagram = data.instagram || '';

    window.crawlear = {
      ...window.crawlear,
      user: data
    };
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

  setGameProgression(gid, playerId, group, zone, fullData) {
    set(ref(this.rdb, `gameProgression/${gid}/${group}/${playerId}/${zone}`), fullData);
  }

  removeGameProgression(gid) {
    remove(ref(this.rdb, `gameProgression/${gid}`));
  }

  getGameResult(game, okCallback, koCallback) {
    const dataSnapshot = get(ref(this.rdb, `gameProgression/${game.gid}`));
    
    dataSnapshot.then((snapshot)=>{
      const gameProgression = snapshot.val();

      Object.entries(gameProgression).forEach((player, playerPos)=>{
        Object.entries(player[1]).forEach((zone, zonePos)=>{
          zone[1].data && (game.players[playerPos].zones[zonePos] = zone[1].data);
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

  async setPost(uid, url, date, text, gid, okCallback, koCallback) {
    const data = {
      uid: uid,
      gid: gid,
      date: date,
      url: url,
      text: text
    };

    if (text.length>=0 && url.length >=0) {
      try {
        const postRef = await addDoc(collection(this.db, "socialPosts"), data);
        data.pid = postRef.id;
        okCallback && okCallback(data);
      } catch (e) {
        koCallback && koCallback();
      }
    } else {
      koCallback && koCallback();
    }
  }

  async setFollow(fromUid, toUid, okCallback, koCallback) {
    try {
      const postRef = await addDoc(collection(this.db, "follows"), {
        fromUid: fromUid,
        toUid: toUid
      });
      okCallback && okCallback(postRef.id);
    } catch (e) {
      koCallback && koCallback();
    }
  }

  async removeFollow(fid, okCallback, koCallback) {
    await deleteDoc(doc(this.db, "follows", fid));
    okCallback && okCallback();
  }


  async getPost(pid, okCallback, koCallback) {
      const docRef = doc(this.db, "socialPosts", pid);
      const docSnap = await getDoc(docRef);
  
      if (docSnap.exists()) {
        const res = docSnap.data();
  
        res.pid = docRef.id;
        okCallback(res);
      } else {
        koCallback();
      }
  }

  async getPosts(uid, okCallback, koCallback) {
    try {
      const q = query(collection(this.db, "socialPosts"), 
        where("uid", "==", uid), orderBy("date", "desc"), limit(10));
      const querySnapshot = await getDocs(q);
      const posts = [];

      querySnapshot.docs.forEach((postData)=>{
        posts.push({...postData.data(), pid: postData.id});
      });

      okCallback && okCallback(posts);
      } catch(e) {
        koCallback && koCallback();
    }
  }

  async getPostsFromFollowFeed(uid, okCallback, koCallback) {
    try {
      const posts = [];
      const q = query(collection(this.db, "follows"), 
        where("fromUid", "==", uid));
      const querySnapshotFollows = await getDocs(q);
      const followsDocs = querySnapshotFollows.docs;

      while (followsDocs.length > 0) {
        const follows = [];
        const splited = followsDocs.splice(0,10);

        splited.forEach((followData)=>{
          const data = followData.data();
          follows.push(data.toUid);
        });

        const qp = query(collection(this.db, "socialPosts"), 
              where("uid", "in", follows),
              orderBy("date", "desc"), limit(10));
        const querySnapshotPosts = await getDocs(qp);

        querySnapshotPosts.docs.forEach((postData)=>{
          const data = postData.data();
          data.pid = postData.id;
          posts.push(data);
        });
      }

      okCallback && okCallback(posts);
    } catch(e) {
      koCallback && koCallback();
    }
  }

  async removePost(pid, okCallback, koCallback) {
    await deleteDoc(doc(this.db, "socialPosts", pid));
    this.removeLikes(pid, 10);

    okCallback && okCallback();
  }

  async getPostLikesCount(pid, okCallback, koCallback) {
    try {
      const q = query(collection(this.db, "likes"), 
        where("pid", "==", pid), 
        limit(15));
      const querySnapshot = await getDocs(q);
      const likes = querySnapshot.docs.length;

      okCallback && okCallback(likes);
      } catch(e) {
        koCallback && koCallback();
    }    
  }

  async getIfPostIsLiked(pid, uid, okCallback, koCallback) {
    try {
      const q = query(collection(this.db, "likes"), 
        where("uid", "==", uid), 
        where("pid", "==", pid), 
        limit(1));
      const querySnapshot = await getDocs(q);
      const isLiked = querySnapshot.docs.length===1;

      okCallback && okCallback(isLiked, isLiked ? querySnapshot.docs[0].id : '');
      } catch(e) {
        koCallback && koCallback();
    }
  }

  async getFidFromFollow(fromUid, toUid, okCallback, koCallback) {
    try {
      const q = query(collection(this.db, "follows"), 
        where("fromUid", "==", fromUid), 
        where("toUid", "==", toUid), 
        limit(1));
      const querySnapshot = await getDocs(q);
      const fid = querySnapshot.docs.length===1 ? querySnapshot.docs[0].id : -1;

      okCallback && okCallback(fid);
      } catch(e) {
        koCallback && koCallback();
    }
  }

  async setLike(pid, uid, okCallback, koCallback) {
    const data = {
      pid: pid,
      uid: uid
    };

    try {
      const postRef = await addDoc(collection(this.db, "likes"), data);

      okCallback && okCallback(postRef.id);
    } catch (e) {
      koCallback && koCallback();
    }
  }

  async removeLike(lid, okCallback, koCallback) {
    await deleteDoc(doc(this.db, "likes", lid));
    okCallback && okCallback();
  }

  async removeLikes(pid, batchSize) {
    const collectionRef = query(collection(this.db, "likes"), 
      where("pid", "==", pid), orderBy('__name__'), limit(batchSize));
  
    return new Promise((resolve, reject) => {
      this.deleteQueryBatch(collectionRef, resolve).catch(reject);
    });
  }
  
  async deleteQueryBatch(query, resolve) {
    const snapshot = await getDocs(query);
  
    const batchSize = snapshot.size;
    if (batchSize === 0) {
      resolve();
      return;
    }
  
    snapshot.docs.forEach(async (doc) => {
      const batch = writeBatch(this.db)

      batch.delete(doc.ref);
      batch.commit();
    });

    setTimeout(()=>{
      this.deleteQueryBatch(query, resolve);
    }, 100);
  }
}

export default FirebaseController;