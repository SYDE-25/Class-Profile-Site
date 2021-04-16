import Firebase from "firebase";

if (!Firebase.apps.length) {
    var firebaseApp = Firebase.initializeApp({
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
        authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        storageBucket: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
        messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.NEXT_PUBLIC_FIREBASE_APPID
    });
 }
 else {
    var firebaseApp = Firebase.app(); // if already initialized, use that one
 }

export const db = firebaseApp.firestore();
