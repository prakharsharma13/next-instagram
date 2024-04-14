// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "insta-next-e7a01.firebaseapp.com",
  projectId: "insta-next-e7a01",
  storageBucket: "insta-next-e7a01.appspot.com",
  messagingSenderId: "609210467249",
  appId: "1:609210467249:web:dd69642c6917086e0a3390"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

