// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBb1BQ1UR43ei7ud-eF7pJaRmUIqX98qRI",
    authDomain: "coderproyectcoffee.firebaseapp.com",
    projectId: "coderproyectcoffee",
    storageBucket: "coderproyectcoffee.appspot.com",
    messagingSenderId: "257625243880",
    appId: "1:257625243880:web:b855be7b2e1cdd20b4895d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;