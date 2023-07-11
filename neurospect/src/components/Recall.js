import React, { useEffect, useState } from 'react';

const Recall = ({ storeRec, words, onTimeEnd }) => {
    const [timeLeft, setTimeLeft] = useState(60);
    const [inputWords, setInputWords] = useState('');
    const [correctWords, setCorrectWords] = useState(0);
    const [answeredWords, setAnsweredWords] = useState(['']);
    

    const storeData = () => {
        storeRec(answeredWords.length - 1);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(oldTime => {
                if (oldTime <= 1) {
                    clearInterval(timer);
                    onTimeEnd(inputWords);
                }
                return oldTime - 1;
            });
        }, 1000);

        const checkWords = () => {
            let count = 0;

            if (words.includes(inputWords) && !answeredWords.includes(inputWords)) {
                count++;
                answeredWords.push(inputWords);
                setInputWords('');
            }

            setCorrectWords(count);
        };

        if(answeredWords.length === 9) {
            storeData();
            onTimeEnd();
        }

        checkWords();
        storeData();

        return () => clearInterval(timer);
    }, [onTimeEnd, inputWords, words]);
    
    const correct = 0;
    
    return (
        <div>
            <h1 className='timer'>Time left: {timeLeft} seconds</h1>
            <div>
                <div className="encoding-content">
                    <p className='word word-left'>{answeredWords[1]}</p>
                    <p className='word word-left'>{answeredWords[2]}</p>
                    <p className='word word-left'>{answeredWords[3]}</p>
                    <p className='word word-left'>{answeredWords[4]}</p>
                    <p className='word word-right'>{answeredWords[5]}</p>
                    <p className='word word-right'>{answeredWords[6]}</p>
                    <p className='word word-right'>{answeredWords[7]}</p>
                    <p className='word word-right'>{answeredWords[8]}</p>

                    <input
                        className='textField'
                        type="text"
                        placeholder="Enter remembered words..."
                        value={inputWords}
                        onChange={e => setInputWords(e.target.value)} 
                    />
                </div>
            </div>
            
        </div>
    );
};

export default Recall;
