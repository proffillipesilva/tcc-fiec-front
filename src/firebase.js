import { initializeApp } from "firebase/app";

import {getMessaging, getToken, onMessage} from 'firebase/messaging'

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object

const firebaseConfig = {
    apiKey: "AIzaSyDoTRW7E48ru-AuukI2dwfbcu9jt2wM_0g",
    authDomain: "historinhas-18386.firebaseapp.com",
    projectId: "historinhas-18386",
    storageBucket: "historinhas-18386.appspot.com",
    messagingSenderId: "377869314621",
    appId: "1:377869314621:web:58ffe37b10a901514d9854",
    measurementId: "G-G9REXF7HZK"
  };

const firebaseApp = initializeApp(firebaseConfig);

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = getMessaging(firebaseApp);


export const requestForToken = (setTokenFound, setToken) => {
    return getToken(messaging, {vapidKey: process.env.REACT_APP_VAPIDKEY})
    .then((currentToken) => {
        if(currentToken){
            console.log("token atual: ", currentToken);
            setTokenFound(true);
            setToken(currentToken)
        } else {
            console.log("Falta permissao")
        }
    }).catch((err) => console.log("Um erro aconteceu - ", err))
}



export const onMessageListener = () => {
    return new Promise((resolve) => {
        onMessage(messaging, (payload) => {
            resolve(payload);
        })
    })
}