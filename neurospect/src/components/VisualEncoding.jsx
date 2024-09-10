import {React, useState, useEffect} from 'react'

const VisualEncoding = ({onTimeEnd, shapesToMem, shapes}) => {
    const [end, setEnd] = useState(false);
    const [timeLeft, setTimeLeft] = useState(30);
    const [first, setFirst] = useState(true);

    const [shapeNums, setShapeNums] = useState([]);
    
    const [sel, setSel] = useState([]);

    useEffect(() => {
        if(first) {
            var arr = [];
            while(arr.length < 6){
                var r = Math.floor(Math.random() * (shapes.length - 1)) + 1;
                if(arr.indexOf(r) === -1) {
                    arr.push(r)
                }
            }
            console.log(arr);
            let h = [];

            for(var i = 0; i < arr.length; i++) {
                h.push(shapes[arr[i]])
            }
        
            setSel(h);
            shapesToMem(arr);
            setFirst(false);
        }

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