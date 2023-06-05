// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCdqzTVKHKJNUsOz72xeQGem0afeQ32BSk",
  authDomain: "fir-4bd60.firebaseapp.com",
  projectId: "fir-4bd60",
  storageBucket: "fir-4bd60.appspot.com",
  messagingSenderId: "773545070027",
  appId: "1:773545070027:web:0115b89cd52ffc8dd33a4e",
  measurementId: "G-1L999WGM1H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
