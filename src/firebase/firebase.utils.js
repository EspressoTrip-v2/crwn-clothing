import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyB9nUgleDunHYRZfuTKZG4dQ_qGCH-3wlk',
  authDomain: 'crwn-db-3280a.firebaseapp.com',
  databaseURL: 'https://crwn-db-3280a.firebaseio.com',
  projectId: 'crwn-db-3280a',
  storageBucket: 'crwn-db-3280a.appspot.com',
  messagingSenderId: '671293401759',
  appId: '1:671293401759:web:d4702e510593056adc50aa',
  measurementId: 'G-087MR62RFJ',
};

/* INITIALIZE FIREBASE APP WITH CONFIG */
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

/* SETUP GOOGLE SIGN IN */
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

/* EXPORT THE SIGN IN POPUP */
export const signInWithGoogle = () => auth.signInWithPopup(provider);

/* EXPORT ENTIRE LIBRARY INCASE NEEDED */
export default firebase;
