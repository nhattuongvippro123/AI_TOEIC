import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCnMdscymwyKBKPBhucSYH0Nr2-byrsI2s",
  authDomain: "aitoeic.firebaseapp.com",
  projectId: "aitoeic",
  storageBucket: "aitoeic.appspot.com",
  messagingSenderId: "862641295988",
  appId: "1:862641295988:web:e126de28fb98be456b7721",
  measurementId: "G-6D483F6005"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);