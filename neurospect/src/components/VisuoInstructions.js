import React, { useEffect, useState } from 'react';

import './stylesheet.css';

const VisuoInstructions = ({tutButton, onTimeEnd}) => {


    
    return (
        <div className='instructions-back'>
            <div style={{height:'6vh'}}></div>
            <div className='instructions-header'>
                <strong>Visuospatial</strong>
            </div>
            <div className='instructions-content'>
                Look at the reference shape and choose the shape that is the rotated version of the reference shape.
            </div>
            <div className='buttonCont'>
                    <button className="buttonSecondary" onClick={tutButton}>How To Play</button>
            </div>
            <div className='buttonCont'>
                    <button className="buttonNext" onClick={onTimeEnd}>Start Playing</button>
            </div>
        </div>
    );
};

export default VisuoInstructions;
