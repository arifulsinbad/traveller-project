// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMgIf7LZs6FAghcrogmu8WgwfVYJMV8PA",
  authDomain: "traveller-assignment.firebaseapp.com",
  projectId: "traveller-assignment",
  storageBucket: "traveller-assignment.appspot.com",
  messagingSenderId: "391930127025",
  appId: "1:391930127025:web:b21f25bf8271887e7d7890"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;