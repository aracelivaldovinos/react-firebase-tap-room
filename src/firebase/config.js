import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCiPEU1EV8mZfPPCywvWPqMhTVgei1Cc_Y",
  authDomain: "brewery-taproom.firebaseapp.com",
  projectId: "brewery-taproom",
  storageBucket: "brewery-taproom.appspot.com",
  messagingSenderId: "667463417864",
  appId: "1:667463417864:web:ee95a3489b1ed2075f11bd"
};

firebase.initializeApp(firebaseConfig)
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, timestamp }