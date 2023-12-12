import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { writable } from "svelte/store";
import type { User } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";


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

function userStore() {
  let unsubscribe: () => void;

  if (!auth || !globalThis.window) {
    console.warn('Auth is not initialized or not in browser');
    const { subscribe } = writable<User | null>(null);
    return {
      subscribe,
    }
  }

  const { subscribe } = writable(auth?.currentUser ?? null, (set) => {
    unsubscribe = onAuthStateChanged(auth, (user) => {
      set(user);
    });

    return () => unsubscribe();
  });

  return {
    subscribe,
  };
}

export const user = userStore();