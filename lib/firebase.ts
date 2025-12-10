import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBzYTzJFWM3JWvz7uXRSjd364CItOk23E8",
  authDomain: "imeshgimshan-89605.firebaseapp.com",
  projectId: "imeshgimshan-89605",
  storageBucket: "imeshgimshan-89605.firebasestorage.app",
  messagingSenderId: "414230257232",
  appId: "1:414230257232:web:690b462dd8c0eb2770bb55"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
export const db = getFirestore(app);
export const auth = getAuth(app);