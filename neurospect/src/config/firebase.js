import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfigDev = {
    apiKey: "AIzaSyBYTlNI-VTKCRNq8xANI0CUkGxxiU8bAbY",
    authDomain: "neuroverse-dev.firebaseapp.com",
    projectId: "neuroverse-dev",
    storageBucket: "neuroverse-dev.appspot.com",
    messagingSenderId: "473832931878",
    appId: "1:473832931878:web:ae0afa49e461e90dd29ce7",
    measurementId: "G-EBL3BGHH6K"
};

const appDev = initializeApp(firebaseConfigDev);

export const storage = getFirestore(appDev);