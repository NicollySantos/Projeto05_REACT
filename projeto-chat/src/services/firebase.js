import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBPd0RwiDpD7qOFp_K-P8M7SHGPZkjFtwk",
    authDomain: "projeto-chat-e03f0.firebaseapp.com",
    projectId: "projeto-chat-e03f0",
    storageBucket: "projeto-chat-e03f0.appspot.com",
    messagingSenderId: "882097445291",
    appId: "1:882097445291:web:a3f589a8385a9045eadaee",
    measurementId: "G-KD9KCDP8C5"
  };

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
