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

                    let found = false;

                    for(var i = 0; i < newData.length; i++) {
                        if(newData[i].userID === userID) {
                            console.log(newData[i]);

                            found = true;

                            if(newData[i].previousAttempts == null && newData[i].lastUpdated != null) {
                                console.log("2nd attempt");

                                let dateStr = newData[i].lastUpdated.toString();

                                let prevObj = {
                                    previousAttempts: {
                                        
                                    }
                                }

                                prevObj.previousAttempts[dateStr] = newData[i];

                                
                                console.log(prevObj);
                            } else if(newData[i].previousAttempts != null) {
                                console.log(newData[i].previousAttempts);
                                console.log("Attempt #" + newData[i].previousAttempts.length.toString());
                                let dateStr = newData[i].lastUpdated.toString();

                                let temp = newData[i];


                                
                                newData[i].previousAttempts[dateStr] = newData[i].delete
                            }

                            break;
                        }
                    }

                    if(!found) {
                        console.log("1st attempt");
                    }
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
 