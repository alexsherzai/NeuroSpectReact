import React, { useEffect, useState } from 'react';

import './stylesheet.css';

const VisMemInstructions = ({onTimeEnd}) => {

    const handleClick = () => {
        onTimeEnd();
    };

    
    return (
        <div className='fullGameMargin instructions-back'>
            <div style={{height:'6vh'}}></div>
                <div>
                    <div style={{fontFamily:'Poppins-Bold', fontSize:'22px'}}>Visual Recall</div>
                    <div style={{fontFamily:'Poppins-Regular', fontSize:'16px'}}>This game will measure how well you can store and retrieve information.</div>
                </div>
                <div style={{height:'8vh'}}></div>
                <div style={{justifyContent:'center', alignItems:'center', textAlign:'center'}}>
                    <div style={{fontFamily:'Poppins-Regular', fontSize:'24px', fontWeight:'400'}}>Do you remember the shapes from earlier?</div>
                    <div style={{fontFamily:'Poppins-SemiBold', fontSize:'30px', marginBottom: '10vh'}}> You have <span className='highlight'>12 options</span>for shapes. Try to drag and drop <span className='highlight'>the 6 shapes</span> you saw earlier.                    </div>
                </div>
            
            <div className='buttonCont'>
            <button className="buttonNext" onClick={handleClick}>Play Game</button>
            </div>
        </div>
    );
};

export default VisMemInstructions;
