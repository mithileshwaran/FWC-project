// firebase/config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBrGwF9ep-WteUHbfHV3eW9ECV_Hald7YE",
  authDomain: "fwcproject-79127.firebaseapp.com",
  databaseURL: "https://fwcproject-79127-default-rtdb.firebaseio.com",
  projectId: "fwcproject-79127",
  storageBucket: "fwcproject-79127.firebasestorage.app",
  messagingSenderId: "940975054607",
  appId: "1:940975054607:web:35fc50f24ebe80609aa87a",
  measurementId: "G-VX48M2WZT5"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
