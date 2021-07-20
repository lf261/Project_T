import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDv3aKoElNbE2-XWSPpa4dV11t1hLhlv4k",
    authDomain: "twithub-3acda.firebaseapp.com",
    projectId: "twithub-3acda",
    storageBucket: "twithub-3acda.appspot.com",
    messagingSenderId: "812946700921",
    appId: "1:812946700921:web:f0a613a22337b8e90c72a8",
    measurementId: "G-6LXVL963PK"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;