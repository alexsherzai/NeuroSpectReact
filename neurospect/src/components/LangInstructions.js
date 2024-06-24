import React, { useEffect, useState } from 'react';

import './stylesheet.css';

const LangInstructinos = ({onTimeEnd}) => {

    return (
        <div className='fullGameMargin instructions-back'>
            <div style={{height:'6vh'}}></div>
                <div>
                    <div style={{fontFamily:'Poppins-Bold', fontSize:'22px'}}>Language</div>
                    <div style={{fontFamily:'Poppins-Regular', fontSize:'16px'}}>This game will test your ability to find relationships between words.</div>
                </div>
                <div style={{height:'15vh'}}></div>
                <div style={{justifyContent:'center', alignItems:'center', textAlign:'center'}}>
                    <div style={{fontFamily:'Poppins-Regular', fontSize:'24px', fontWeight:'400'}}>You will be shown a keyword in the middle of your screen.</div>
                    <div style={{fontFamily:'Poppins-SemiBold', fontSize:'30px', marginBottom: '10%'}}> Choose which <span className='highlight'>option</span>  you think belongs to the <span className='highlight'>same category</span> as the keyword.
                    </div>
                    <div style={{fontFamily:'Poppins-SemiBold', fontSize:'26px', marginBottom: '10%'}}> You have <span className='highlight'>2 minutes</span>!
                    </div>
                </div>
            <div className='buttonCont'>
                <button className="buttonNext" onClick={onTimeEnd}>Start Playing</button>
            </div>
        </div>
    );
};

export default LangInstructinos;
