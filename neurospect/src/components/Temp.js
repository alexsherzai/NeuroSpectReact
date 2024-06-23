import React, { useEffect, useState } from 'react';
import { collection, setDoc, getDocs, doc } from 'firebase/firestore';
import { storage } from '../config/firebase';
import axios from "axios";


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

        const queryParams = new URLSearchParams(window.location.search)
        let token = queryParams.get("userID");
        let gameVersion = 0

        if(token === null) {
            token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzIxNjk1MTMxLCJpYXQiOjE3MTkxMDMxMzEsImp0aSI6IjE2M2Q1MmU1MDJiNzRhNTg5MDEwYmIzMTg3MTBjNzQwIiwidXNlcl9pZCI6ImI0N2EyY2M4LThlYTktNGIyZi05OGYwLTJiNWQ4ZTRkNTljMyJ9.Uo8JICl1ODNBhBw5JJIyopkmSNF3HUcepwklDVMlejk";
        }

        const getGameV = axios({
            url: "https://api.neuroplanapp.com/api/neurospect/game/version/",
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            paramsSerializer: {
                indexes: null 
            },
        })
            // Handle the response from backend here
            .then((res) => {
                //console.log(res.data.game_version);
                gameVersion = res.data.game_version;
                setGameV(gameVersion);
                if(gameVersion % 3 === 1) {
                    intro();
                } else if(gameVersion % 3 === 2) {
                    intro2();
                } else if(gameVersion % 3 === 0) {
                    intro3();
                } 
            })

            // Catch errors if any
            .catch((err) => {});


        //storePreviousAttempts();

    }, []);

};

export default Temp;
 