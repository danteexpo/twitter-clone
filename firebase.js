// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0mF7yvGAPVXocUXMWHcQD04l0acfKagA",
  authDomain: "next-twitter-d5f54.firebaseapp.com",
  projectId: "next-twitter-d5f54",
  storageBucket: "next-twitter-d5f54.appspot.com",
  messagingSenderId: "173418207397",
  appId: "1:173418207397:web:ba5f8c4c49ce13b916d54c"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };