import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { setDoc, 
         doc,
         getDoc,
         getFirestore } from "firebase/firestore";

import { getAuth, 
  getRedirectResult,
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

  initAppCheck() {
    const appCheck = initializeAppCheck(this.app, {
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
}

export default FirebaseBaseController