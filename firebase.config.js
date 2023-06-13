// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDB_FkEWExgMrpgUadLNdSLlrVoARvtCQw",
  authDomain: "explorer-fire.firebaseapp.com",
  projectId: "explorer-fire",
  storageBucket: "explorer-fire.appspot.com",
  messagingSenderId: "717413879038",
  appId: "1:717413879038:web:6cfa77f07a214e38c769af",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;