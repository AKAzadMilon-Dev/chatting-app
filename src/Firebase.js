
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCjAkoeeVwbdtTHNmoFVaaspoVlBad4QK0",
  authDomain: "chatting-app-4.firebaseapp.com",
  projectId: "chatting-app-4",
  storageBucket: "chatting-app-4.appspot.com",
  messagingSenderId: "128506611390",
  appId: "1:128506611390:web:1bbac264060f73f785c0ef"
};

const app = initializeApp(firebaseConfig);

export {getAuth, createUserWithEmailAndPassword}
