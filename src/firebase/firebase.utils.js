import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyDjU_Hu-tFfKQpz3iL5fCDwajtajYlPJSI",
  authDomain: "crwn-db-cd8b1.firebaseapp.com",
  projectId: "crwn-db-cd8b1",
  storageBucket: "crwn-db-cd8b1.appspot.com",
  messagingSenderId: "973061094941",
  appId: "1:973061094941:web:58ee20810e9c930f4610f4",
  measurementId: "G-19683MR3KW",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
