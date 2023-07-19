import React, { useEffect, useState } from 'react';

import './stylesheet.css';

const EncodingInstructions = ({onTimeEnd}) => {

    const handleClick = () => {
        onTimeEnd();
    };

    
    return (
        <div className='instructions-back'>
            <div style={{height:'6vh'}}></div>
            <div className='instructions-header'>
                <strong>Word Memorization</strong>
            </div>
            <div className='instructions-content'>
                <div>Let's test your memory! You're about to see <span class='highlight'>8 words</span>. Try to <span class='highlight'>memorize</span> each one. You'll be asked to recall them later. <strong>Do not</strong> write down the words!
                </div>
            </div>
            <div className='buttonCont'>
            <button className="buttonNext" onClick={handleClick}>Start Playing</button>
            </div>
        </div>
    );
};

export default EncodingInstructions;
