import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBdmQr9yRi7IlXFYNatWvfWjQnBE5QgmWw",
  authDomain: "mbet-website.firebaseapp.com",
  projectId: "mbet-website",
  storageBucket: "mbet-website.firebasestorage.app",
  messagingSenderId: "917807206135",
  appId: "1:917807206135:web:4bda2a6994bf6a8d9f8df2",
  measurementId: "G-6TEGY10CW8"
};

// initialize once
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

export const db = getFirestore(app);
