// For Firebase JS SDK v7.20.0 and later, measurementId is optional
 import firebase from "firebase/compat/app"
 import "firebase/compat/auth"
 import "firebase/compat/firestore"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDD1qNCJbDPQ4HzMFsRfPOTQU49jN5TMB8",
  authDomain: "todo-app-4e11e.firebaseapp.com",
  projectId: "todo-app-4e11e",
  storageBucket: "todo-app-4e11e.appspot.com",
  messagingSenderId: "899759856877",
  appId: "1:899759856877:web:6b64aa4c25593a66d440e4",
  measurementId: "G-FJHVF72Y80"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
export default db;