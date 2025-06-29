import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDYEERV_9kQQ5-fcEW8E6qVj7wJ6GyiHtM",
  authDomain: "tenyain-com.firebaseapp.com",
  projectId: "tenyain-com",
  storageBucket: "tenyain-com.firebasestorage.app",
  messagingSenderId: "877750356699",
  appId: "1:877750356699:web:0b78c04fc725858f5fdafe"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);