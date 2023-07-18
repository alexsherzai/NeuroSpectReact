import React from 'react';
import './stylesheet.css';

const AttentionInstructions = ({tutButton, onTimeEnd}) => {

    return (
        <div>
            <div className='instructions-back'>
                <div style={{height:'6vh'}}></div>
                <div className='instructions-header'>
                    <strong>Attention</strong>
                </div>
                <div className='instructions-content'>
                    <div>Ready for an attention test? Check if the <span className='highlight'>shapes</span> are of the <span className='highlight'>same color</span>.</div>
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

export default AttentionInstructions;
