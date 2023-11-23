// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAg8Ln34vlOWGcXzeFgJRdYpmrLU8k6d1Y",
  authDomain: "my-movies-gpt.firebaseapp.com",
  projectId: "my-movies-gpt",
  storageBucket: "my-movies-gpt.appspot.com",
  messagingSenderId: "306755188799",
  appId: "1:306755188799:web:814fefb3f084639863e08a",
  measurementId: "G-9L6B8FK0GB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();