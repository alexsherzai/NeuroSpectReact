import React, { useEffect, useState } from 'react';

import './stylesheet.css';

const EncodingInstructions = ({onTimeEnd}) => {

    const handleClick = () => {
        onTimeEnd();
    };

    
    return (
        <div className='instructions-back'>
            <img className="logo-header" src="./LogoHeader.png" />
            <div className='instructions-header'>
                <strong>Word Memorization</strong>
            </div>
            <div className='instructions-content'>
                Let's test your memory! You're about to see 8 words. Try to memorize each one. You'll be asked to recall them later.
            </div>
            <button className="buttonNext" onClick={handleClick}><img src="/StartPlaying.png"/></button>
        </div>
    );
};

export default EncodingInstructions;
