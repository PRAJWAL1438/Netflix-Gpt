import { getAuth } from "firebase/auth";

// // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkxd_pwm6ZtVb1uxqaiCJpjmQPiLnShPM",
  authDomain: "netflixgpt-1ec8f.firebaseapp.com",
  projectId: "netflixgpt-1ec8f",
  storageBucket: "netflixgpt-1ec8f.appspot.com",
  messagingSenderId: "748209926620",
  appId: "1:748209926620:web:b5d81676e15b0a9ab8df19",
  measurementId: "G-JQYCZC9NX8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
