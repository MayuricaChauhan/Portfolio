import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD_pg5nUVOEwlELctkZ1hrXov6O_vDKJ24",
    authDomain: "mayuricachauhan-5a4f0.firebaseapp.com",
    projectId: "mayuricachauhan-5a4f0",
    storageBucket: "mayuricachauhan-5a4f0.appspot.com",
    messagingSenderId: "310621550831",
    appId: "1:310621550831:web:f1e29ed4361930b552c31a",
    measurementId: "G-4E449XKQZC"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);
  
  export { auth, db };
