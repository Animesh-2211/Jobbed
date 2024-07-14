// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtnf_fWbZFM8A4nn5PWFL0X5W1g-JtHAs",
  authDomain: "online-job-portal-ed9ce.firebaseapp.com",
  projectId: "online-job-portal-ed9ce",
  storageBucket: "online-job-portal-ed9ce.appspot.com",
  messagingSenderId: "889204950254",
  appId: "1:889204950254:web:c807d70816222cfc415fff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
export {db} ;