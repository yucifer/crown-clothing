import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyB-YCwykyGPIZvrjhQ2uP43JnATHh9lUqc",
  authDomain: "crown-clothing-db-19982.firebaseapp.com",
  projectId: "crown-clothing-db-19982",
  storageBucket: "crown-clothing-db-19982.appspot.com",
  messagingSenderId: "506625570032",
  appId: "1:506625570032:web:4b7a73c1485c8f4152fe35",
  measurementId: "G-XPT88YWFNW",
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Set up google authentication utility
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};

export default firebase;
