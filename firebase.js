// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAJfRrkYmXKCs575aFdzoDrvjQQG2BHZQ",
  authDomain: "medilearn-e3ed6.firebaseapp.com",
  projectId: "medilearn-e3ed6",
  storageBucket: "medilearn-e3ed6.appspot.com",
  messagingSenderId: "423284232213",
  appId: "1:423284232213:web:43aa9b20f3558a1c7efe1c",
  measurementId: "G-GHQFF8K4HL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const firestore = getFirestore();
