import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD0cVc0j3yjxnGp2MA5knCxClsbX9UCoEQ",
    authDomain: "sandesh-5c59f.firebaseapp.com",
    projectId: "sandesh-5c59f",
    storageBucket: "sandesh-5c59f.appspot.com",
    messagingSenderId: "809857522503",
    appId: "1:809857522503:web:f260fabbb5b8de4c3c8a62",
    measurementId: "G-LJ3TXBXZM2"
  };


  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app);
