import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAuth } from 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyDOOdcd6b3RzBvvKtWRk8s0QVqjbsSA7sI",
    authDomain: "front-end-project-83345.firebaseapp.com",
    projectId: "front-end-project-83345",
    storageBucket: "front-end-project-83345.appspot.com",
    messagingSenderId: "602792548184",
    appId: "1:602792548184:web:d6fc6f9e542a10ef9af72d",
    measurementId: "G-87HJFQ6XS5"
};


export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);



