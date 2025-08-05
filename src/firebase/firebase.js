// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBb4qFqHw0bDo8_GpAuC8dzui_Be7z2LQ0",
  authDomain: "cineflix-1af56.firebaseapp.com",
  projectId: "cineflix-1af56",
  storageBucket: "cineflix-1af56.firebasestorage.app",
  messagingSenderId: "485300939081",
  appId: "1:485300939081:web:304a5de340fbf8fd6fd298",
  measurementId: "G-M0RH5HTQBR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
