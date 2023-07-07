import React, { useEffect, useState } from 'react';

import './stylesheet.css';

const VisuoInstructions = ({onTimeEnd}) => {


    
    return (
        <div className='instructions-back'>
            <img className="logo-header" src="./LogoHeader.png" />
            <div className='instructions-header'>
                <strong>Visuospatial</strong>
            </div>
            <div className='instructions-content'>
                Look at the reference shape and choose the shape that is the rotated version of the reference shape.
            </div>
            <button className="buttonNext" onClick={onTimeEnd}><img src="/StartPlaying.png"/></button>
        </div>
    );
};

export default VisuoInstructions;
