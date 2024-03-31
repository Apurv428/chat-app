import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD2M0i9ZNfdka-WIB_5GXsiIcdsncPJNuM",
  authDomain: "chat-app-2a5fa.firebaseapp.com",
  projectId: "chat-app-2a5fa",
  storageBucket: "chat-app-2a5fa.appspot.com",
  messagingSenderId: "809313500125",
  appId: "1:809313500125:web:d015a94f25afd4f7a41434"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
