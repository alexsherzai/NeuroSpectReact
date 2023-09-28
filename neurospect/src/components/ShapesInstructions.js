import React from 'react';
import './stylesheet.css';

const ShapesInstructions = ({tutButton, onTimeEnd}) => {

    return (
        <div>
            <div className='fullGameMargin instructions-back'>
                <div style={{height:'6vh'}}></div>
                <div>
                    <div style={{fontFamily:'Poppins-Bold', fontSize:'22px'}}>Attention</div>
                    <div style={{fontFamily:'Poppins-Regular', fontSize:'16px'}}>This game will measure how good you are at paying attention to things.</div>
                </div>
                <div style={{height:'15vh'}}></div>
                <div style={{justifyContent:'center', alignItems:'center', textAlign:'center'}}>
                    <div style={{fontFamily:'Poppins-Regular', fontSize:'24px', fontWeight:'400'}}>Ready for an attention test?</div>
                    <div style={{fontFamily:'Poppins-SemiBold', fontSize:'30px', marginBottom: '10%'}}> We will show you <span className='highlight'>pairs of shapes</span>. You need to decide if the <span className='highlight'>shapes</span> are the <span className='highlight'>same</span> or not
                    </div>
                </div>
                <div className='buttonCont'>
                    <button className="buttonSecondary" onClick={tutButton}>How To Play</button>
                    <button className="buttonNext" onClick={onTimeEnd}>Start Playing</button>
                </div>
            </div>
        </div>
    );
};

export default ShapesInstructions;
