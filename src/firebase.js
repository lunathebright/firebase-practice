import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCZV4kYDwrDI4Zrt3q0h5yApQP1upxmM9I",
  authDomain: "twitter-828d8.firebaseapp.com",
  projectId: "twitter-828d8",
  storageBucket: "twitter-828d8.appspot.com",
  messagingSenderId: "449618979087",
  appId: "1:449618979087:web:391ef55384f678980f767a",
};

const app = initializeApp(firebaseConfig);
export const authService = getAuth();
export default app;
export const dbService = getFirestore();
