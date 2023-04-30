// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
//import { getAuth } from "firebase/auth";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDtwpYOw3HYY2rBUtnk3-AvI-u-xakk9RQ',
  authDomain: 'traveljapan-4d0e3.firebaseapp.com',
  projectId: 'traveljapan-4d0e3',
  storageBucket: 'traveljapan-4d0e3.appspot.com',
  messagingSenderId: '394759197882',
  appId: '1:394759197882:web:827ea08c8d0a671cc29e83',
  measurementId: 'G-Q67Y76E4C2',
}

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
export const firebaseApp = initializeApp(firebaseConfig)
//const auth = getAuth(app);
//const analytics = getAnalytics(app);
