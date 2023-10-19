// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD2KNP84YZtnr0cJ9jTejy0d5NEhKaG-JI",
  authDomain: "bookalley-b6495.firebaseapp.com",
  projectId: "bookalley-b6495",
  storageBucket: "bookalley-b6495.appspot.com",
  messagingSenderId: "92857220984",
  appId: "1:92857220984:web:29b915dc2b087987a6d28d",
  measurementId: "G-HMZCEJBV3J",
};

initializeApp(firebaseConfig);
export const storage = getStorage();
