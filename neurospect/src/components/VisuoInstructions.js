import React, { useEffect, useState } from 'react';

import './stylesheet.css';

const VisuoInstructions = ({tutButton, onTimeEnd}) => {


    
    return (
        <div className='fullGameMargin instructions-back'>
            <div style={{height:'6vh'}}></div>
                <div>
                    <div style={{fontFamily:'Poppins-Bold', fontSize:'22px'}}>Visuospatial</div>
                    <div style={{fontFamily:'Poppins-Regular', fontSize:'16px'}}>This game will test how good you are at interpreting shapes and images.</div>
                </div>
                <div style={{height:'6vh'}}></div>
                <div style={{justifyContent:'center', alignItems:'center', textAlign:'center'}}>
                    <div style={{fontFamily:'Poppins-Regular', fontSize:'24px', fontWeight:'400'}}>Let's test your visual skills!</div>
                    <div style={{fontFamily:'Poppins-SemiBold', fontSize:'30px', marginBottom: '10%'}}> Look at the <span className='highlight'>reference shape</span>, then find the <span className='highlight'>matching shape</span> among the <span className='highlight'> ones</span>.
                    </div>
                </div>
            <div className='buttonCont'>
                    <button className="buttonSecondary" onClick={tutButton}>How to Play?</button>
                    <button className="buttonNext" onClick={onTimeEnd}>Start Playing</button>
            </div>
        </div>
    );
};

export default VisuoInstructions;
