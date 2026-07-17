// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_OJb2Z6jJsZQBaYu0OTXJPEfWogm8R1c",
  authDomain: "netflixgpt-1b8c6.firebaseapp.com",
  projectId: "netflixgpt-1b8c6",
  storageBucket: "netflixgpt-1b8c6.firebasestorage.app",
  messagingSenderId: "835814532911",
  appId: "1:835814532911:web:ec255218dd8fbe0727a3da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();