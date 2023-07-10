import React, { useEffect, useState } from 'react';

import './stylesheet.css';

const VisuoInstructions = ({tutButton, onTimeEnd}) => {


    
    return (
        <div className='instructions-back'>
            <img className="logo-header" src="./LogoHeader.png" />
            <div className='instructions-header'>
                <strong>Visuospatial</strong>
            </div>
            <div className='instructions-content'>
                Look at the reference shape and choose the shape that is the rotated version of the reference shape.
            </div>
            <div>
                    <button className="buttonNext" onClick={tutButton}><img src="/TutorialButton.png"/></button>
                    <button className="buttonNext" onClick={onTimeEnd}><img src="/StartPlaying.png"/></button>
            </div>
        </div>
    );
};

export default VisuoInstructions;
