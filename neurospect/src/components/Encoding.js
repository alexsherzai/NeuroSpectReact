import React, { useEffect, useState } from 'react';

import './stylesheet.css';

const Encoding = ({ words, onTimeEnd }) => {
    const [timeLeft, setTimeLeft] = useState(30);
    
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
    
    return (
        <div>
            <h1 className="timer">Time left: {timeLeft} seconds</h1>
            <div className="encoding-content">
                {words && words.map((word, index) => (
                    <p key={index} className={`word ${index % 2 === 0 ? 'word-left' : 'word-right'}`}>{word}</p>
                ))}
            </div>
        </div>
    );
};

export default Encoding;
