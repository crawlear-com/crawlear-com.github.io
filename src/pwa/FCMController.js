import { getMessaging, getToken } from "firebase/messaging";
import { onBackgroundMessage } from "firebase/messaging/sw";

const GRANTED = 'granted';

class FCMController {
    constructor(firebaseApp, fcmKey) {
        this.messaging = getMessaging(firebaseApp);
        getToken(this.messaging, {vapidKey: fcmKey}).then((currentToken) => {
            if (currentToken) {
                console.log("Current token: " + currentToken);
            } else {
                console.log("No registration... showing permission request UI");
            }
            }).catch((err) => {
                console.log('An error occurred while retrieving token. ', err);
            });
    }

    requestPermission() {
        Notification.requestPermission().then((permission) => {
            if (permission === GRANTED) {
                
            }
        });
    }
}

export default FCMController;