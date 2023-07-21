import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfigProd = {
    apiKey: process.env.REACT_APP_API_KEY_PROD,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN_PROD,
    projectId: process.env.REACT_APP_PROJECT_ID_PROD,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET_PROD,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID_PROD,
    appId: process.env.REACT_APP_APP_ID_PROD,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID_PROD
};

const appProd = initializeApp(firebaseConfigProd);

export const storage = getFirestore(appProd);
