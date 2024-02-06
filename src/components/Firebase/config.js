// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBq4jOJHgO1aoIqskdUmEfUB0xRcbXdGQY",
  authDomain: "tiendaas-5f73a.firebaseapp.com",
  projectId: "tiendaas-5f73a",
  storageBucket: "tiendaas-5f73a.appspot.com",
  messagingSenderId: "619412780033",
  appId: "1:619412780033:web:502f55164f8db81965bc00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


