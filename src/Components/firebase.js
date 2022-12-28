import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBrCfD_RgJuS2GNYMws8MinluTlMRudV_U",
  authDomain: "task-management-c6faa.firebaseapp.com",
  projectId: "task-management-c6faa",
  storageBucket: "task-management-c6faa.appspot.com",
  messagingSenderId: "854875240515",
  appId: "1:854875240515:web:fed8f80600414b3a9d3cf6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;