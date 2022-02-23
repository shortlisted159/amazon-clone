import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnJr5h6dIrdsjRj5tdUB2WxoMlrIFCJ-M",
  authDomain: "clone-51f92.firebaseapp.com",
  projectId: "clone-51f92",
  storageBucket: "clone-51f92.appspot.com",
  messagingSenderId: "787949863152",
  appId: "1:787949863152:web:c84b42b4e57759187c4235",
  measurementId: "G-BSCEF374LE"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

export default firebaseApp;