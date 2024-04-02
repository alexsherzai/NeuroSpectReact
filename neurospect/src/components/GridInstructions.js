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
                    <div style={{fontFamily:'Poppins-Regular', fontSize:'16px'}}>This game will measure how fast you can react and replicate a sequence</div>
                </div>
                <div style={{height:'15vh'}}></div>
                <div style={{justifyContent:'center', alignItems:'center', textAlign:'center'}}>
                    <div style={{fontFamily:'Poppins-Regular', fontSize:'24px', fontWeight:'40s0'}}>How Fast Can You React?</div>
                    <div style={{fontFamily:'Poppins-SemiBold', fontSize:'30px', marginBottom: '10%'}}> You will be shown a <span className='highlight'>sequence of lights</span> which will light up. Your task is to <span className='highlight'>replicate</span> the exact <span className='highlight'>sequence</span>.
                    </div>
                </div>
            
            <div className='buttonCont'>
            <button className="buttonNext" onClick={tutButton}>How to Play?</button>
            <button className="buttonSecondary" onClick={handleClick}>Play Game</button>
            </div>
        </div>
    );
};

export default GridInstructions;
