import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDsDOujb18BsEuBKOSSC3vCxZWy4PMKkTQ",
  authDomain: "linktree-a3eb1.firebaseapp.com",
  projectId: "linktree-a3eb1",
  storageBucket: "linktree-a3eb1.appspot.com",
  messagingSenderId: "921730757083",
  appId: "1:921730757083:web:1ca0810914a6d38e9777fe",
  measurementId: "G-220X6FSERF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();