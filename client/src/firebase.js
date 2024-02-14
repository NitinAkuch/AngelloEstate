// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "angelloestate.firebaseapp.com",
  projectId: "angelloestate",
  storageBucket: "angelloestate.appspot.com",
  messagingSenderId: "858088342625",
  appId: "1:858088342625:web:c8574effa42f7d68ba1620",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
