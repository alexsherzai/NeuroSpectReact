import React, { useEffect, useState } from 'react';


import './stylesheet.css';

const Intro = ({onTimeEnd}) => {

    const [timeLeft, setTimeLeft] = useState(3);

    

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
        <div className='intro'>
            <img className="intro-logo" src='./Vector.png' />
        </div>
    );
};

export default Intro;
