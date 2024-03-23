// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBN2j18OofK6ZAVAOSVBsULr-ZDJvmPjio",
  authDomain: "crud-app-b9dd8.firebaseapp.com",
  projectId: "crud-app-b9dd8",
  storageBucket: "crud-app-b9dd8.appspot.com",
  messagingSenderId: "880233566069",
  appId: "1:880233566069:web:937e1030563452fcc30d3c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);