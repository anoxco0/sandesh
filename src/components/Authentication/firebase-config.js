import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';
import {getAuth} from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAiY30NxTKmguLcnWdkuQldDqp9221yw44",
  authDomain: "sandesh-navneet.firebaseapp.com",
  databaseURL:"http://sandesh-navneet.fierebaseio.com",
  projectId: "sandesh-navneet",
  storageBucket: "sandesh-navneet.appspot.com",
  messagingSenderId: "201717983297",
  appId: "1:201717983297:web:4bed37745ff1cb4d21fec0"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const Auth = getAuth(app);
const storage = getStorage(app);
export {db, Auth, storage}
