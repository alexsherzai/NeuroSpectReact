import React, { useEffect, useState } from 'react';

import './stylesheet.css';

const Encoding = ({onTimeEnd }) => {
    const [timeLeft, setTimeLeft] = useState(30);
    const [highlightedIndex, setHighlightedIndex] = useState(0);

    const words = ["Elephant", "Banana", "Australia", "Orange", "Tennis", "Guitar", "Truck", "History"];
    
    useEffect(() => {

        const timer = setInterval(() => {
            setTimeLeft(oldTime => {
                if (oldTime <= 1) {
                    clearInterval(timer);
                    onTimeEnd();
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
        let value = (Math.floor((30 - timeLeft) / 3) * 2);
        if(value > 6) {
            setHighlightedIndex(value - 7);
        } else {
            setHighlightedIndex(value);
        }
        console.log(highlightedIndex);
    }
    
    return (
        <div className='fullGameMargin'>
            <h1 className="timer">Time left: {timeLeft} sec</h1>
            <div className="encoding-content">
                {words && words.map((word, index) => (
                    <p key={index} className={`word ${index % 2 === 0 ? 'word-left' : 'word-right'} ${highlightedIndex === index ? 'highlighted' : ''}`}>{word}</p>
                ))}
            </div>
        </div>
    );
};

export default Encoding;
