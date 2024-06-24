import React, { useEffect, useState } from 'react';

import './stylesheet.css';

const ExecutiveInstructions = ({onTimeEnd, tutButton}) => {

    const handleClick = () => {
        onTimeEnd();
    };

    
    return (
        <div className='fullGameMargin instructions-back'>
            <div style={{height:'6vh'}}></div>
                <div>
                    <div style={{fontFamily:'Poppins-Bold', fontSize:'22px'}}>Problem Solving</div>
                    <div style={{fontFamily:'Poppins-Regular', fontSize:'16px'}}>This game will test how well you can adapt to new rules.</div>
                </div>
                <div style={{height:'15vh'}}></div>
                <div style={{justifyContent:'center', alignItems:'center', textAlign:'center'}}>
                    <div style={{fontFamily:'Poppins-Regular', fontSize:'24px', fontWeight:'400'}}>Let's see how good you are at problem solving</div>
                    <div style={{fontFamily:'Poppins-SemiBold', fontSize:'30px', marginBottom: '10%'}}> 
                    You will be shown <span className='highlight'>some shapes and patterns</span>. You have to <span className='highlight'>pair up</span> all the cards shown.
                    </div>
                </div>
            
            <div className='buttonCont'>
            <button className="buttonNext" onClick={tutButton}>How To Play?</button>
            <button className="buttonSecondary" onClick={handleClick}>Play Game</button>
            </div>
        </div>
    );
};

export default ExecutiveInstructions;
