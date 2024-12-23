import { Platform } from "react-native";

// Browser Firebase (Firebase JS SDK)
import { initializeApp as initializeWebApp } from "firebase/app";
import { initializeAuth as initalizeWebAuth } from "firebase/auth";
import { getReactNativePersistence } from "@firebase/auth/dist/rn/index.js";
import { getFirestore as getWebFirestore } from "firebase/firestore";
// React Native Firebase
import firebase from "@react-native-firebase/app";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
    apiKey: "AIzaSyBEPoVZNV8CY2hUWlZ6GOQIBJwr6fLtw-Y",
    authDomain: "tracker-ed31c.firebaseapp.com",
    databaseURL: "https://tracker-ed31c-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "tracker-ed31c",
    storageBucket: "tracker-ed31c.firebasestorage.app",
    messagingSenderId: "896482902386",
    appId: "1:896482902386:web:9b67839c01c236c7435deb",
    measurementId: "G-059G706Z4P",
};

let app, authInstance, firestoreInstance;
console.log(Platform.OS, "platform from react-native");
try {
    if (Platform.OS === "web") {
        // Initialize for web
        app = initializeWebApp(firebaseConfig);
        authInstance = initalizeWebAuth(app, {
            persistence: getReactNativePersistence(ReactNativeAsyncStorage),
        });
        firestoreInstance = getWebFirestore(app);
    } else {
        // Initialize for React Native
        if (!firebase.apps.length) {
            app = firebase.initializeApp(firebaseConfig);
        } else {
            app = firebase.app();
        }
        authInstance = auth();
        firestoreInstance = firestore();
    }
} catch (err) {
    console.log("ERR in FIREBASE: ", err);
}
export { app, authInstance as auth, firestoreInstance as firestore };
