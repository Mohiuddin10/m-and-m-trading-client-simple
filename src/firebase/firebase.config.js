// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBZMInevV56PHJ62tiypW4VT0sub_2QrJA",
    authDomain: "mandmtrading-7745d.firebaseapp.com",
    projectId: "mandmtrading-7745d",
    storageBucket: "mandmtrading-7745d.firebasestorage.app",
    messagingSenderId: "687676254690",
    appId: "1:687676254690:web:d295851e3db05cf9cc71bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

