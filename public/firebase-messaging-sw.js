// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object

/*
firebase.initializeApp({
    apiKey: "AIzaSyB1RGX10kQS968BP8neMleconBLdsZTNLM",
  authDomain: "profillipe-alunofiec.firebaseapp.com",
  projectId: "profillipe-alunofiec",
  storageBucket: "profillipe-alunofiec.appspot.com",
  messagingSenderId: "275122333834",
  appId: "1:275122333834:web:7f1c7511ae1b7b150a2573",
  measurementId: "G-LBNH74PVGS"
});
*/

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDoTRW7E48ru-AuukI2dwfbcu9jt2wM_0g",
    authDomain: "historinhas-18386.firebaseapp.com",
    projectId: "historinhas-18386",
    storageBucket: "historinhas-18386.appspot.com",
    messagingSenderId: "377869314621",
    appId: "1:377869314621:web:58ffe37b10a901514d9854",
    measurementId: "G-G9REXF7HZK"
  };
firebase.initializeApp(firebaseConfig);

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
/*
messaging.onBackgroundMessage(function(payload) {
    console.log(payload)
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body
    }
    self.registration.showNotification(notificationTitle, notificationOptions);
})
*/
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});