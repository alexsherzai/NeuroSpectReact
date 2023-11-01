import React, { useEffect, useState } from 'react';

import './stylesheet.css';
import { updateDoc, doc } from 'firebase/firestore';
import { storage } from '../config/firebase';

import voiceover from '../WordsAudio/AllWords.wav';

const Encoding = ({gameVersion, onTimeEnd, words}) => {
    const [timeLeft, setTimeLeft] = useState(20);
    const [highlightedIndex, setHighlightedIndex] = useState(0);
    const [end, setEnd] = useState(false);

    const queryParams = new URLSearchParams(window.location.search)
    const prolificID = queryParams.get("PROLIFIC_PID");
    const userID = queryParams.get("userID");

    const audio = new Audio(voiceover);

    let docName = userID;
    if(prolificID !== null) {
        docName = prolificID;
    } else if(userID === null && prolificID === null) {
        docName = "noID";
    }
    
    useEffect(() => {

        if(gameVersion === 1) {
            audio.play();
        }

        const timer = setInterval(() => {
            setTimeLeft(oldTime => {
                if (oldTime <= 1) {
                    clearInterval(timer);
                    setEnd(true);
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
            if(value >= 10) {
                setHighlightedIndex(value - 9);
            } else {
                setHighlightedIndex(value);
            }
        }        
        console.log(highlightedIndex);
    }
    
    return (
        <div>
        {!end &&
        <div className='fullGameMargin'>
            <h1 className="timer">{timeLeft} sec</h1>
            <div style={{margin: '10px', fontFamily: 'Poppins-SemiBold', alignItems:'center', justifyContent: 'center', display:'flex', fontSize: '26px'}}>
                Memorize These Words
            </div>
            <div className="encoding-content">
                {words && words.map((word, index) => (
                    <p key={index} className={`word ${index % 2 === 0 ? 'word-left' : 'word-right'} ${highlightedIndex === index ? 'highlighted' : ''}`}>{word}</p>
                ))}
            </div>
        </div>
        }

        {end && 
        
        <div className='fullGameMargin'>
            <h1 className="timer">0 sec</h1>
            <div style={{margin: '10px', fontFamily: 'Poppins-SemiBold', alignItems:'center', justifyContent: 'center', display:'flex', fontSize: '26px'}}>
                Time's Up!
            </div>
            <div style={{fontFamily: 'Poppins-Regular', fontSize: '18px', textAlign: 'center'}}>Your time to memorize has expired. Brace yourselves for the upcoming test of your memory. Stay sharp, stay focused! The challenge awaits.💡</div>
            <div className='buttonCont'>
                <button className="buttonNext" onClick={onTimeEnd}>Next</button>
            </div>
        </div>
    
        }
        </div>
    );
};

export default Encoding;
