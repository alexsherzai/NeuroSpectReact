import React, { useEffect, useState } from 'react';
import { updateDoc, doc } from 'firebase/firestore';
import { storage } from '../config/firebase';

const Recall = ({ storeRec, words, onTimeEnd }) => {
    const [timeLeft, setTimeLeft] = useState(60);
    const [inputWords, setInputWords] = useState('');
    const [correctWords, setCorrectWords] = useState(0);
    const [answeredWords, setAnsweredWords] = useState(['']);
    const [warning, setWarning] = useState('');
    

    const queryParams = new URLSearchParams(window.location.search)
    const prolificID = queryParams.get("PROLIFIC_PID");
    const userID = queryParams.get("userID");

    var docName = userID;
    if(prolificID !== null) {
        docName = prolificID;
    }

    const AddData = async() => {
        const reviewRef = doc(storage, "neurospect", docName);
        storeRec(answeredWords.length - 1);

        var tempArr = [];
        for(var i = 1; i < answeredWords.length; i++) {
            tempArr.push(answeredWords[i]);
        }

        try {
            await updateDoc(reviewRef, {
                recall: answeredWords.length - 1,
                recalledWords: tempArr
            })
        } catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        if(inputWords.length === 0) {
            setWarning('');
        }


        const timer = setInterval(() => {
            setTimeLeft(oldTime => {
                if (oldTime <= 1) {
                    clearInterval(timer);
                    onTimeEnd(inputWords);
                }
                return oldTime - 1;
            });
        }, 1000);

        if(inputWords.charAt(inputWords.length - 1) === ' ') {
            setInputWords(inputWords.slice(0, -1));
        }

        const checkWords = () => {
            let count = 0;

            let included = false;

            for(var i = 0; i < words.length; i ++ ) {
                
                if (words[i].toLowerCase() === inputWords.toLowerCase()) {

                    for(var j = 0; j < answeredWords.length; j++) {
                        if(answeredWords[j].toLowerCase() === inputWords.toLowerCase()) {
                            included = true;
                            break;
                        }
                    }

                    if(!included) {
                        count++;
                        answeredWords.push(words[i]);
                        setInputWords('');
                        setWarning('');
                    }
                }
            }

            setCorrectWords(count);
        };

        if(answeredWords.length === 9) {
            AddData();
            onTimeEnd();
        }

        checkWords();
        AddData();

        return () => clearInterval(timer);
    }, [onTimeEnd, inputWords, words]);
    
    const correct = 0;
    
    return (
        <div className='fullGameMargin'>
            <h1 className='timer'>{timeLeft} sec</h1>
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
                </div>
            </div>

            <div style={{justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                <input
                    className='textField'
                    type="text"
                    placeholder="Enter the words"
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            console.log("test");
                            setWarning("Not a valid word!");
                        }
                    }}
                    value={inputWords}
                    onChange={e => setInputWords(e.target.value)} 
                />
            </div>

            <div style={{textAlign:'center', fontFamily:'Poppins-Regular'}}>
                <h3 style={{color: '#CD3843'}}>{warning}</h3>
            </div>
            
        </div>
    );
};

export default Recall;
