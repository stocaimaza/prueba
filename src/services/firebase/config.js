// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA2BD__WOC30_6EYzNMxU1Vu5z6DOp-DXM",
    authDomain: "formulario-coder.firebaseapp.com",
    projectId: "formulario-coder",
    storageBucket: "formulario-coder.appspot.com",
    messagingSenderId: "666614259811",
    appId: "1:666614259811:web:9763199947418d605c1856"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);