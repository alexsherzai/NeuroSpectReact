import React, { useEffect, useState } from 'react';
import { collection, setDoc, getDocs, doc } from 'firebase/firestore';
import { storage } from '../config/firebase';

import './stylesheet.css';

const Temp = ({userID, storePrevAtt, setGameV, intro, intro2, intro3, introFull}) => {

    const [prevData, setPrevData] = useState({});

    const [result, setResult] = useState([]);
    

    const storePreviousAttempts = async() => {
        await getDocs(collection(storage, "neurospect"))
            .then((querySnapshot)=>{               
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id:doc.userID }));
                
                    let found = false;

                    for(var i = 0; i < newData.length; i++) {
                        if(newData[i].userID === userID) {

                            found = true;

                            if(newData[i].previousAttempts == null && newData[i].lastUpdated != null) {

                                let dateStr = newData[i].lastUpdated.toString();

                                let tempPrevData = Object.keys(newData[i]).filter(objKey => objKey !== 'previousAttempts' && objKey !== 'userID' && objKey !== 'testID' && objKey !== 'id').reduce((newObj, key) => {
                                    newObj[key] = newData[i][key];
                                    return newObj;
                                }, {}
                                );

                                console.log(tempPrevData);

                                let prevObj = {
                                    previousAttempts: {
                                        
                                    }
                                }

                                prevObj.previousAttempts[dateStr] = tempPrevData;

                                storePrevAtt(prevObj);
                                

                                setGameV(2);
                                intro2();
                            } else if(newData[i].previousAttempts != null) {
                                let dateStr = newData[i].lastUpdated;

                                let prevAtt = Object.keys(newData[i]).filter(objKey => objKey !== 'previousAttempts' && objKey !== 'userID' && objKey !== 'testID' && objKey !== 'id').reduce((newObj, key) => {
                                    newObj[key] = newData[i][key];
                                    return newObj;
                                }, {}
                                );

                                let allAttempts = Object.keys(newData[i].previousAttempts).reduce((newObj, key) => {
                                    newObj[key] = newData[i].previousAttempts[key];
                                    return newObj;
                                }, {}
                                );


                                allAttempts[dateStr] = prevAtt;

                                console.log(allAttempts);

                                storePrevAtt(allAttempts);

                                switch((Object.keys(newData[i].previousAttempts).length + 2) % 3) {
                                    case 0:
                                        setGameV(3);
                                        intro3();
                                        break;
                                    case 1:
                                        setGameV(1);
                                        intro();
                                        break;
                                    case 2:
                                        setGameV(2);
                                        intro2();
                                        break;
                                }


                            }

                            break;
                        }
                    }

                    if(!found) {
                        storePrevAtt({});
                        setGameV(1);
                        intro();
                    }
            })
    }

    useEffect(() => {

        storePreviousAttempts();

    }, []);

};

export default Temp;
 