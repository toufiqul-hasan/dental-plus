import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA5cmSNoaDxW6UvdURoGU8JxrBj6OZoTaw",
  authDomain: "dental-plus-dr.firebaseapp.com",
  projectId: "dental-plus-dr",
  storageBucket: "dental-plus-dr.appspot.com",
  messagingSenderId: "446716229190",
  appId: "1:446716229190:web:b6e7dcef958f9e9a7a3c47",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;