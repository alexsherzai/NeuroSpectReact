import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfigDev = {
    apiKey: process.env.REACT_APP_API_KEY_DEV,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN_DEV,
    projectId: process.env.REACT_APP_PROJECT_ID_DEV,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET_DEV,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID_DEV,
    appId: process.env.REACT_APP_APP_ID_DEV,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID_DEV
};

const appDev = initializeApp(firebaseConfigDev);

export const storage = getFirestore(appDev); 