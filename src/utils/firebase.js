// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoIu7v2Uxyb1IbZOFgRPqPCiVclaIsZA4",
  authDomain: "to-do-dfba5.firebaseapp.com",
  projectId: "to-do-dfba5",
  storageBucket: "to-do-dfba5.appspot.com",
  messagingSenderId: "818006715109",
  appId: "1:818006715109:web:6ff2a49ae39d87a2a8820c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
