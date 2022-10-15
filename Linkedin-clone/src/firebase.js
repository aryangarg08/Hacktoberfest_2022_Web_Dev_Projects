import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBtKF51qTHsgCzRNEVU5HsDCek3Agl_cDY",
  authDomain: "linked-clone-7ac01.firebaseapp.com",
  projectId: "linked-clone-7ac01",
  storageBucket: "linked-clone-7ac01.appspot.com",
  messagingSenderId: "362169674913",
  appId: "1:362169674913:web:809417c4521ec9b77894e0",
  measurementId: "G-TZN2PEBT7N",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebaseApp.storage();

export { auth, provider, storage };
export default db;
