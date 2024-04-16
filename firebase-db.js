// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
const { getFirestore } = require("firebase/firestore");
// const { getAnalytics } = require("firebase/analytics");

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVfB2w-z4uVFsOeT7o4SUz10PsOzoIjL0",
  authDomain: "nodejs-express-firebase-e8ece.firebaseapp.com",
  projectId: "nodejs-express-firebase-e8ece",
  storageBucket: "nodejs-express-firebase-e8ece.appspot.com",
  messagingSenderId: "274650369372",
  appId: "1:274650369372:web:df427f4b96dba48d3bc599",
  measurementId: "G-9KDHB6M3EL",
};

// Initialize Firebase
const fireapp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(fireapp);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(fireapp);

module.exports = db;
