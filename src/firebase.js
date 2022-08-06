// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAoz23qdd1N4lP2VZTVBuc_ADdlyAhvoR8",
  authDomain: "stackoverflow-66315.firebaseapp.com",
  projectId: "stackoverflow-66315",
  storageBucket: "stackoverflow-66315.appspot.com",
  messagingSenderId: "459195531826",
  appId: "1:459195531826:web:a7c2b21ee2f96fcd53722b",
  measurementId: "G-8RSQN4891Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const provider = new GoogleAuthProvider()
