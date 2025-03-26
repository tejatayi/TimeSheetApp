import { initializeApp } from "firebase/app";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  getAuth,
} from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createUser } from "./API_hub";

const firebaseConfig = {
  apiKey: "AIzaSyCuPIRZbE4wb9W7qpj_LmgL8sLG4-fyras",
  authDomain: "kfc-timesheet.firebaseapp.com",
  // databaseURL: 'https://project-id.firebaseio.com',
  projectId: "kfc-timesheet",
  //storageBucket: 'project-id.appspot.com',
  messagingSenderId: "1014715830809",
  appId: "1:1014715830809:web:7d654b5af250ef7b25d088",
  measurementId: "G-15BH9D9Y32",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export async function SignIn(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    const token = await user.getIdToken();
    await AsyncStorage.setItem("firebase_token", token);
  } catch (error) {
    console.error("Failed SignIn", error.message);
  }
}

export async function SignUp(email, password, userData) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    const token = await user.getIdToken();
    console.log("entered furebase auth page having token :", token);
    await AsyncStorage.setItem("firebase_token", token);
    createUser(userData);
  } catch (error) {
    console.error("Failed Creating User", error.message);
  }
}
