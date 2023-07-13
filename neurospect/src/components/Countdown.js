import React, { useEffect, useState } from 'react';


import './stylesheet.css';

const Countdown = ({onTimeEnd}) => {
    const [countdown, setCountdown] = useState(3);

    useEffect(() => {
        if (countdown > 0) {
        const timer = setTimeout(() => {
            setCountdown(countdown - 1);
        }, 1000);
        return () => clearTimeout(timer);
        } else {
            onTimeEnd()
        }
    }, [countdown, onTimeEnd]);

    let message;
    if (countdown === 3) {
        message = 'Ready.';
    } else if (countdown === 2) {
        message = 'Set.';
    } else if (countdown === 1) {
        message = 'Go!';
    }
    
    return (
        <div>
            <div style={{width:'100%', height:'100%', backgroundColor:'black', opacity:'80%', position:'absolute'}}> 

            </div>

            <div style={{verticalAlign: 'middle', width:'100%', height:'100%', position:'absolute', justifyContent:'center', textAlign:'center', alignItems:'center'}}>
                <div style={{marginTop:'50%'}}>
                    <h1 style={{fontSize:'50px', fontFamily:'Poppins-Bold', color:'white'}}>{message}</h1>
                </div>
            </div>
        </div>
    );
};

export default Countdown;
