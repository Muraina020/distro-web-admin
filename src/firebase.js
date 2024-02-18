import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD9O0aZA9DFJHQBYH5M1ks1XwzJwoP172A",
  authDomain: "distrov2-d4155.firebaseapp.com",
  projectId: "distrov2-d4155",
  storageBucket: "distrov2-d4155.appspot.com",
  messagingSenderId: "1087683349395",
  appId: "1:1087683349395:web:9f6020d3f3cd20e437b666",
  measurementId: "G-9T5NK057CD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const messaging = getMessaging(app);
export const imgDB = getStorage(app);
export const storage = getStorage(app);

export const generateToken = async () => {
  const permission = await Notification.requestPermission();
  console.log(permission);

  if (permission === "granted") {
    const token = await getToken(messaging, {
      vapidKey:
        "BDlsxXegrQqE06cUNyCTZYb81wmZ3bg3WUnVQJXTXscTwsQVKA-3tBQDyr1Uc6DO7iKizXI9d8LTkkpG8t1_JYg",
    });

    console.log(token);
  }
};

