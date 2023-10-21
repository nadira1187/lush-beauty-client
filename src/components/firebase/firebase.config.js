// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmgq775eUhKedc1BTAImJUdGSOg6zrr_k",
  authDomain: "lush-beauty-client.firebaseapp.com",
  projectId: "lush-beauty-client",
  storageBucket: "lush-beauty-client.appspot.com",
  messagingSenderId: "649586357702",
  appId: "1:649586357702:web:3597e27a336db34cb42ec7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;