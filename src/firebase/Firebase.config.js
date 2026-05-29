// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAG5BH9oh4RHxMlpFKYF5gopu5K2VTcSYQ",
    authDomain: "matrimony-ba37a.firebaseapp.com",
    projectId: "matrimony-ba37a",
    storageBucket: "matrimony-ba37a.firebasestorage.app",
    messagingSenderId: "698796064473",
    appId: "1:698796064473:web:d4a82b8a749a09146208c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Others 
const auth = getAuth(app);
const storage = getStorage(app);

//Export
export { auth, storage };
export default app;