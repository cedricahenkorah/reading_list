import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB5R7ZZlfw8ElZFF5oT2vLNVrIkZ-tP880",
  authDomain: "readinglistapp-7bd5e.firebaseapp.com",
  projectId: "readinglistapp-7bd5e",
  storageBucket: "readinglistapp-7bd5e.appspot.com",
  messagingSenderId: "549588977857",
  appId: "1:549588977857:web:d3d824eea5938018f6ec40",
};

// init firebase
initializeApp(firebaseConfig);

// init firestore
const db = getFirestore();

// init firebase auth
const auth = getAuth();

export { db, auth };
