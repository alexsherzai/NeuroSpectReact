import React, { useEffect, useState } from 'react';

import './stylesheet.css';

const GridInstructions = ({onTimeEnd, tutButton}) => {

    const handleClick = () => {
        onTimeEnd();
    };

    
    return (
        <div className='fullGameMargin instructions-back'>
            <div style={{height:'6vh'}}></div>
                <div>
                    <div style={{fontFamily:'Poppins-Bold', fontSize:'22px'}}>Processing</div>
                    <div style={{fontFamily:'Poppins-Regular', fontSize:'16px'}}>This game will measure how fast you can react to stimuli</div>
                </div>
                <div style={{height:'15vh'}}></div>
                <div style={{justifyContent:'center', alignItems:'center', textAlign:'center'}}>
                    <div style={{fontFamily:'Poppins-Regular', fontSize:'24px', fontWeight:'40s0'}}>How Fast Can You React?</div>
                    <div style={{fontFamily:'Poppins-SemiBold', fontSize:'30px', marginBottom: '10%'}}> You will be shown a <span className='highlight'>grid of squares</span> which will light up. <span className='highlight'>Click the squares</span> that light up as soon as possible.
                    </div>
                </div>
            
            <div className='buttonCont'>
            <button className="buttonNext" onClick={tutButton}>How To Play</button>
            <button className="buttonSecondary" onClick={handleClick}>Play Game</button>
            </div>
        </div>
    );
};

export default GridInstructions;
