import React, { useEffect, useState } from 'react';

import './stylesheet.css';
import { updateDoc, doc } from 'firebase/firestore';
import { storage } from '../config/firebase';

const Language = ({onTimeEnd, langScore, langData}) => {
    const [timeLeft, setTimeLeft] = useState(120);
    const [highlightedIndex, setHighlightedIndex] = useState(0);
    const [end, setEnd] = useState(false);

    const [iter, setIter] = useState(0);

    const queryParams = new URLSearchParams(window.location.search)
    const prolificID = queryParams.get("PROLIFIC_PID");
    const userID = queryParams.get("userID");

    const buttonWrong = '2px solid #CD3843';
    const buttonCorrect = '2px solid #2E8970';
    const [button1style, setButton1Style] = useState('2px solid #F6F4FA');
    const [button2style, setButton2Style] = useState('2px solid #F6F4FA');
    const [button3style, setButton3Style] = useState('2px solid #F6F4FA');
    const [button4style, setButton4Style] = useState('2px solid #F6F4FA');

    const keywords = ["Dog", "Apple", "Green", "Book", "Happy", "Guitar", "Winter", "Elephant", "Math", "Marathon", "Struggle", "Fork", "Exploration", "Fax", "Noodles", "Sound", "Blame", "Chair", "Headphones", "Hostile", "Brain", "Lotion", "Serene", "Beautiful"];
    const options = [["Cat", "Tree", "Ball", "Cloud"], ["Orange", "Ball", "Pole", "Bear"], ["Yellow", "Tree", "Bat", "Pile"], ["Writing", "Friend", "Kite", "Park"], ["Joyful", "Sad", "Light", "Content"], ["Violin", "Piano", "Dog", "Socks"], ["Autumn", "Ski", "Sports", "Ferrari"], ["Giraffe", "Zoo", "Truck", "Hair"], ["Physics", "Floor", "Vase", "Classroom"], ["Track", "Wall", "Football", "Library"], ["Difficulty", "Easy", "Journey", "Complex"], ["Knife", "Juice", "Microwave", "Plate"], ["Travel", "Music", "Fun", "Paris"], ["Copy", "Design","Software", "Blueprint"], ["Pasta", "Chopsticks", "Bowl", "Cookie"], ["Smell", "Dissonant", "Echo", "Hum"], ["Accuse", "Criticize", "Hate", "Condone"], ["Couch", "Counter", "Cabinet", "Bed"], ["Charger", "Tire", "Music", "Ear"], ["Aggressive", "Weapon", "Boxing", "Uncomfortable"], ["Heart", "Blood", "Human", "Think"], ["Toothpaste", "Smell", "Smooth", "Bathroom"], ["Calm", "Flowers", "Garden", "Ocean"], ["Gorgeous", "Flowers", "Nice", "Ocean"]];

    const [keyword, setKeyword] = useState("");
    const [optionList, setOptionList] = useState([]);

    const [listOfAnswers, setListOfAnswers] = useState([]);
    const [langTime, setLangTime] = useState([]);
    const [score, setScore] = useState(0);

    const [curTime, setCurTime] = useState(Date.now());

    let docName = userID;
    if(prolificID !== null) {
        docName = prolificID;
    } else if(userID === null && prolificID === null) {
        docName = "noID";
    }
    
    useEffect(() => {
        setCurTime(Date.now());
        generateQ();

        const timer = setInterval(() => {
            setTimeLeft(oldTime => {
                if (oldTime <= 1) {
                    clearInterval(timer);
                    setEnd(true);
                }
                return oldTime - 1;
            });
        }, 1000);

        if(iter >= 24 || timeLeft <= 0) {
            langScore(score);
            langData(
                {
                    langWordList: listOfAnswers,
                    langSpeed: langTime
                }
            );
        }

        console.log(listOfAnswers);
        console.log(score);

        return () => clearInterval(timer);
    }, [onTimeEnd, iter]);

    const generateQ = () => {
        setKeyword(keywords[iter]);

        let temp = options[iter];
        temp = temp.sort(() => Math.random() - 0.5);

        setOptionList(temp);
    }
    
    const clicked = (buttonNum) => {
        const wordClicked = optionList[buttonNum];
        listOfAnswers.push(wordClicked);

        let temp = Date.now() - curTime;
        langTime.push(temp);

        if(wordClicked === options[iter][0]) {
            setScore(score + 1);
        }
        
        setIter(iter + 1);
    }
    
    return (
        <div>
        <div className='fullGameMargin'>
            <h1 className="timer">{timeLeft} sec</h1>
            <div style={{textAlign:'center', height: '2vh'}}>
                <h3 style={{fontFamily:'Poppins-Regular', marginBottom: 0}}>{iter + 1}/24</h3>
            </div>
            <div style={{margin: '10px', fontFamily: 'Poppins-SemiBold', alignItems:'center', justifyContent: 'center', textAlign: 'center', display:'flex', fontSize: '26px'}}>
                Match this word with one of the options
            </div>
            <div style={{color: '#FF9417', marginTop: '35px', margin: '10px', fontFamily: 'Poppins-SemiBold', alignItems:'center', justifyContent: 'center', display:'flex', fontSize: '30px'}}>
                    {keyword}
                </div>
            <div className="button-container">
                
                <button style={{border: button1style}} className="langButton" onClick={() => clicked(0)}>
                    {optionList[0]}
                </button>
                <button style={{border: button2style}} className="langButton" onClick={() => clicked(1)}>
                    {optionList[1]}
                </button>
                <button style={{border: button3style}} className="langButton" onClick={() => clicked(2)}>
                    {optionList[2]}
                </button>
                <button style={{border: button4style}} className="langButton" onClick={() => clicked(3)}>
                    {optionList[3]}
                </button>
            </div>
        </div>

        </div>
    );
};

export default Language;
