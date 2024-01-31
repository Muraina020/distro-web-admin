import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/forestore";


const firebaseConfig = {
  apiKey: "AIzaSyDN1S1s2zAvPxgxiRD7VmQcS-w_JbM2P3g",
  authDomain: "fir-react-upload-7d22d.firebaseapp.com",
  projectId: "fir-react-upload-7d22d",
  storageBucket: "fir-react-upload-7d22d.appspot.com",
  messagingSenderId: "1059325112064",
  appId: "1:1059325112064:web:f16a22532e2bb5125e0de5",
  measurementId: "G-EX9ETV0JP4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const imgDB = getStorage(app);
const txtDB =  getFirestore(app);

export {imgDB, txtDB};