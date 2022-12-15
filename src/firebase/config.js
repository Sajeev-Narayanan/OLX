import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCIYAPGQlHidY0G4HFquqMFVR41tx3xXmg",
  authDomain: "fir-dff81.firebaseapp.com",
  projectId: "fir-dff81",
  storageBucket: "fir-dff81.appspot.com",
  messagingSenderId: "191353083420",
  appId: "1:191353083420:web:27cc1cf5a236af64c0b1d9",
  measurementId: "G-HHXJS9SY3R"
};


export default firebase.initializeApp(firebaseConfig)