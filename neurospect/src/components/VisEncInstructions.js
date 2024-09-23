import React, { useEffect, useState } from 'react';

import './stylesheet.css';

const VisEncInstructions = ({onTimeEnd}) => {

    const handleClick = () => {
        onTimeEnd();
    };

    
    return (
        <div className='fullGameMargin instructions-back'>
            <div style={{height:'6vh'}}></div>
                <div>
                    <div style={{fontFamily:'Poppins-Bold', fontSize:'22px'}}>Visual Memory</div>
                    <div style={{fontFamily:'Poppins-Regular', fontSize:'16px'}}>This game will measure how well you can store and retrieve information.</div>
                </div>
                <div style={{height:'8vh'}}></div>
                <div style={{justifyContent:'center', alignItems:'center', textAlign:'center'}}>
                    <div style={{fontFamily:'Poppins-Regular', fontSize:'24px', fontWeight:'400'}}>Can you memorize visually?</div>
                    <div style={{fontFamily:'Poppins-SemiBold', fontSize:'30px', marginBottom: '10vh'}}> This time we'll ask you to memorize <span className='highlight'>shapes and figures</span>. Try to <span className='highlight'>memorize</span> each one. You'll be asked to recall them later.
                    </div>
                </div>
            
            <div className='buttonCont'>
            <button className="buttonNext" onClick={handleClick}>Play Game</button>
            </div>
        </div>
    );
};

export default VisEncInstructions;
