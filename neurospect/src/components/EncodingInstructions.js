import React, { useEffect, useState } from 'react';

import './stylesheet.css';

const EncodingInstructions = ({onTimeEnd}) => {

    const handleClick = () => {
        onTimeEnd();
    };

    
    return (
        <div className='fullGameMargin instructions-back'>
            <div style={{height:'6vh'}}></div>
                <div>
                    <div style={{fontFamily:'Poppins-Bold', fontSize:'22px'}}>Word Memory</div>
                    <div style={{fontFamily:'Poppins-Regular', fontSize:'16px'}}>This game will measure how well you can store and retrieve information.</div>
                </div>
                <div style={{height:'15vh'}}></div>
                <div style={{justifyContent:'center', alignItems:'center', textAlign:'center'}}>
                    <div style={{fontFamily:'Poppins-Regular', fontSize:'24px', fontWeight:'400'}}>Let's Test Your Memory!</div>
                    <div style={{fontFamily:'Poppins-Regular', fontWeight:'600', fontSize:'30px', marginBottom: '10%'}}> You're about to see <span className='highlight'>8 words</span>. Try to <span className='highlight'>memorize</span> each one. You'll be asked to recall them later.
                    </div>
                </div>
            
            <div className='buttonCont'>
            <button className="buttonNext" onClick={handleClick}>Play Game</button>
            </div>
        </div>
    );
};

export default EncodingInstructions;
