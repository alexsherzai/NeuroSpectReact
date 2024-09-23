import React, { useEffect, useState } from 'react';

import './stylesheet.css';

const Encoding = ({gameVersion, onTimeEnd}) => {
    const [timeLeft, setTimeLeft] = useState(20);
    const [highlightedIndex, setHighlightedIndex] = useState(0);
    const [end, setEnd] = useState(false);

    const words = ["Dolphin", "Apple", "Canada", "Purple", "Football", "Piano", "Airplane", "Math"];
    
    useEffect(() => {

        const timer = setInterval(() => {
            setTimeLeft(oldTime => {
                if (oldTime <= 1) {
                    clearInterval(timer);
                    setEnd(true);
                }
                return oldTime - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [onTimeEnd]);

    useEffect(() => {
        calculateIndex();
        console.log(highlightedIndex)
    });

    const calculateIndex = () => {
        let value = 20 - timeLeft;
        if(value % 2 === 0) {
            if(value >= 10) {
                setHighlightedIndex(value - 9);
            } else {
                setHighlightedIndex(value);
            }
        }        
    }
    
    return (
        <div>
        {!end &&
        <div className='fullGameMargin'>
            <h1 className="timer">{timeLeft} sec</h1>
            <div style={{margin: '10px', fontFamily: 'Poppins-SemiBold', alignItems:'center', justifyContent: 'center', display:'flex', fontSize: '26px'}}>
                Memorize These Words
            </div>
            <div className="encoding-content">
                <p className='word highlighted'>{words[highlightedIndex]}</p>
            </div>
        </div>
        }

        {end && 
        
        <div>
            <h1 style={{top: "15vh"}} className="timer">0 sec</h1>
            <div style={{fontFamily: 'Poppins-SemiBold', alignItems:'center', justifyContent: 'center', display:'flex', fontSize: '26px'}}>
                Time's Up!
            </div>
            <div style={{fontFamily: 'Poppins-Regular', fontSize: '18px', textAlign: 'center'}}>Your time to memorize has expired. Brace yourselves for the upcoming test of your memory. Stay sharp, stay focused! The challenge awaits.💡</div>
            <div className='buttonCont'>
                <button className="buttonNext" onClick={onTimeEnd}>Next</button>
            </div>
        </div>
    
        }
        </div>
    );
};

export default Encoding;
