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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  /* IF NO USER RETURN */
  if (!userAuth) return;

  /* CHECK TO SEE IF USER EXISTS IN DB*/
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  // console.log(snapShot.data());

  /* IF USER DOES NOT EXIST CREATE IN DB*/
  if (!snapShot.exists) {
    /* DESTRUCTOR REQUIRED VARIABLES */
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      /* WRITE USER TO FIRESTORE DATABASE */
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log('Error creating user', err.message);
    }
  }
  return userRef;
};

/* CONVER COLLECTIONS SNAPSHOT FUNCTION */
export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      items,
      title,
    };
  });
  /* CONVERT THE ARRAY TO OBJECT WITH REDUCE */
  return transformedCollection.reduce((acc, collection) => {
    acc[collection.title.toLowerCase()] = collection;
    return acc;
  }, {});
};

/* CREATE NEW COLLECTION FUNCTION */
// export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
//   const collectionRef = firestore.collection(collectionKey);

//   /* CREATE BATCH */
//   const batch = firestore.batch();

//   /* LOOP THROUGH OBJECTS TO ADD AND GET DOC REF */
//   objectsToAdd.forEach((obj) => {
//     const newDocRef = collectionRef.doc();
//     batch.set(newDocRef, obj);
//   });

//   return await batch.commit();
// };

/* INITIALIZE FIREBASE APP WITH CONFIG */
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

/* SETUP GOOGLE SIGN IN */
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

/* EXPORT THE SIGN IN POPUP */
export const signInWithGoogle = () => auth.signInWithPopup(provider);

/* EXPORT ENTIRE LIBRARY INCASE NEEDED */
export default firebase;
