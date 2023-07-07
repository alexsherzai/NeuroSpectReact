import React from 'react';
import './stylesheet.css';

const AttentionInstructions = ({onTimeEnd}) => {

    return (
        <div>
            <div className='instructions-back'>
                <img className="logo-header" src="./LogoHeader.png" />
                <div className='instructions-header'>
                    <strong>Attention</strong>
                </div>
                <div className='instructions-content'>
                    Ready for an attention test? Check if the shapes are of the same colors.
                </div>
                <button className="buttonNext" onClick={onTimeEnd}><img src="/StartPlaying.png"/></button>
            </div>
        </div>
    );
};

export default AttentionInstructions;
