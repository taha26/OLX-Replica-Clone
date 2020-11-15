import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";


var firebaseConfig = {
    apiKey: "AIzaSyCIR60DbMY7yEf6dle1ZdLXU71GAJ_6DbY",
    authDomain: "olx-replica-clone.firebaseapp.com",
    databaseURL: "https://olx-replica-clone.firebaseio.com",
    projectId: "olx-replica-clone",
    storageBucket: "olx-replica-clone.appspot.com",
    messagingSenderId: "871236338621",
    appId: "1:871236338621:web:5c5aa8a86f73c3b4c688d4",
    measurementId: "G-L2FTYQ248V"
  };
  // Initialize Firebase
  
firebase.initializeApp(firebaseConfig);
  
export default firebase;