import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyALK-4DT-oPrZrHvRsTs5vqmYrB9SnWy5U",
  authDomain: "supabio-e2a65.firebaseapp.com",
  projectId: "supabio-e2a65",
  storageBucket: "supabio-e2a65.appspot.com",
  messagingSenderId: "769375488283",
  appId: "1:769375488283:web:7e4ae60ee2c16cb68dabbe",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
