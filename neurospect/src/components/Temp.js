import React, { useEffect, useState } from 'react';
import { collection, setDoc, getDocs, doc } from 'firebase/firestore';
import { storage } from '../config/firebase';
import axios from "axios";


import './stylesheet.css';

const Temp = ({userID, storePrevAtt, setGameV, intro, intro2, intro3, introFull}) => {

    const [prevData, setPrevData] = useState({});

    const [result, setResult] = useState([]);

    useEffect(() => {

        const queryParams = new URLSearchParams(window.location.search)
        let token = queryParams.get("userID");

        setGameV(4);

        introFull();

    }, []);

};

export default Temp;
 