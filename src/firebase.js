// Import necessary Firebase modules
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "authsystem-bdb47.firebaseapp.com",
  projectId: "authsystem-bdb47",
  storageBucket: "authsystem-bdb47.firebasestorage.app",
  messagingSenderId: "159595971400",
  appId: "1:159595971400:web:f11b456ff686f4ddc1697d",
  measurementId: "G-3SLZFK03WW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export authentication instance
export const auth = getAuth(app);

// Log to ensure initialization
console.log("Firebase app initialized:", app.name); // Should log "[DEFAULT]"

export default app;
