import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// import {getAnalytics} from "firebase/analytics"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQ0A2qMs6nh3PxZHY9VfUycqLemtO4TMY",
  authDomain: "cocineroproject-1b749.firebaseapp.com",
  databaseURL: "https://cocineroproject-1b749-default-rtdb.firebaseio.com",
  projectId: "cocineroproject-1b749",
  storageBucket: "cocineroproject-1b749.appspot.com",
  messagingSenderId: "529738352731",
  appId: "1:529738352731:web:969309053426c012eed77e",
  measurementId: "G-9Y0QQD8HP4"
};
export const app=initializeApp(firebaseConfig)
export const storage=getStorage()

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);