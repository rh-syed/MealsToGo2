import React from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzz-Z_caeruyVqO0jtDb_sv0bdQMEsK78",
  authDomain: "mealstogo-798f9.firebaseapp.com",
  projectId: "mealstogo-798f9",
  storageBucket: "mealstogo-798f9.appspot.com",
  messagingSenderId: "425025172023",
  appId: "1:425025172023:web:19df288c2b138aa1b845b2",
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(AsyncStorage),
});
