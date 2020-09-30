import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAO9Zlo5JB_JkGqVudhxfjKbyC0EhlTZbY",
    authDomain: "e-clone-61601.firebaseapp.com",
    databaseURL: "https://e-clone-61601.firebaseio.com",
    projectId: "e-clone-61601",
    storageBucket: "e-clone-61601.appspot.com",
    messagingSenderId: "258604705531",
    appId: "1:258604705531:web:7dd4423f33e657fbe4b25e",
    measurementId: "G-JD2DGNTMGV"
  };

 const firebaseApp = firebase.initializeApp(firebaseConfig)
 
 const db = firebaseApp.firestore()
 const auth = firebaseApp.auth()

 export { db, auth}