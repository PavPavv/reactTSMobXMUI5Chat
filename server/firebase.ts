// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkKbOanLKA-MCjgGOxAlA_Vdesz8JItmQ",
  authDomain: "ts-chat-7ce53.firebaseapp.com",
  projectId: "ts-chat-7ce53",
  storageBucket: "ts-chat-7ce53.appspot.com",
  messagingSenderId: "385973027742",
  appId: "1:385973027742:web:d678c5d611d87d707acc8f",
  measurementId: "G-SF384QZV6Q"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const firestore = getFirestore();