// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9q1YujItj99bWi0wRkHhqxnLBvqn1tDY",
  authDomain: "carinadiesel-portfolio.firebaseapp.com",
  projectId: "carinadiesel-portfolio",
  storageBucket: "carinadiesel-portfolio.appspot.com",
  messagingSenderId: "950868085228",
  appId: "1:950868085228:web:da309d4f5c6709a297d8c9",
  measurementId: "G-WZ4LX2DBSE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);