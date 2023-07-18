import React from 'react';
import './stylesheet.css';

const ShapesInstructions = ({tutButton, onTimeEnd}) => {

    return (
        <div>
            <div className='instructions-back'>
                <div style={{height:'6vh'}}></div>
                <div className='instructions-header'>
                    <strong>Attention</strong>
                </div>
                <div className='instructions-content'>
                    <div>Ready for the next part? Now check if the <span className='highlight'>shapes</span> themselves are the <span className='highlight'>same</span>.</div>
                </div>
                <div className='buttonCont'>
                    <button className="buttonSecondary" onClick={tutButton}>How To Play</button>
                </div>
                <div className='buttonCont'>
                    <button className="buttonNext" onClick={onTimeEnd}>Start Playing</button>
                </div>
            </div>
        </div>
    );
};

export default ShapesInstructions;
