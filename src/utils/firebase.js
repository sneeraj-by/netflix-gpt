// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCz2dWaJKAsIGtfKH4-IOJyiS1Y6M3OsWs",
  authDomain: "netflixgpt-518e1.firebaseapp.com",
  projectId: "netflixgpt-518e1",
  storageBucket: "netflixgpt-518e1.appspot.com",
  messagingSenderId: "937035128785",
  appId: "1:937035128785:web:cb0cf20aeaf82cb431caf0",
  measurementId: "G-3SQ9WJQBJL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();