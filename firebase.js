//FIREBASE
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/auth";

//FIREBASE CONFIG
const firebaseConfig = {
  apiKey: "AIzaSyA1ci4h0SPB2-CnHYXiQSQWQmiVZ7sOSS8",
  authDomain: "unis-test-f6925.firebaseapp.com",
  databaseURL:
    "https://unis-test-f6925-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "unis-test-f6925",
  storageBucket: "unis-test-f6925.appspot.com",
  messagingSenderId: "677730612042",
  appId: "1:677730612042:web:37028b16ccb1826808c7b3",
};

//FIREBASE APP

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const db = firebase.database();
