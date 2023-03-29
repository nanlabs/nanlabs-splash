// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDR3PT8kJfUXGNoMGjJEYW3DwLBf1U--4M",
  authDomain: "nanlabs-splash.firebaseapp.com",
  projectId: "nanlabs-splash",
  storageBucket: "nanlabs-splash.appspot.com",
  messagingSenderId: "377421515528",
  appId: "1:377421515528:web:6b3149409a83206e7e7abd",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);

export default firebaseApp;
