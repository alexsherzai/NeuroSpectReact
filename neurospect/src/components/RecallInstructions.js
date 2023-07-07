import React, { useEffect, useState } from 'react';

import './stylesheet.css';

const RecallInstructions = ({onTimeEnd}) => {

    return (
        <div className='instructions-back'>
            <img className="logo-header" src="./LogoHeader.png" />
            <div className='instructions-header'>
                <strong>Word Recall</strong>
            </div>
            <div className='instructions-content'>
                Let's see if you can remember the 8 words from earlier! Type as many of the words from earlier as possible. You have 90 seconds.
            </div>
            <button className="buttonNext" onClick={onTimeEnd}><img src="/StartPlaying.png"/></button>
        </div>
    );
};

export default RecallInstructions;
