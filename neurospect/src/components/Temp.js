import React, { useEffect, useState } from 'react';
import { collection, setDoc, getDocs, doc } from 'firebase/firestore';
import { storage } from '../config/firebase';

import './stylesheet.css';

const Temp = ({userID, setGameV, intro, intro2, intro3, introFull}) => {

    const [allData, setAllData] = useState({});

    const [result, setResult] = useState([]);
    

    const storePreviousAttempts = async() => {
        await getDocs(collection(storage, "neurospect"))
            .then((querySnapshot)=>{               
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id:doc.userID }));
                
                    setAllData(newData);

                    console.log("test");
            })
    }

    useEffect(() => {

        storePreviousAttempts();

        console.log(allData);
                
        /*switch(parseInt(vers)) {
            case 1:
                intro();
                break;
            case 2:
                console.log("made it to 2")
                intro2();
                break;
            case 3:
                intro3();
                break;
            case 4:
                introFull();
                break;
        }*/
    }, []);

};

export default Temp;
 