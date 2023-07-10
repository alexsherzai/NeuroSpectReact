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
                <div>Let's test your memory! You're about to see <span class='highlight'>8 words</span>. Try to <span class='highlight'>memorize</span> each one. You'll be asked to recall them later.
                </div>
            </div>
            <button className="buttonNext" onClick={handleClick}><img src="/StartPlaying.png"/></button>
        </div>
    );
};

export default EncodingInstructions;
