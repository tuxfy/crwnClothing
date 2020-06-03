import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config =  {
  apiKey: "AIzaSyAKQZLxaXCTt1JPpZr60nhFyXZLigwE6CI",
  authDomain: "crwn-db-c6127.firebaseapp.com",
  databaseURL: "https://crwn-db-c6127.firebaseio.com",
  projectId: "crwn-db-c6127",
  storageBucket: "crwn-db-c6127.appspot.com",
  messagingSenderId: "927947393476",
  appId: "1:927947393476:web:6db59065d9e13892c3bc91"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;