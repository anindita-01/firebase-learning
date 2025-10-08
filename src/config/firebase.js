
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB5gPcdW3lSfGKrXX8wU3c5aXSzsTrFT-A",
  authDomain: "fir-course-3bcb6.firebaseapp.com",
  projectId: "fir-course-3bcb6",
  storageBucket: "fir-course-3bcb6.firebasestorage.app",
  messagingSenderId: "612297577269",
  appId: "1:612297577269:web:2da386bc9b57af6343727c",
  measurementId: "G-TN1GFS3JBG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth(app);
export const googleProvider=new GoogleAuthProvider();
export const db=  getFirestore(app);
