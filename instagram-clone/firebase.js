import * as firebase from 'firebase/compat'
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDTC03LONosBoRbZHTL4vzaj0nCBUs6w3E",
  authDomain: "reactnative-ig-clone-edd00.firebaseapp.com",
  projectId: "reactnative-ig-clone-edd00",
  storageBucket: "reactnative-ig-clone-edd00.appspot.com",
  messagingSenderId: "414256463468",
  appId: "1:414256463468:web:f5d1476baed5c5ac5fa249"
};

// Initialize Firebase
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

const auth = firebase.auth()

const db = firebase.firestore()


export  {firebase, auth, db}