import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfigProd = {
    apiKey: "AIzaSyAz-wddbpROXPhPEeItB01ngri0XUD0XSg",
    authDomain: "neuroverse-fdf22.firebaseapp.com",
    projectId: "neuroverse-fdf22",
    storageBucket: "neuroverse-fdf22.appspot.com",
    messagingSenderId: "656486393456",
    appId: "1:656486393456:web:525952f1906aa4967236b5",
    measurementId: "G-MNS48EZ8GT"
};

const appProd = initializeApp(firebaseConfigProd);

export const storage = getFirestore(appProd);