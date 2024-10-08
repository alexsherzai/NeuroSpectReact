import React from 'react';
import './stylesheet.css';

const AttentionInstructions = ({tutButton, onTimeEnd}) => {

    return (
        <div className='fullGameMargin'>
            <div className='instructions-back'>
                <div style={{height:'6vh'}}></div>
                <div>
                    <div style={{fontFamily:'Poppins-Bold', fontSize:'22px'}}>Attention</div>
                    <div style={{fontFamily:'Poppins-Regular', fontSize:'16px'}}>This game will measure how good you are at paying attention to things.</div>
                </div>
                <div style={{height:'8vh'}}></div>
                <div style={{justifyContent:'center', alignItems:'center', textAlign:'center'}}>
                    <div style={{fontFamily:'Poppins-Regular', fontSize:'24px', fontWeight:'400'}}>You did great!</div>
                    <div style={{fontFamily:'Poppins-SemiBold', fontSize:'30px', marginBottom: '10vh'}}> Now, check if the <span className='highlight'>shapes</span> are of the same <span className='highlight'>color</span>.
                    </div>
                </div>
                <div className='buttonCont'>
                    <button className="buttonSecondary" onClick={tutButton}>How To Play?</button>
                    <button className="buttonNext" onClick={onTimeEnd}>Start Playing</button>
                </div>
            </div>
        </div>
    );
};

export default AttentionInstructions;
