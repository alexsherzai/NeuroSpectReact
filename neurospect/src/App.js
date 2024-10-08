import React, { useEffect, useState } from 'react';
import axios from "axios";

import Intro from './components/Intro';
import Encoding from './components/Encoding';
import EncodingInstructions from './components/EncodingInstructions';
import Recall from './components/Recall';
import AttentionInstructions from './components/AttentionInstructions';
import Attention from './components/Attention';
import VisuoInstructions from './components/VisuoInstructions';
import Visuospatial from './components/Visuospatial';
import RecallInstructions from './components/RecallInstructions';
import LevelDisplay from './components/LevelDisplay';
import AttentionTutorial from './components/AttentionTutorial';
import ShapesInstructions from './components/ShapesInstructions';
import VisuoTutorial from './components/VisuoTutorial';
import Countdown from './components/Countdown';
import DisplayScoreOld from './components/DisplayScoreOld';
import Final from './components/Final';
import CardPair from './components/CardPair';
import Grid from './components/Grid';
import ExecutiveInstructions from './components/ExecutiveInstructions';
import ExecTutorial from './components/ExecTutorial';
import GridInstructions from './components/GridInstructions';
import GridTutorial from './components/GridTutorial';
import Language from './components/Language';
import LangInstructinos from './components/LangInstructions';
import Temp from './components/Temp';
import VisualEncoding from './components/VisualEncoding';
import VisualMemory from './components/VisualMemory';
import VisEncInstructions from './components/VisEncInstructions';
import VisMemInstructions from './components/VisMemInstructions';

import './components/stylesheet.css';

import { collection, setDoc, getDocs, doc } from 'firebase/firestore';
import { storage } from './config/firebase';

const App = () => {
    const [stage, setStage] = useState('vis-enc-instr-full');
    const words = {1: ["Elephant", "Banana", "Australia", "Orange", "Tennis", "Guitar", "Truck", "History", "Lily", "Valley"],
                    2: ["Dolphin", "Apple", "Canada", "Purple", "Football", "Piano", "Airplane", "Math", "Rose", "River"],
                    3: ["Gorilla", "Mango", "Japan", "Green", "Hockey", "Flute", "Boat", "Biology", "Tulip", "Forest"]}

    const [gameVersion, setGameVersion] = useState(0);

    const [acs, setAcs] = useState(0);
    const [AttShS, setAttShS] = useState(0);
    const [psc, setPsc] = useState(0);
    const [pss, setPss] = useState(0);
    const [visSc, setVisSc] = useState(0);
    const [recSc, setRecSc] = useState(0);

    const [execSc, setExecSc] = useState(0);
    const [gridSc, setGridSc] = useState(0);
    const [gridSpeed, setGridSpeed] = useState(0);

    const [langSc, setLangSc] = useState(0);

    const [attArrayCol, setAttArrayCol] = useState({});
    const [attArraySh, setAttArraySh] = useState({});
    const [visArray, setVisArray] = useState({});
    const [recArray, setRecArray] = useState({});

    const [gridData, setGridData] = useState({});
    const [execData, setExecData] = useState({});

    const [langData, setLangData] = useState({});

    const [first, setFirst] = useState(false);

    const [prevAtt, setPrevAtt] = useState({});

    //Passing Scores to App.js

    const storeAttentionColors = (score) => {
        setAcs(score);
    };
    const storeAttentionShapes = (score) => {
        setAttShS(score);
    };
    const storeSpeedColors = (score) => {
        setPsc(score);
    };
    const storeSpeedShapes = (score) => {
        setPss(score);
    };
    const storeVisuospatial = (score) => {
        setVisSc(score);
    };
    const storeRecall = (score) => {
        setRecSc(score);
    };

    const storeExec = (score) => {
        setExecSc(score);
    }
    const storeGrid = (score) => {
        setGridSc(score);
    }
    const storeGridSpeed = (score) => {
        setGridSpeed(score);
    }

    const storeLang = (score) => {
        setGridSc(score);
    }

    //Passing Data to App.js

    const storeAttDataColors = (score) => {
        setAttArrayCol(score);
    };
    const storeAttDataShapes = (score) => {
        setAttArraySh(score);
    };
    const storeVisData = (score) => {
        setVisArray(score);
    };
    const storeRecData = (score) => {
        setRecArray(score);
    };

    const storeGridData = (score) => {
        setGridData(score);
    };
    const storeExecData = (score) => {
        setExecData(score);
    };
    
    const storeLangData = (score) => {
        setLangData(score);
    }

    const attentionShapes = [
		<svg width="100" height="100">
			<circle cx="50" cy="50" r="50" strokeWidth="0" fill="red" />
		</svg>,
		<svg width="100" height="100">
			<circle cx="50" cy="50" r="50" strokeWidth="0" fill="blue" />
		</svg>,
		<svg width="100" height="100">
			<circle cx="50" cy="50" r="50" strokeWidth="0" fill="orange" />
		</svg>,
		<svg width="100" height="100">
			<circle cx="50" cy="50" r="50" strokeWidth="0" fill="green" />
		</svg>,
        <svg width="100" height="100">
			<circle cx="50" cy="50" r="50" strokeWidth="0" fill="purple" />
		</svg>,
		<svg width="100" height="100">
			<rect width="100" height="100" strokeWidth="0" fill="red" />
		</svg>,
		<svg width="100" height="100">
			<rect width="100" height="100" strokeWidth="0" fill="blue" />
		</svg>,
		<svg width="100" height="100">
			<rect width="100" height="100" strokeWidth="0" fill="orange" />
		</svg>,
		<svg width="100" height="100">
			<rect width="100" height="100" strokeWidth="0" fill="green" />
		</svg>,
        <svg width="100" height="100">
			<rect width="100" height="100" strokeWidth="0" fill="purple" />
		</svg>,
		<svg width="100" height="100">
			<polygon points="50 0, 100 100, 0 100" strokeWidth="0" fill="red" />
		</svg>,
		<svg width="100" height="100">
			<polygon points="50 0, 100 100, 0 100" strokeWidth="0" fill="blue" />
		</svg>,
		<svg width="100" height="100">
			<polygon points="50 0, 100 100, 0 100" strokeWidth="0" fill="orange" />
		</svg>,
		<svg width="100" height="100">
			<polygon points="50 0, 100 100, 0 100" strokeWidth="0" fill="green" />
		</svg>,
        <svg width="100" height="100">
			<polygon points="50 0, 100 100, 0 100" strokeWidth="0" fill="purple" />
		</svg>,
		<svg width="100" height="100">
			<polygon points="0 50,50 100,100 50,50 0" strokeWidth="0" fill="red" />
		</svg>,
		<svg width="100" height="100">
			<polygon points="0 50,50 100,100 50,50 0" strokeWidth="0" fill="blue" />
		</svg>,
		<svg width="100" height="100">
			<polygon points="0 50,50 100,100 50,50 0" strokeWidth="0" fill="orange" />
		</svg>,
		<svg width="100" height="100">
			<polygon points="0 50,50 100,100 50,50 0" strokeWidth="0" fill="green" />
		</svg>,
        <svg width="100" height="100">
			<polygon points="0 50,50 100,100 50,50 0" strokeWidth="0" fill="purple" />
		</svg>,
        <svg width="100" height="100">
			<polygon points="50,0 100,38.5 81.6,100 18.4,100 0,38.5" strokeWidth="0" fill="red" />
		</svg>,
		<svg width="100" height="100">
			<polygon points="50,0 100,38.5 81.6,100 18.4,100 0,38.5" strokeWidth="0" fill="blue" />
		</svg>,
		<svg width="100" height="100">
			<polygon points="50,0 100,38.5 81.6,100 18.4,100 0,38.5" strokeWidth="0" fill="orange" />
		</svg>,
		<svg width="100" height="100">
			<polygon points="50,0 100,38.5 81.6,100 18.4,100 0,38.5" strokeWidth="0" fill="green" />
		</svg>,
        <svg width="100" height="100">
			<polygon points="50,0 100,38.5 81.6,100 18.4,100 0,38.5" strokeWidth="0" fill="purple" />
		</svg>,
	];

    const nextStage = (stageName) => {
        setStage(stageName);
    }
    
    const queryParams = new URLSearchParams(window.location.search)
    const prolificID = queryParams.get("PROLIFIC_PID");
    let token = queryParams.get("userID");
    const userID = null;
    
    useEffect(() => {

    }, [stage, gameVersion]);

    let docName = userID;
    if(prolificID !== null) {
        docName = prolificID;
    } else if(userID === null && prolificID === null) {
        docName = "noID";
    }
     
    const AddData = async() => {
        let currentDate = Date.now();
        let nextAvailableDate = currentDate + 2628000000;

        //console.log(prevAtt);

        //const reviewRef = doc(storage, "neurospect", docName);

        
        // let data = {
        //     testID: prolificID,
        //     userID: userID,
        //     lastUpdated: currentDate,
        //     nextAvailableDate: nextAvailableDate,
        //     gameVersion: gameVersion
        // }

        let data = {}

        if(token === null) {
            token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzIxNjk1MTMxLCJpYXQiOjE3MTkxMDMxMzEsImp0aSI6IjE2M2Q1MmU1MDJiNzRhNTg5MDEwYmIzMTg3MTBjNzQwIiwidXNlcl9pZCI6ImI0N2EyY2M4LThlYTktNGIyZi05OGYwLTJiNWQ4ZTRkNTljMyJ9.Uo8JICl1ODNBhBw5JJIyopkmSNF3HUcepwklDVMlejk";
        }

        let attentionData = Object.assign({game_version: gameVersion}, attArrayCol, attArraySh);
        let visuoData = Object.assign({game_version: gameVersion}, visArray)
        let recData = Object.assign({game_version: gameVersion}, recArray)
        let execD = Object.assign({game_version: gameVersion}, execData)
        let gridD = Object.assign({game_version: gameVersion}, gridData)

        switch(gameVersion) {
            case 1:
                //Object.assign(data, attArrayCol, attArraySh, visArray, recArray);
                const attStore = axios({
                    url: "https://api.neuroplanapp.com/api/neurospect/attention/",
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${token}`,
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    paramsSerializer: {
                        indexes: null 
                    },
                    data: attentionData
                })
                    // Handle the response from backend here
                    .then((res) => {
                        console.log(res)
                    })
        
                    // Catch errors if any
                    .catch((err) => {});

                const visStore = axios({
                        url: "https://api.neuroplanapp.com/api/neurospect/visuospatial/",
                        method: "POST",
                        headers: {
                            Authorization: `Bearer ${token}`,
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                        },
                        paramsSerializer: {
                            indexes: null 
                        },
                        data: visuoData
                    })
                        // Handle the response from backend here
                        .then((res) => {
                            console.log(res)
                        })
            
                        // Catch errors if any
                        .catch((err) => {});

                const recStore = axios({
                        url: "https://api.neuroplanapp.com/api/neurospect/recall/",
                        method: "POST",
                        headers: {
                            Authorization: `Bearer ${token}`,
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                        },
                        paramsSerializer: {
                            indexes: null 
                        },
                        data: recData
                    })
                        // Handle the response from backend here
                        .then((res) => {
                            console.log(res)
                        })
            
                        // Catch errors if any
                        .catch((err) => {});

                
                break;
            case 2:
                //Object.assign(data, execData, gridData, recArray);

                const execStore = axios({
                    url: "https://api.neuroplanapp.com/api/neurospect/executivefn/",
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${token}`,
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    paramsSerializer: {
                        indexes: null 
                    },
                    data: execD
                })
                    // Handle the response from backend here
                    .then((res) => {
                        console.log(res)
                    })
        
                    // Catch errors if any
                    .catch((err) => {});

                const gridStore = axios({
                        url: "https://api.neuroplanapp.com/api/neurospect/processing/",
                        method: "POST",
                        headers: {
                            Authorization: `Bearer ${token}`,
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                        },
                        paramsSerializer: {
                            indexes: null 
                        },
                        data: gridD
                    })
                        // Handle the response from backend here
                        .then((res) => {
                            console.log(res)
                        })
            
                        // Catch errors if any
                        .catch((err) => {});

                const recStore2 = axios({
                        url: "https://api.neuroplanapp.com/api/neurospect/recall/",
                        method: "POST",
                        headers: {
                            Authorization: `Bearer ${token}`,
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                        },
                        paramsSerializer: {
                            indexes: null 
                        },
                        data: recData
                    })
                        // Handle the response from backend here
                        .then((res) => {
                            
                        })
            
                        // Catch errors if any
                        .catch((err) => {});

                break;
            case 3:
                Object.assign(data, langData, recArray);
                break;
            case 4:
                Object.assign(data, attArrayCol, attArraySh, execData, gridData, langData, visArray, recArray);
                break;
            default:
                Object.assign(data, attArrayCol, attArraySh, visArray, recArray);
                break;
        }

        // Object.assign(data, prevAtt);

        // console.log(data);

        //Firebase

        // try {
        //     await setDoc(reviewRef, data)
        // } catch(err) {
        //     console.log(err);
        // }
    }

    const shapes = [
        <svg width="50" height="50" viewBox = "0 0 105 105" xmlns="http://www.w3.org/2000/svg">
            <polygon points="50,15 61,35 85,35 66,50 75,75 50,55 25,75 34,50 15,35 39,35" stroke="none" fill="none" stroke-width="2"/>
        </svg>,



        <svg width="100" height="100" viewBox = "0 0 105 105" xmlns="http://www.w3.org/2000/svg">
            <polygon points="50,15 61,35 85,35 66,50 75,75 50,55 25,75 34,50 15,35 39,35" stroke="black" fill="none" stroke-width="2"/>
        </svg>,
        <svg width="100" height="100" viewBox = "0 0 105 105" xmlns="http://www.w3.org/2000/svg">
            <path d="M10,50 Q25,10 40,50 T70,50 T100,50" stroke="black" fill="none" stroke-width="2"/>
        </svg>,
        <svg width="100" height="100" viewBox = "0 0 105 105" xmlns="http://www.w3.org/2000/svg">
            <path d="M50,50 m-25,0 a25,25 0 1,1 50,0 a25,25 0 1,1 -50,0" stroke="black" fill="none" stroke-width="2"/>
        </svg>,
        <svg width="100" height="100" viewBox = "0 0 105 105" xmlns="http://www.w3.org/2000/svg">
            <circle cx="30" cy="50" r="20" stroke="black" fill="none" stroke-width="2"/>
            <circle cx="70" cy="50" r="20" stroke="black" fill="none" stroke-width="2"/>
        </svg>,
        <svg width="100" height="100" viewBox = "0 0 105 105" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="40" stroke="black" fill="none" stroke-width="2"/>
            <polygon points="50,20 70,70 30,70" stroke="black" fill="none" stroke-width="2"/>
        </svg>,
        <svg width="100" height="100" viewBox = "0 0 105 105" xmlns="http://www.w3.org/2000/svg">
            <polyline points="10,90 30,10 50,90 70,10 90,90" stroke="black" fill="none" stroke-width="2"/>
        </svg>,
        <svg width="100" height="100" viewBox = "0 0 105 105" xmlns="http://www.w3.org/2000/svg">
            <path d="M10,30 Q25,10 40,30 T70,30 T100,30 M10,70 Q25,50 40,70 T70,70 T100,70" stroke="black" fill="none" stroke-width="2"/>
        </svg>,
        <svg width="100" height="100" viewBox = "0 0 105 105" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="20" width="40" height="40" stroke="black" fill="none" stroke-width="2"/>
            <rect x="40" y="40" width="40" height="40" stroke="black" fill="none" stroke-width="2"/>
        </svg>,
        <svg width="100" height="100" viewBox = "0 0 105 105" xmlns="http://www.w3.org/2000/svg">
            <path d="M20,20 Q50,50 80,20 M20,80 Q50,50 80,80" stroke="black" fill="none" stroke-width="2"/>
        </svg>,
        <svg width="100" height="100" viewBox = "-5 -5 110 110" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="10" stroke="black" fill="none" stroke-width="2"/>
            <circle cx="50" cy="50" r="30" stroke="black" fill="none" stroke-width="2"/>
            <circle cx="50" cy="50" r="50" stroke="black" fill="none" stroke-width="2"/>
        </svg>,
        <svg width="100" height="100" viewBox = "-15 -15 130 130" xmlns="http://www.w3.org/2000/svg">
            <path d="M50,10 Q65,30 80,10 Q95,30 110,10 Q95,70 80,50 Q65,70 50,50 Q35,70 20,50 Q5,70 -10,50 Q5,30 20,10 Q35,30 50,10" stroke="black" fill="none" stroke-width="2"/>
        </svg>,
        <svg width="100" height="100" viewBox = "10 0 100 65" xmlns="http://www.w3.org/2000/svg">
            <polygon points="30,20 40,10 60,10 70,20 60,30 40,30" stroke="black" fill="none" stroke-width="2"/>
            <polygon points="50,40 60,30 80,30 90,40 80,50 60,50" stroke="black" fill="none" stroke-width="2"/>
        </svg>,
        <svg width="100" height="100" viewBox = "0 0 105 105" xmlns="http://www.w3.org/2000/svg">
            <path d="M10,10 L90,10 L90,90 L10,90 L10,30 L70,30 L70,70 L30,70 L30,50 L50,50" stroke="black" fill="none" stroke-width="2"/>
        </svg>,
        <svg width="100" height="100" viewBox = "0 0 105 105" xmlns="http://www.w3.org/2000/svg">
            <line x1="50" y1="10" x2="50" y2="90" stroke="black" stroke-width="2"/>
            <line x1="10" y1="50" x2="90" y2="50" stroke="black" stroke-width="2"/>
            <line x1="20" y1="20" x2="80" y2="80" stroke="black" stroke-width="2"/>
            <line x1="80" y1="20" x2="20" y2="80" stroke="black" stroke-width="2"/>
        </svg>,
        <svg width="100" height="100" viewBox="0 0 105 105" xmlns="http://www.w3.org/2000/svg">
            <polygon points="50,10 90,40 70,90 30,90 10,40" stroke="black" fill="none" stroke-width="2"/>
        </svg>,
        <svg width="100" height="100" viewBox="0 0 105 105" xmlns="http://www.w3.org/2000/svg">
            <path d="M20,20 C40,10 60,10 80,20 C70,40 60,80 50,100 C40,80 30,40 20,20" stroke="black" fill="none" stroke-width="2"/>
        </svg>,
        <svg width="100" height="100" viewBox="0 0 105 105" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="20" width="60" height="60" stroke="black" fill="none" stroke-width="2" transform="rotate(45, 50, 50)"/>
        </svg>,
        <svg width="100" height="100" viewBox="0 0 105 105" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="40" stroke="black" fill="none" stroke-width="2"/>
            <circle cx="50" cy="50" r="20" stroke="black" fill="none" stroke-width="2"/>
        </svg>,
        <svg width="100" height="100" viewBox="0 0 105 105" xmlns="http://www.w3.org/2000/svg">
            <polygon points="50,5 95,50 50,95 5,50" stroke="black" fill="none" stroke-width="2"/>
        </svg>,
        <svg width="100" height="100" viewBox="0 0 105 105" xmlns="http://www.w3.org/2000/svg">
            <path d="M50,10 Q75,25 50,40 Q25,25 50,10 M50,40 Q75,55 50,70 Q25,55 50,40 M50,70 Q75,85 50,100 Q25,85 50,70" stroke="black" fill="none" stroke-width="2"/>
        </svg>,
        <svg width="100" height="100" viewBox="0 0 105 105" xmlns="http://www.w3.org/2000/svg">
            <polygon points="50,20 70,50 50,80 30,50" stroke="black" fill="none" stroke-width="2"/>
            <circle cx="50" cy="50" r="10" stroke="black" fill="none" stroke-width="2"/>
        </svg>,
        <svg width="100" height="100" viewBox="0 0 105 105" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="10" width="85" height="85" stroke="black" fill="none" stroke-width="2" rx="15"/>
        </svg>,
        <svg width="100" height="100" viewBox="0 0 105 105" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="50" cy="50" rx="40" ry="20" stroke="black" fill="none" stroke-width="2"/>
        </svg>,
        <svg width="100" height="100" viewBox="0 0 105 105" xmlns="http://www.w3.org/2000/svg">
            <path d="M50,5 L85,40 L50,75 L15,40 Z" stroke="black" fill="none" stroke-width="2"/>
            <circle cx="50" cy="40" r="5" fill="black"/>
        </svg>,
        <svg width="100" height="100" viewBox="0 0 105 105" xmlns="http://www.w3.org/2000/svg">
            <path d="M50,10 C65,20 85,50 50,90 C15,50 35,20 50,10 Z" stroke="black" fill="none" stroke-width="2"/>
        </svg>,
        <svg width="100" height="100" viewBox="0 0 105 105" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="10" width="85" height="85" stroke="black" fill="none" stroke-width="2" transform="rotate(45, 50, 50)"/>
        </svg>,
        <svg width="100" height="100" viewBox="0 0 105 105" xmlns="http://www.w3.org/2000/svg">
            <path d="M50,5 L70,40 L95,40 L75,60 L85,95 L50,75 L15,95 L25,60 L5,40 L30,40 Z" stroke="black" fill="none" stroke-width="2"/>
        </svg>,
        <svg width="100" height="100" viewBox="0 0 105 105" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="40" stroke="black" fill="none" stroke-width="2"/>
            <path d="M50,10 L50,90 M10,50 L90,50" stroke="black" fill="none" stroke-width="2"/>
        </svg>,
        <svg width="100" height="100" viewBox="0 0 105 105" xmlns="http://www.w3.org/2000/svg">
            <path d="M50,5 Q70,25 90,50 Q70,75 50,95 Q30,75 10,50 Q30,25 50,5" stroke="black" fill="none" stroke-width="2"/>
        </svg>,
        <svg width="100" height="100" viewBox="0 0 105 105" xmlns="http://www.w3.org/2000/svg">
            <path d="M10,50 L30,20 L50,50 L70,20 L90,50 L70,80 L50,50 L30,80 Z" stroke="black" fill="none" stroke-width="2"/>
        </svg>,
        <svg width="100" height="100" viewBox="0 0 105 105" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="40" stroke="black" fill="none" stroke-width="2"/>
            <polygon points="50,10 70,40 50,70 30,40" stroke="black" fill="none" stroke-width="2"/>
        </svg>
    ];


    return (
        <div>
            {stage === 'prescene' && <Temp userID = {userID} storePrevAtt={setPrevAtt} gameVersion = {gameVersion} setGameV = {setGameVersion} intro={() => nextStage('intro')} intro2={() => nextStage('intro-2')} intro3={() => nextStage('intro-3')} introFull={() => nextStage('intro-full')}/>}

            {stage === 'intro' && <Intro onTimeEnd={() => nextStage('int1')} />}
            {stage === 'intro-2' && <Intro onTimeEnd={() => nextStage('int1-2')} />}
            {stage === 'intro-3' && <Intro onTimeEnd={() => nextStage('int1-3')} />}
            {stage === 'intro-full' && <Intro onTimeEnd={() => nextStage('enc-instr-full')} />}

            {/* Version 1 */}

            {stage === 'int1' && <LevelDisplay version={gameVersion} level={0} onTimeEnd={() => nextStage('enc-instr')} />}
            {stage === 'enc-instr' && <EncodingInstructions onTimeEnd={() => nextStage('encoding')} />}
            {stage === 'encoding' && <Encoding words={words[gameVersion]} onTimeEnd={() => nextStage('int2')} />}

            {stage === "int2" && <LevelDisplay version={gameVersion} level={1} onTimeEnd={() => nextStage('att-instr')} />}
            {stage === 'att-instr' && <ShapesInstructions tutorial="yes" tutButton={() => nextStage('att-tutorial')} onTimeEnd={() => nextStage('attentionShapes')} />}
            {stage === 'att-tutorial' && <AttentionTutorial answer="Shape" onTimeEnd={() => nextStage('attentionShapes')} />}
            {stage === 'attentionShapes' && <Attention attData={storeAttDataShapes} storeAtt={storeAttentionShapes} storeSpeed={storeSpeedShapes} answer="Shape" shapes={attentionShapes} onTimeEnd={() => nextStage('att-instr2')}/>}
            {stage === 'att-instr2' && <AttentionInstructions tutorial="yes" tutButton={() => nextStage('att-tutorial2')} onTimeEnd={() => nextStage('attentionColors')} />}
            {stage === 'att-tutorial2' && <AttentionTutorial answer="Color" onTimeEnd={() => nextStage('attentionColors')} />}
            {stage === 'attentionColors' && <Attention attData={storeAttDataColors} storeAtt={storeAttentionColors} storeSpeed={storeSpeedColors} answer="Color" shapes={attentionShapes} onTimeEnd={() => nextStage('int3')}/>}

            {stage === "int3" && <LevelDisplay version={gameVersion} level={2} onTimeEnd={() => nextStage('vis-instr')} />}
            {stage === 'vis-tutorial' && <VisuoTutorial level={3} onTimeEnd={() => nextStage('visuo')} />}
            {stage === 'vis-instr' && <VisuoInstructions tutButton={() => nextStage('vis-tutorial')} onTimeEnd={() => nextStage('visuo')} />}
            {stage === 'visuo' && <Visuospatial visData={storeVisData} storeVis={storeVisuospatial} onTimeEnd={() => nextStage('int4')}/>}

            {stage === 'int4' && <LevelDisplay version={gameVersion} level={3} onTimeEnd={() => nextStage('rec-instr')} />}
            {stage === 'rec-instr' && <RecallInstructions onTimeEnd={() => nextStage('recall')} />}
            {stage === 'recall' && <Recall recData={storeRecData} storeRec={storeRecall} words={words[gameVersion]} onTimeEnd={() => nextStage('end')}/>}

            {stage === 'end' && 
                <Final prolific={prolificID} version={1} AddData={AddData}/>}

            {/* Version 2 */}

            {stage === 'int1-2' && <LevelDisplay version={gameVersion} level={0} onTimeEnd={() => nextStage('enc-instr-2')} />}
            {stage === 'enc-instr-2' && <EncodingInstructions onTimeEnd={() => nextStage('encoding-2')} />}
            {stage === 'encoding-2' && <Encoding words={words[gameVersion]} onTimeEnd={() => nextStage('int2-2')} />}

            {stage === "int2-2" && <LevelDisplay version={gameVersion} level={1} onTimeEnd={() => nextStage('exec-instr')} />}
            {stage === 'exec-instr' && <ExecutiveInstructions onTimeEnd={() => nextStage('executive')} tutButton={() => nextStage('exec-tut')}/>}
            {stage === "exec-tut" && <ExecTutorial onTimeEnd={() => nextStage('executive')} />}
            {stage === 'executive' && <CardPair execData={storeExecData} onTimeEnd={() => nextStage('int3-2')} storeExec={storeExec}/>}

            {stage === "int3-2" && <LevelDisplay version={gameVersion} level={2} onTimeEnd={() => nextStage('grid-instr')} />}
            {stage === 'grid-instr' && <GridInstructions onTimeEnd={() => nextStage('grid')} tutButton={() => nextStage('grid-tut')}/>}
            {stage === "grid-tut" && <GridTutorial onTimeEnd={() => nextStage('grid')} />}
            {stage === 'grid' && <Grid onTimeEnd={() => nextStage('int4-2')} gridData={storeGridData} accuracy={storeGrid} speed={storeGridSpeed}/>}

            {stage === 'int4-2' && <LevelDisplay version={gameVersion} level={3} onTimeEnd={() => nextStage('rec-instr-2')} />}
            {stage === 'rec-instr-2' && <RecallInstructions onTimeEnd={() => nextStage('recall-2')} />}
            {stage === 'recall-2' && <Recall recData={storeRecData} storeRec={storeRecall} words={words[gameVersion]} onTimeEnd={() => nextStage('end-2')}/>}

            {stage === 'end-2' &&
                <Final prolific={prolificID} version={2} AddData={AddData}/>}

            {/* Version 3 */}

            {stage === 'int1-3' && <LevelDisplay version={gameVersion} level={0} onTimeEnd={() => nextStage('enc-instr-3')} />}
            {stage === 'enc-instr-3' && <EncodingInstructions onTimeEnd={() => nextStage('encoding-3')} />}
            {stage === 'encoding-3' && <Encoding words={words[gameVersion]} onTimeEnd={() => nextStage('int2-3')} />}

            {stage === "int2-3" && <LevelDisplay version={gameVersion} level={1} onTimeEnd={() => nextStage('lang-instr')} />}
            {stage === 'lang-instr' && <LangInstructinos onTimeEnd={() => nextStage('language')} />}
            {stage === "language" && <Language langScore={storeLang} langData={storeLangData} onTimeEnd={() => nextStage('int3-3')} />}

            {stage === 'int3-3' && <LevelDisplay version={gameVersion} level={3} onTimeEnd={() => nextStage('rec-instr-3')} />}
            {stage === 'rec-instr-3' && <RecallInstructions onTimeEnd={() => nextStage('recall-3')} />}
            {stage === 'recall-3' && <Recall recData={storeRecData} storeRec={storeRecall} words={words[gameVersion]} onTimeEnd={() => nextStage('end-3')}/>}

            {stage === 'end-3' &&
                <Final prolific={prolificID} version={3} AddData={AddData}/>}


            {/*Full Version*/}
            {/* {stage === 'int1-full' && <LevelDisplay version={gameVersion} level={0} onTimeEnd={() => nextStage('enc-instr-full')} />}
            {stage === 'enc-instr-full' && <EncodingInstructions onTimeEnd={() => nextStage('encoding-full')} />}
            {stage === 'encoding-full' && <Encoding words={words[gameVersion]} onTimeEnd={() => nextStage('int2-full')} />}
            {stage === "int2-full" && <LevelDisplay version={gameVersion} level={1} onTimeEnd={() => nextStage('att-instr-full')} />}
            {stage === 'att-instr-full' && <ShapesInstructions tutorial="yes" tutButton={() => nextStage('att-tutorial-full')} onTimeEnd={() => nextStage('attentionShapes-full')} />}
            {stage === 'att-tutorial-full' && <AttentionTutorial answer="Shape" onTimeEnd={() => nextStage('attentionShapes-full')} />}
            {stage === 'attentionShapes-full' && <Attention attData={storeAttDataShapes} storeAtt={storeAttentionShapes} storeSpeed={storeSpeedShapes} answer="Shape" shapes={attentionShapes} onTimeEnd={() => nextStage('att-instr2-full')}/>}
            {stage === 'att-instr2-full' && <AttentionInstructions tutorial="yes" tutButton={() => nextStage('att-tutorial2-full')} onTimeEnd={() => nextStage('attentionColors-full')} />}
            {stage === 'att-tutorial2-full' && <AttentionTutorial answer="Color" onTimeEnd={() => nextStage('attentionColors-full')} />}
            {stage === 'attentionColors-full' && <Attention attData={storeAttDataColors} storeAtt={storeAttentionColors} storeSpeed={storeSpeedColors} answer="Color" shapes={attentionShapes} onTimeEnd={() => nextStage('int3-full')}/>}
            {stage === "int3-full" && <LevelDisplay version={gameVersion} level={2} onTimeEnd={() => nextStage('vis-instr-full')} />}
            {stage === 'vis-tutorial-full' && <VisuoTutorial level={3} onTimeEnd={() => nextStage('visuo-full')} />}
            {stage === 'vis-instr-full' && <VisuoInstructions tutButton={() => nextStage('vis-tutorial-full')} onTimeEnd={() => nextStage('visuo-full')} />}
            {stage === 'visuo-full' && <Visuospatial visData={storeVisData} storeVis={storeVisuospatial} onTimeEnd={() => nextStage('int4-full')}/>}
            {stage === 'int4-full' && <LevelDisplay version={gameVersion} level={3} onTimeEnd={() => nextStage('exec-instr-full')} />}
            {stage === 'exec-instr-full' && <ExecutiveInstructions onTimeEnd={() => nextStage('executive-full')} />}
            {stage === 'executive-full' && <CardPair execData={storeExecData} onTimeEnd={() => nextStage('int5-full')} storeExec={storeExec}/>}
            {stage === "int5-full" && <LevelDisplay version={gameVersion} level={4} onTimeEnd={() => nextStage('grid-instr-full')} />}
            {stage === 'grid-instr-full' && <GridInstructions onTimeEnd={() => nextStage('grid-full')}/>}
            {stage === 'grid-full' && <Grid onTimeEnd={() => nextStage('int6-full')} gridData={storeGridData} accuracy={storeGrid} speed={storeGridSpeed}/>}
            {stage === "int6-full" && <LevelDisplay version={gameVersion} level={5} onTimeEnd={() => nextStage('lang-instr-full')} />}
            {stage === 'lang-instr-full' && <LangInstructinos onTimeEnd={() => nextStage('language-full')} />}
            {stage === "language-full" && <Language onTimeEnd={() => nextStage('int7-full')} />}
            {stage === "int7-full" && <LevelDisplay version={gameVersion} level={6} onTimeEnd={() => nextStage('rec-instr-full')} />}
            {stage === 'rec-instr-full' && <RecallInstructions onTimeEnd={() => nextStage('recall-full')} />}
            {stage === 'recall-full' && <Recall recData={storeRecData} storeRec={storeRecall} words={words[gameVersion]} onTimeEnd={() => nextStage('end-full')}/>}
            {stage === 'end-full' &&
                <h1>Scores Not Available</h1>} */}

            {/*Full Version*/}
            {stage === 'enc-instr-full' && <EncodingInstructions onTimeEnd={() => nextStage('encoding-full')} />}
            {stage === 'encoding-full' && <Encoding words={words[2]} onTimeEnd={() => nextStage('att-instr-full')} />}
            {stage === 'att-instr-full' && <ShapesInstructions tutorial="yes" tutButton={() => nextStage('att-tutorial-full')} onTimeEnd={() => nextStage('attentionShapes-full')} />}
            {stage === 'att-tutorial-full' && <AttentionTutorial answer="Shape" onTimeEnd={() => nextStage('attentionShapes-full')} />}
            {stage === 'attentionShapes-full' && <Attention attData={storeAttDataShapes} storeAtt={storeAttentionShapes} storeSpeed={storeSpeedShapes} answer="Shape" shapes={attentionShapes} onTimeEnd={() => nextStage('att-instr2-full')}/>}
            {stage === 'att-instr2-full' && <AttentionInstructions tutorial="yes" tutButton={() => nextStage('att-tutorial2-full')} onTimeEnd={() => nextStage('attentionColors-full')} />}
            {stage === 'att-tutorial2-full' && <AttentionTutorial answer="Color" onTimeEnd={() => nextStage('attentionColors-full')} />}
            {stage === 'attentionColors-full' && <Attention attData={storeAttDataColors} storeAtt={storeAttentionColors} storeSpeed={storeSpeedColors} answer="Color" shapes={attentionShapes} onTimeEnd={() => nextStage('vis-instr-full')}/>}
            {stage === 'vis-tutorial-full' && <VisuoTutorial level={3} onTimeEnd={() => nextStage('visuo-full')} />}
            {stage === 'vis-instr-full' && <VisuoInstructions tutButton={() => nextStage('vis-tutorial-full')} onTimeEnd={() => nextStage('visuo-full')} />}
            {stage === 'visuo-full' && <Visuospatial visData={storeVisData} storeVis={storeVisuospatial} onTimeEnd={() => nextStage('rec-instr-full')}/>}
            {stage === 'rec-instr-full' && <RecallInstructions onTimeEnd={() => nextStage('recall-full')} />}
            {stage === 'recall-full' && <Recall recData={storeRecData} storeRec={storeRecall} words={words[2]} onTimeEnd={() => nextStage('vis-enc-instr-full')}/>}
            {stage === 'vis-enc-instr-full' && <VisEncInstructions onTimeEnd={() => nextStage('vis-enc-full')} />}
            {stage === 'vis-enc-full' && <VisualEncoding shapes={shapes} onTimeEnd={() => nextStage('exec-instr-full')} />}
            {stage === 'exec-instr-full' && <ExecutiveInstructions onTimeEnd={() => nextStage('executive-full')} />}
            {stage === 'executive-full' && <CardPair execData={storeExecData} onTimeEnd={() => nextStage('grid-instr-full')} storeExec={storeExec}/>}
            {stage === 'grid-instr-full' && <GridInstructions onTimeEnd={() => nextStage('grid-full')}/>}
            {stage === 'grid-full' && <Grid onTimeEnd={() => nextStage('vis-mem-instr-full')} />}
            {stage === 'vis-mem-instr-full' && <VisEncInstructions onTimeEnd={() => nextStage('vis-mem-full')} />}
            {stage === 'vis-mem-full' && <VisualMemory shapes={shapes}  onTimeEnd={() => nextStage('end-full')}  />}
            {stage === 'end-full' &&
                <h1>Scores Not Available</h1>}

        </div>
    );
};

export default App;
