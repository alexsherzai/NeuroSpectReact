import React, { useEffect, useState } from 'react';
import { updateDoc, doc } from 'firebase/firestore';
import { storage } from '../config/firebase';
import SpeechRecognition, {useSpeechRecognition} from 'react-speech-recognition';
import MicrophoneWaveform from './MicrophoneWaveform';


const Recall = ({ storeRec, words, onTimeEnd }) => {
    const [timeLeft, setTimeLeft] = useState(60);
    const [inputWords, setInputWords] = useState('');
    const [correctWords, setCorrectWords] = useState(0);
    const [answeredWords, setAnsweredWords] = useState(['']);
    const [warning, setWarning] = useState('');
    const [wordsDict, setWordsDict] = useState({"elephant": false, "banana" : false, "australia" : false, "orange" : false, "tennis" : false, "guitar" : false, "truck" : false, "history" : false, "lily" : false, "valley" : false});

    const [mic, setMic] = useState(false);

    const queryParams = new URLSearchParams(window.location.search)
    const prolificID = queryParams.get("PROLIFIC_PID");
    const userID = queryParams.get("userID");

    const {transcript, browserSupportsSpeechRecognition} = useSpeechRecognition();
    const listeningButton = () => {
        if(!mic) {
            SpeechRecognition.startListening({continuous: true, language: 'en-US'});
            setMic(true);
        } else {
            SpeechRecognition.stopListening();
            setMic(false);
        }
        
    };

    let docName = userID;
    if(prolificID !== null) {
        docName = prolificID;
    } else if(userID === null && prolificID === null) {
        docName = "noID";
    }

    const AddData = async() => {
        const reviewRef = doc(storage, "neurospect", docName);

        let currentDate = new Date().toLocaleString() + "";
        currentDate = currentDate.split(",")[0];

        let recScore = 0;

        for (const [key, value] of Object.entries(wordsDict)) {
            if(value) {
                recScore++;
            }
        }

        console.log(recScore);

        storeRec(recScore);

        try {
            await updateDoc(reviewRef, {
                lastUpdated: currentDate,
                recall: recScore,
                recalledWords: wordsDict
            })
        } catch(err) {
            console.log(err);
        }
    }

    const enterWord = () => {
        if(!(inputWords.toLowerCase() in wordsDict)) {
            setWarning("Wrong Word!");
        } else if(wordsDict[inputWords.toLowerCase()] === true) {
            setWarning("You already answered this word!");
        } else if(wordsDict[inputWords.toLowerCase()] === false) {
            wordsDict[inputWords.toLowerCase()] = true;
            setInputWords('');
        } 
    }

    useEffect(() => {
        setWarning('');


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

        /*
        const checkWords = () => {
            let count = 0;

            let included = false;

            for(let i = 0; i < words.length; i ++ ) {
                
                if (words[i].toLowerCase() === inputWords.toLowerCase()) {

                    for(let j = 0; j < answeredWords.length; j++) {
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

        if(answeredWords.length === 11) {
            AddData();
            onTimeEnd();
        }
        */

        if (mic && transcript) {
            const spokenWords = transcript.trim().split(' ');
            const newInputWord = spokenWords[spokenWords.length - 1];
            setInputWords(newInputWord);
            console.log(newInputWord);
            enterWord();
        }

        AddData();

        let complete = true;
        for(let word in wordsDict) {
            if(wordsDict[word] === false) {
                complete = false;
            }
        }

        if(complete) {
            onTimeEnd();
        }

        return () => clearInterval(timer);
    }, [onTimeEnd, inputWords, words, wordsDict, mic, transcript]);
    
    return (
        <div className='fullGameMargin'>
            <h1 className='timer'>{timeLeft} sec</h1>
            <div>
                <div className="encoding-content">
                    {Object.entries(wordsDict).map(([word, answered]) => 
                    
                    <p className="word">{!answered ? "" : word.charAt(0).toUpperCase() + word.substring(1)}</p>
                    
                    )}
                </div>
            </div>

            <div style={{height: "10vh"}}>

            </div>

            <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                { mic === false ? 
                (<input
                    className='textField'
                    type="text"
                    placeholder="Enter the words"
                    value={inputWords}
                    onChange={e => setInputWords(e.target.value)} 
                />) : 
                (
                    <div>
                        <MicrophoneWaveform/>
                    </div>
                )
                }
                <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', marginLeft: '10px'}}>
                    { mic ? 
                        (<button className='pause' onClick={listeningButton}><img src='pause.svg'/></button>)
                        :
                        (inputWords.length === 0 ? 
                            (<button className='mic' onClick={listeningButton}><img src='mic.svg'/></button>) 
                            :
                            (<button className='enterButton' onClick={enterWord}><img src='send.svg'/></button>)
                        ) 
                    }
                </div>
            </div>
            

            <div style={{textAlign:'center', fontFamily:'Poppins-Regular'}}>
                <h3 style={{color: '#CD3843'}}>{warning}</h3>
            </div>
            
        </div>
    );
};

export default Recall;
