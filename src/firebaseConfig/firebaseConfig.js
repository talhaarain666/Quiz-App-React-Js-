// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkZvRakclZexZ6rV51UT6PpGOp5eNwZls",
  authDomain: "quiz-app-a493f.firebaseapp.com",
  databaseURL: "https://quiz-app-a493f-default-rtdb.firebaseio.com",
  projectId: "quiz-app-a493f",
  storageBucket: "quiz-app-a493f.appspot.com",
  messagingSenderId: "713400810506",
  appId: "1:713400810506:web:1efd70c46b0686b332f3f3",
  measurementId: "G-FS3Y1GSJ3C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;

