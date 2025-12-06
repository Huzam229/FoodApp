// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIkljs4QNAHshOtChgOZS_HKzoRCLkrV0",
  authDomain: "foodapp-55a80.firebaseapp.com",
  projectId: "foodapp-55a80",
  storageBucket: "foodapp-55a80.appspot.com",
  messagingSenderId: "793072285741",
  appId: "1:793072285741:web:f704669663b26aafd620a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth(app);