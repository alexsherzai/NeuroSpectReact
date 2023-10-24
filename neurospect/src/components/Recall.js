import React, { useEffect, useState } from 'react';
import { updateDoc, doc } from 'firebase/firestore';
import { storage } from '../config/firebase';
import SpeechRecognition, {useSpeechRecognition} from 'react-speech-recognition';
import MicrophoneWaveform from './MicrophoneWaveform';

import Voice from 'react-native-voice';


const Recall = ({ recData, storeRec, words, onTimeEnd }) => {
    const [timeLeft, setTimeLeft] = useState(60);

    const [inputWords, setInputWords] = useState('');
    const [error, setError] = useState('');
    const [mic, setMic] = useState(false);

    const [correctWords, setCorrectWords] = useState(0);
    const [answeredWords, setAnsweredWords] = useState(['']);
    const [warning, setWarning] = useState('');
    const [wordsDict, setWordsDict] = useState({"elephant": false, "banana" : false, "australia" : false, "orange" : false, "tennis" : false, "guitar" : false, "truck" : false, "history" : false, "lily" : false, "valley" : false});

    const [wordAtPoint, setWordAtPoint] = useState('');

    const queryParams = new URLSearchParams(window.location.search)
    const prolificID = queryParams.get("PROLIFIC_PID");
    const userID = queryParams.get("userID");

    const [mobileTranscript, setMobileTranscript] = useState('');
    const {transcript, browserSupportsSpeechRecognition} = useSpeechRecognition();

    Voice._onSpeechStart = () => setMic(true);
    Voice._onSpeechEnd = () => setMic(false);
    Voice._onSpeechError = (err) => setError(err.error);
    Voice.onSpeechResults = (result) => setMobileTranscript(result.value[0]);

    const StartRecording = async() => {
        setMic(true);
        try {
            await Voice.start('en-US');
        } catch (err) {
            setError(err);
        }
    };

    const StopRecording = async() => {
        setMic(false);
        try {
            await Voice.stop();
        } catch (err) {
            setError(err);
        }
    };

    const listeningButton = () => {
        if(!mic) {
            setMic(true);
            if(browserSupportsSpeechRecognition) {
                SpeechRecognition.startListening({continuous: true, language: 'en-US'});
            } else {
                StartRecording();
            }
        } else {
            if(browserSupportsSpeechRecognition) {
                SpeechRecognition.stopListening();
            } else {
                StopRecording();
            }
            setMic(false);
        }
    };


    let docName = userID;
    if(prolificID !== null) {
        docName = prolificID;
    } else if(userID === null && prolificID === null) {
        docName = "noID";
    }

    const AddData = () => {
        let recScore = 0;

        for (const [key, value] of Object.entries(wordsDict)) {
            if(value) {
                recScore++;
            }
        }

        if(recScore > 10) {
            recScore = 10;
        }


        storeRec(recScore);


        recData(
            {
                recall: recScore,
                recalledWords: wordsDict
            }
        );
    }

    const enterWord = () => {
        if(!(inputWords.toLowerCase() in wordsDict)) {
            setWarning("Wrong Word!");
            setWordAtPoint(inputWords);
        } else if(wordsDict[inputWords.toLowerCase()] === true && !mic) {
            setWarning("You already answered this word!");
            setWordAtPoint(inputWords);
        } else if(wordsDict[inputWords.toLowerCase()] === false) {
            wordsDict[inputWords.toLowerCase()] = true;
            setInputWords('');
        } 
        
        document.getElementById('inputField').focus();
    }

    useEffect(() => {
        if(inputWords !== wordAtPoint) {
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
        try {
            if (mic && transcript) {
                let spokenWords;
                let newInputWord;
                if(browserSupportsSpeechRecognition) {
                    spokenWords = transcript.trim().split(' ');
                } else {
                    spokenWords = mobileTranscript.trim().split(' ');
                }
                newInputWord = spokenWords[spokenWords.length - 1];
                setInputWords(newInputWord);
                console.log(newInputWord);
                enterWord();
            }
        } catch(err) {
            console.log(err);
        }

        let complete = true;
        for(let word in wordsDict) {
            if(wordsDict[word] === false) {
                complete = false;
            }
        }

        if(timeLeft <= 1) {
            complete = true;
        }

        if(complete) {
            AddData();
            onTimeEnd();
        }

        return () => clearInterval(timer);
    }, [AddData, onTimeEnd, words, mic, transcript]);
    
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

            <div className='recallInterface' style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                { mic === false ? 
                (<input
                    id="inputField"
                    className='textField'
                    type="text"
                    placeholder="Enter the words"
                    value={inputWords}
                    autoFocus={true}
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
