import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";
import "firebase/performance";
import "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCMjKkfXskuIr3du_c4HzZKpozvB0EwTec",
  authDomain: "imsamimalik2-0.firebaseapp.com",
  projectId: "imsamimalik2-0",
  storageBucket: "imsamimalik2-0.appspot.com",
  messagingSenderId: "328141557787",
  appId: "1:328141557787:web:13c4bad334b2badd24e8be",
  measurementId: "G-113MCTFH13",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const storage = firebase.storage();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

const perf = firebase.performance();
const analytics = firebase.analytics();

export { db, auth, storage, provider, perf, analytics };
