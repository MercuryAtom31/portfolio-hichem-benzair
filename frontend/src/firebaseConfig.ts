import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDxKodjft_yliYGVA4-X7YP_iPZXCFELko",
  authDomain: "portfolio-website-mercury-atom.firebaseapp.com",
  projectId: "portfolio-website-mercury-atom",
  storageBucket: "portfolio-website-mercury-atom.appspot.com",
  messagingSenderId: "115775413376",
  appId: "1:115775413376:web:5c4a8815aced35f88b5a65",
  measurementId: "G-VVFV0SVQNJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
