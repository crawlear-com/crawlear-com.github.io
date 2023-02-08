importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-messaging-compat.js');

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

const firebaseApp = firebase.initializeApp(firebaseConfig);
const messaging = firebaseApp.messaging();

messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    //icon: '/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});