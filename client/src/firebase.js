// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-169c2.firebaseapp.com",
  projectId: "mern-blog-169c2",
  storageBucket: "mern-blog-169c2.appspot.com",
  messagingSenderId: "943065447768",
  appId: "1:943065447768:web:729a65a071838584f7b92d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

