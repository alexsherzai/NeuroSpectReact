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
                    <div style={{fontFamily:'Poppins-Bold', fontSize:'22px'}}>Attention</div>
                    <div style={{fontFamily:'Poppins-Regular', fontSize:'16px'}}>This game will measure how good you are at paying attention to things.</div>
                </div>
                <div style={{height:'15vh'}}></div>
                <div style={{justifyContent:'center', alignItems:'center', textAlign:'center'}}>
                    <div style={{fontFamily:'Poppins-Regular', fontSize:'24px', fontWeight:'400'}}>Ready for an attention test?</div>
                    <div style={{fontFamily:'Poppins-Regular', fontWeight:'600', fontSize:'30px', marginBottom: '10%'}}> Check if the <span className='highlight'>shapes</span> are of the same <span className='highlight'>color</span>.
                    </div>
                </div>
            
            <div className='buttonCont'>
            <button className="buttonNext" onClick={handleClick}>Start Playing</button>
            </div>
        </div>
    );
};

export default EncodingInstructions;
