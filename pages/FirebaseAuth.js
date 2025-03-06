import {initializeApp} from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const firebaseConfig = {
    apiKey: 'AIzaSyB5ffDC5-6rve-jEPX9ovGUaipeXDtRKak',
    authDomain: 'kfcporiruatimesheets.firebaseapp.com',
   // databaseURL: 'https://project-id.firebaseio.com',
    projectId: 'kfcporiruatimesheets',
    //storageBucket: 'project-id.appspot.com',
   messagingSenderId: '25806599294',
    // appId: '1:25806599294:android:7e3ebdba210ed42920d42f',
    //measurementId: 'G-measurement-id',
  };
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });