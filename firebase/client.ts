// Import the functions you need from the SDKs you need

import { initializeApp, getApp, getApps } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCbTWndjGtHqYQZCg7ceZt9GyDy_pB0OoA",
    authDomain: "prepgenie-b8269.firebaseapp.com",
    projectId: "prepgenie-b8269",
    storageBucket: "prepgenie-b8269.firebasestorage.app",
    messagingSenderId: "510710289755",
    appId: "1:510710289755:web:7a1b64a8c831592751767e",
    measurementId: "G-88QMNNLW6D"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);