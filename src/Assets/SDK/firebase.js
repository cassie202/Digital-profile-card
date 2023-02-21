// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCxc6KVuPya5pTM_Vw65C7QnDiYtpmyjA",
  authDomain: "simple-profile-card.firebaseapp.com",
  projectId: "simple-profile-card",
  storageBucket: "simple-profile-card.appspot.com",
  messagingSenderId: "490904846455",
  appId: "1:490904846455:web:420e5cd4c71f9040d98672"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default firebaseConfig;