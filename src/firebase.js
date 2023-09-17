// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyComGNcu4641vGZUC7dJrmfkl3TBryO_D4",
  authDomain: "first-test-43728.firebaseapp.com",
  projectId: "first-test-43728",
  storageBucket: "first-test-43728.appspot.com",
  messagingSenderId: "767375750954",
  appId: "1:767375750954:web:6f459885175b85ba831053",
  measurementId: "G-WLF7VBHWJ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();