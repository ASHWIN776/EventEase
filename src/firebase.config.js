// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBRoWNTGZZCGvzaT1PL2FBEVKYp31cwt9o",
    authDomain: "eventease-57f6a.firebaseapp.com",
    projectId: "eventease-57f6a",
    storageBucket: "eventease-57f6a.appspot.com",
    messagingSenderId: "500678277885",
    appId: "1:500678277885:web:3f9c09bf4518d920d09c94",
    measurementId: "G-5KECJ0LTK6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
export const db = getFirestore(app);