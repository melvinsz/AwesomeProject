import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyBVhSjCy51IzxpUPu6Yh5S_fIfjgpah1ZY",
  authDomain: "awesomeproject-b5001.firebaseapp.com",
  databaseURL: "https://awesomeproject-b5001-default-rtdb.firebaseio.com",
  projectId: "awesomeproject-b5001",
  storageBucket: "awesomeproject-b5001.appspot.com",
  messagingSenderId: "420935026556",
  appId: "1:420935026556:web:e1f8538cbe48d4bf4446f9",
};

const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
export const db = getFirestore(app);
export const storage = getStorage(app);
