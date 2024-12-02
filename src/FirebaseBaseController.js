import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

import { initializeApp } from "firebase/app"
import { getDatabase } from "firebase/database"
import { setDoc,
          doc,
          getDoc,
          query,
          collection,
          getFirestore,
          where,
          getDocs
        } from "firebase/firestore"

import { getAuth,
        getRedirectResult,
        GoogleAuthProvider,
          signInWithPopup,
          setPersistence,
          browserLocalPersistence } from "firebase/auth"

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDERID,
  appId: process.env.REACT_APP_APPID,
  measurementId: process.env.REACT_APP_MEASUREMENTID
}

class FirebaseBaseController {
  constructor() {
    this.app = initializeApp(firebaseConfig)
    this.provider = new GoogleAuthProvider()
    this.auth = getAuth()
    this.db = getFirestore()
    this.rdb = getDatabase()
    this.initAppCheck()
  }

  getFullFirebase(callback) {
    import(/* webpackChunkName: "FirebaseController" */ './FirebaseController').then(module => {
      const FirebaseController = module.default

      const fullFb = new FirebaseController(this)
      window.crawlear = window.crawlear || {}
      window.crawlear.fb = fullFb

      callback && callback()
    })
  }

  initAppCheck() {
    initializeAppCheck(this.app, {
      provider: new ReCaptchaV3Provider('6LfMPSIiAAAAABUfGLi_j7mnUr1snw9RriT8eBqP'),
      isTokenAutoRefreshEnabled: true
    })
  }

  checkIfLogged(onLoggin, notLogged) {
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
        } else {
          notLogged && notLogged()
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

  signInWithGoogle(callback) {
    setPersistence(this.auth, browserLocalPersistence)
    .then(() => {
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
    })
    .catch((error) => { })
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

      q = query(collection(this.db, "routes"),
      where("uids", "array-contains", uid));
      querySnapshot = await getDocs(q);
      data.routes = querySnapshot.docs.length;

      okCallback && okCallback(data);
      } catch(e) {
        koCallback && koCallback();
    }
  }

  isUserLogged() {
    return this.auth.currentUser != null;
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

  setUserInContext(data, uid) {
    data.instagram = data.instagram || '';

    window.crawlear = {
      ...window.crawlear,
      user: data
    };
    window.crawlear.user.uid = uid;
  }

  async routeSearchByLatLon(latlon, bounds, okCallback, koCallback) {
    try {
      const routesRef = collection(this.db, "routes")
      const q = query(routesRef, where('point.lat', '>', latlon.lat - bounds.lat), where('point.lat', '<', latlon.lat + bounds.lat))
      const querySnapshot = await getDocs(q);
      const result = [];

      querySnapshot.forEach((doc)=>{
        const data = doc.data()

        if(data.point.lon > latlon.lng - bounds.lon && data.point.lon < latlon.lng + bounds.lon) {
          data.rid = doc.id
          result.push(data)
        }
      });
      okCallback && okCallback(result)
      } catch(e) {
        koCallback && koCallback(e)
    }
  }

  async getGpx(gid, okCallback, koCallback) {
    const docRef = doc(this.db, "gpx", gid)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      const res = docSnap.data()
      res.gid = docRef.id

      okCallback(res)
    } else {
      koCallback()
    }
  }

  async getRoute(rid, resolveGpx, okCallback, koCallback) {
    const docRef = doc(this.db, "routes", rid)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      const res = docSnap.data()
      res.rid = docRef.id

      if (resolveGpx && res.gpx) {
        this.getGpx(res.gpx, (gpx) => {
          res.gpx = gpx
          res.gpx.gid = gpx.gid
          okCallback(res)
        }, koCallback)
      } else {
        okCallback(res)
      }
    } else {
      koCallback()
    }
  }

  async getGame(gid, okCallback, koCallback) {
    const docRef = doc(this.db, "games", gid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const res = docSnap.data();

      res.gid = docRef.id;
      okCallback && okCallback(res);
    } else {
      koCallback && koCallback();
    }
  }
}

export default FirebaseBaseController