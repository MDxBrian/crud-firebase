import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const config = {
  apiKey: "AIzaSyBYNAUDdHRpSwWgdXG3SUt_nvVyq-RLTO0",
  authDomain: "crud-32aa0.firebaseapp.com",
  databaseURL:
    "https://crud-32aa0-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "crud-32aa0",
  storageBucket: "crud-32aa0.appspot.com",
  messagingSenderId: "727647578260",
  appId: "1:727647578260:web:95fabce81089bf52486c81",
};

const app = initializeApp(config);
const database = getDatabase(app);

export { database };
