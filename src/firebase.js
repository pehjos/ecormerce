import { initializeApp} from 'firebase/app';
import { getFirestore,  } from 'firebase/firestore/lite';
import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword } from "firebase/auth";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDfJoJxAcJfVmea1FXVvT0lpW3lVb7MpyM",
    authDomain: "hookite.firebaseapp.com",
    projectId: "hookite",
    storageBucket: "hookite.appspot.com",
    messagingSenderId: "194586348848",
    appId: "1:194586348848:web:385ce95ea4e4b79a3f0cf5",
    measurementId: "G-0GKV9D0V00"
  };
  
  const FirebaseApp =initializeApp(firebaseConfig)
  const db = getFirestore(FirebaseApp);
  const auth =getAuth(FirebaseApp);

  export  {db,auth };
  