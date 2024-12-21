import { Platform } from "react-native";

// Browser Firebase (Firebase JS SDK)
import { initializeApp as initializeWebApp } from "firebase/app";
import { getAuth as getWebAuth } from "firebase/auth";
import { getFirestore as getWebFirestore } from "firebase/firestore";

// React Native Firebase
import firebase from "@react-native-firebase/app";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";

const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID",
};

let app, authInstance, firestoreInstance;
console.log(Platform.OS, "platform from react-native");

if (Platform.OS === "web") {
    // Initialize for web
    app = initializeWebApp(firebaseConfig);
    authInstance = getWebAuth(app);
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

export { app, authInstance as auth, firestoreInstance as firestore };
