import { initializeApp } from "firebase/app";
import { getFirestore} from "@firebase/firestore";
import { getAuth } from "@firebase/auth";
import { GoogleAuthProvider } from "@firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAJHHRladHQReau9qDSllxoDCMHlYjX4L9c",
  authDomain: "slack-clone-3e5b9.firebaseapp.com",
  projectId: "slack-clone-3e5b9",
  storageBucket: "slack-clone-3e5b9.appspot.com",
  messagingSenderId: "896320035575",
  appId: "1:896320035575:web:8d3b73edf236fab2da11f2",
  measurementId: "G-2T0RFZB8R1"
};

export const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider(app);
  
export default db;