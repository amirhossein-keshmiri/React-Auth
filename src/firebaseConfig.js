import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB_1m0H98RNkIc-9nJW_1KxRojFPdocJNY",
    authDomain: "react-firebase-auth-2024-26946.firebaseapp.com",
    projectId: "react-firebase-auth-2024-26946",
    storageBucket: "react-firebase-auth-2024-26946.firebasestorage.app",
    messagingSenderId: "173464023417",
    appId: "1:173464023417:web:d3cee0e3fa5c9c82b4bfa8"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default auth;
