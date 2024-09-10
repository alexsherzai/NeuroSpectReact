import {React, useState, useEffect} from 'react'

const VisualEncoding = ({onTimeEnd, shapesToMem, shapes}) => {
    const [end, setEnd] = useState(false);
    const [timeLeft, setTimeLeft] = useState(2);

    
    const [sel, setSel] = useState([]);

    function grue(arr, num) {
        // Check if the array length is less than the number of elements requested
        if (arr.length < num) {
            throw new Error('Array length is less than the number of elements requested');
        }
    
        // Create a copy of the array to avoid modifying the original array
        const arrCopy = [...arr];
    
        // Shuffle the array using the Fisher-Yates shuffle algorithm
        for (let i = arrCopy.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arrCopy[i], arrCopy[j]] = [arrCopy[j], arrCopy[i]];
        }
    
        // Return the first 'num' elements from the shuffled array
        return arrCopy.slice(0, num);
    }

    useEffect(() => {
        let h = grue(shapes, 6);
        
        setSel(h);

        const timer = setInterval(() => {
            setTimeLeft(oldTime => {
                if (oldTime <= 1) {
                    clearInterval(timer);
                    setEnd(true);
                    shapesToMem(h);
                }
                return oldTime - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [onTimeEnd]);
    
    return (
        <div className='fullGameMargin'>
            {!end && 
            <div>
                    <h1>Pay close attention to the order of symbols</h1>
                    <h1 className="timer">{timeLeft} sec</h1>
                    <div className='grid-container'>
                        {sel.map((key, index) => (
                            <div className='shape-box'>
                                    {key}
                            </div>
                        ))}
                    </div>
            </div>
            }
            
            {end && 
        
                <div className='fullGameMargin'>
                <h1 className="timer">0 sec</h1>
                <div style={{margin: '10px', fontFamily: 'Poppins-SemiBold', alignItems:'center', justifyContent: 'center', display:'flex', fontSize: '26px'}}>
                    Time's Up!
                </div>
                <div style={{fontFamily: 'Poppins-Regular', fontSize: '18px', textAlign: 'center'}}>Your time to memorize has expired. Brace yourselves for the upcoming test of your memory. Stay sharp, stay focused! The challenge awaits.💡</div>
                <div className='buttonCont'>
                    <button className="buttonNext" onClick={onTimeEnd}>Next</button>
                </div>
            </div>
        
            }
        </div>
    )
}

export default VisualEncoding