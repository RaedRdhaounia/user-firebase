// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtBzE9cfJVlWcuPf-LZRJFN5jRBG1PsDg",
  authDomain: "seletct.firebaseapp.com",
  projectId: "seletct",
  storageBucket: "seletct.appspot.com",
  messagingSenderId: "796867256980",
  appId: "1:796867256980:web:9bed6859866e39ec5b4a81"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app) 
export const auth =  getAuth(app);
export const provider =  new GoogleAuthProvider();