import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// const firebaseConfig = {
//   apiKey: "AIzaSyAVGuSMrGPqyOPzeME5cKbAjCE-1myKkwU",
//   authDomain: "distro-web-app.firebaseapp.com",
//   projectId: "distro-web-app",
//   storageBucket: "distro-web-app.appspot.com",
//   messagingSenderId: "374112052673",
//   appId: "1:374112052673:web:b2d909bbe5d66f1c687b40",
//   measurementId: "G-YFKRWLQTE6",
// };

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
export const messaging = getMessaging(app);

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
