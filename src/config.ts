import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBnGUVsD4dqkI6-eemZlIXVIlp56YDWWT4",
    authDomain: "nomegle.firebaseapp.com",
    projectId: "nomegle",
    storageBucket: "nomegle.appspot.com",
    messagingSenderId: "679800466085",
    appId: "1:679800466085:web:3047e6bac97acad42abb4c",
    measurementId: "G-MEXJETYK40"
};
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);


export const analytics = firebase.analytics();