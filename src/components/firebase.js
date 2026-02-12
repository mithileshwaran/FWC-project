// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";           // For Authentication
import { getDatabase } from "firebase/database";   // Optional: Realtime Database

// Your web app's Firebase configuration
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// 🔥 Export Authentication & Database for login / real-time usage
export const auth = getAuth(app);
export const database = getDatabase(app); // Optional
