import React, { useEffect, useState } from 'react';

import './stylesheet.css';

const RecallInstructions = ({onTimeEnd}) => {

    return (
        <div className='fullGameMargin instructions-back'>
            <div style={{height:'6vh'}}></div>
                <div>
                    <div style={{fontFamily:'Poppins-Bold', fontSize:'22px'}}>Recall</div>
                    <div style={{fontFamily:'Poppins-Regular', fontSize:'16px'}}>This game will measure how well you can store and retrieve information.</div>
                </div>
                <div style={{height:'15vh'}}></div>
                <div style={{justifyContent:'center', alignItems:'center', textAlign:'center'}}>
                    <div style={{fontFamily:'Poppins-Regular', fontSize:'24px', fontWeight:'400'}}>Let's see if you can remember the 8 words!</div>
                    <div style={{fontFamily:'Poppins-Regular', fontWeight:'600', fontSize:'30px', marginBottom: '10%'}}> <span className='highlight'>Type</span> as many as you can <span className='highlight'>recall</span> in a space.
                    </div>
                    <div style={{fontFamily:'Poppins-Regular', fontWeight:'600', fontSize:'26px', marginBottom: '10%'}}> You have <span className='highlight'>60 seconds</span>!
                    </div>
                </div>
            <div className='buttonCont'>
                <button className="buttonNext" onClick={onTimeEnd}>Start Playing</button>
            </div>
        </div>
    );
};

export default RecallInstructions;
