import React, { useEffect, useState } from 'react';

import './stylesheet.css';
import { updateDoc, doc } from 'firebase/firestore';
import { storage } from '../config/firebase';

const Encoding = ({onTimeEnd }) => {
    const [timeLeft, setTimeLeft] = useState(20);
    const [highlightedIndex, setHighlightedIndex] = useState(0);

    const words = ["Elephant", "Banana", "Australia", "Orange", "Tennis", "Guitar", "Truck", "History"];

    const queryParams = new URLSearchParams(window.location.search)
    const prolificID = queryParams.get("PROLIFIC_PID");
    const userID = queryParams.get("userID");

    var docName = userID;
    if(prolificID !== null) {
        docName = prolificID;
    }

    const AddData = async() => {
        const reviewRef = doc(storage, "neurospect", docName);

        try {
            await updateDoc(reviewRef, {
                gameVersion: "study"
            })
        } catch(err) {
            console.log(err);
        }
    }
    
    useEffect(() => {

        const timer = setInterval(() => {
            setTimeLeft(oldTime => {
                if (oldTime <= 1) {
                    clearInterval(timer);
                    onTimeEnd();
                    AddData();
                }
                return oldTime - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [onTimeEnd]);

    useEffect(() => {
        calculateIndex();
    });

    const calculateIndex = () => {
        let value = 20 - timeLeft;
        if(value % 2 === 0) {
            if(value > 6) {
                setHighlightedIndex(value - 7);
            } else {
                setHighlightedIndex(value);
            }
        }        
        console.log(highlightedIndex);
    }
    
    return (
        <div className='fullGameMargin'>
            <h1 className="timer">{timeLeft} sec</h1>
            <div style={{margin: '10px', fontFamily: 'Poppins-Bold', alignItems:'center', justifyContent: 'center', display:'flex', fontSize: '26px'}}>
                Memorize These Words
            </div>
            <div className="encoding-content">
                {words && words.map((word, index) => (
                    <p key={index} className={`word ${index % 2 === 0 ? 'word-left' : 'word-right'} ${highlightedIndex === index ? 'highlighted' : ''}`}>{word}</p>
                ))}
            </div>
        </div>
    );
};

export default Encoding;
