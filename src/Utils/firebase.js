// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAK6-lwpLlgkFs2mTao4ArZnuU8kI9VkA",
  authDomain: "netflixgpt-11a81.firebaseapp.com",
  projectId: "netflixgpt-11a81",
  storageBucket: "netflixgpt-11a81.appspot.com",
  messagingSenderId: "288646049164",
  appId: "1:288646049164:web:d917b261934826a1957aa9",
  measurementId: "G-CGR13FTK4C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();   // common auth for all the usages in the application
