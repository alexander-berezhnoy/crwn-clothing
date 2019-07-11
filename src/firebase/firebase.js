import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBJse3-WSSQWwtrSgvwfP_4HrHpo-ZhuGo",
  authDomain: "ob-crwn-db.firebaseapp.com",
  databaseURL: "https://ob-crwn-db.firebaseio.com",
  projectId: "ob-crwn-db",
  storageBucket: "",
  messagingSenderId: "582260172961",
  appId: "1:582260172961:web:971b1d7bae0dc658"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
