import React, { useEffect, useState } from 'react';
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
import DisplayScore from './components/DisplayScore';
import CardPair from './components/CardPair';
import Grid from './components/Grid';
import ExecutiveInstructions from './components/ExecutiveInstructions';
import GridInstructions from './components/GridInstructions';
import Language from './components/Language';
import LangInstructinos from './components/LangInstructions';

import './components/stylesheet.css';

import { setDoc, doc } from 'firebase/firestore';
import { storage } from './config/firebase';

const App = () => {
    const [stage, setStage] = useState('intro');
    const words = {1: ["Elephant", "Banana", "Australia", "Orange", "Tennis", "Guitar", "Truck", "History", "Lily", "Valley"],
                    2: ["Dolphin", "Apple", "Canada", "Purple", "Football", "Piano", "Airplane", "Math", "Rose", "River"],
                    3: ["Gorilla", "Mango", "Japan", "Green", "Hockey", "Flute", "Boat", "Biology", "Tulip", "Forest"]}

    const [gameVersion, setGameVersion] = useState(1);

    const [acs, setAcs] = useState(0);
    const [AttShS, setAttShS] = useState(0);
    const [psc, setPsc] = useState(0);
    const [pss, setPss] = useState(0);
    const [visSc, setVisSc] = useState(0);
    const [recSc, setRecSc] = useState(0);

    const [execSc, setExecSc] = useState(0);
    const [gridSc, setGridSc] = useState(0);
    const [gridSpeed, setGridSpeed] = useState(0);

    const [attArrayCol, setAttArrayCol] = useState({});
    const [attArraySh, setAttArraySh] = useState({});
    const [visArray, setVisArray] = useState({});
    const [recArray, setRecArray] = useState({});

    const [gridData, setGridData] = useState({});
    const [execData, setExecData] = useState({});

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

    const filler = () => {
        console.log("Nothing");
    }

    const queryParams = new URLSearchParams(window.location.search)
    const prolificID = queryParams.get("PROLIFIC_PID");
    const userID = queryParams.get("userID");
    const gameV = queryParams.get("version");
    
    useEffect(() => {
        setGameVersion(gameV);

        if(gameV === null) {
            setGameVersion(1);
        }
    });

    let docName = userID;
    if(prolificID !== null) {
        docName = prolificID;
    } else if(userID === null && prolificID === null) {
        docName = "noID";
    }
     
    const AddData = async() => {
        console.log(acs + ", " + AttShS + ", " + psc + ", " + pss + ", " + visSc + ", " + recSc);

        let currentDate = new Date().toLocaleString() + "";
        currentDate = currentDate.split(",")[0];

        const reviewRef = doc(storage, "neurospect", docName);

        
        let data = {
            testID: prolificID,
            userID: userID,
            lastUpdated: currentDate,
            gameVersion: gameVersion
        }

        if(execData === null) {
            Object.assign(data, attArrayCol, attArraySh, visArray, recArray);

            console.log("Version 1");
        } else {
            Object.assign(data, execData, gridData);

            console.log(execData);
            console.log(gridData);
            console.log("Version 2");
        }

        console.log(data);

        try {
            await setDoc(reviewRef, data)
        } catch(err) {
            console.log(err);
        }
    }


    return (
        <div>
            {stage === 'intro' && <Intro onTimeEnd={() => nextStage('int1')} />}
            {stage === 'int1' && <LevelDisplay version={gameVersion} level={0} onTimeEnd={() => nextStage('enc-instr')} />}
            {stage === 'enc-instr' && <EncodingInstructions onTimeEnd={() => nextStage('encoding')} />}
            {stage === 'encoding' && <Encoding words={words[gameVersion]} onTimeEnd={() => nextStage('int2')} />}

            {gameVersion === 1 ? 
            (stage === "int2" && <LevelDisplay version={gameVersion} level={1} onTimeEnd={() => nextStage('att-instr')} />)
            :
            (gameVersion === 2 ? 
            (stage === "int2" && <LevelDisplay version={gameVersion} level={1} onTimeEnd={() => nextStage('exec-instr')} />)
            :
            (stage === "int2" && <LevelDisplay version={gameVersion} level={1} onTimeEnd={() => nextStage('lang-instr')} />))
            }

            {stage === 'att-instr' && <ShapesInstructions tutorial="yes" tutButton={() => nextStage('att-tutorial')} onTimeEnd={() => nextStage('attentionShapes')} />}
            {stage === 'exec-instr' && <ExecutiveInstructions onTimeEnd={() => nextStage('executive')} />}
            {stage === 'lang-instr' && <LangInstructinos onTimeEnd={() => nextStage('language')} />}

            {stage === 'att-tutorial' && <AttentionTutorial answer="Shape" onTimeEnd={() => nextStage('attentionShapes')} />}
            {stage === 'attentionShapes' && <Attention attData={storeAttDataShapes} storeAtt={storeAttentionShapes} storeSpeed={storeSpeedShapes} answer="Shape" shapes={attentionShapes} onTimeEnd={() => nextStage('att-instr2')}/>}
            {stage === 'att-instr2' && <AttentionInstructions tutorial="yes" tutButton={() => nextStage('att-tutorial2')} onTimeEnd={() => nextStage('attentionColors')} />}
            {stage === 'att-tutorial2' && <AttentionTutorial answer="Color" onTimeEnd={() => nextStage('attentionColors')} />}
            {stage === 'attentionColors' && <Attention attData={storeAttDataColors} storeAtt={storeAttentionColors} storeSpeed={storeSpeedColors} answer="Color" shapes={attentionShapes} onTimeEnd={() => nextStage('int3')}/>}

            {stage === 'executive' && <CardPair execData={storeExecData} onTimeEnd={() => nextStage('int3')} storeExec={storeExec}/>}

            {stage === "language" && <Language onTimeEnd={() => nextStage('int3')} />}

            {gameVersion === 1 ? 
            (stage === "int3" && <LevelDisplay version={gameVersion} level={2} onTimeEnd={() => nextStage('vis-instr')} />)
            :
            (gameVersion === 2 ?
            (stage === "int3" && <LevelDisplay version={gameVersion} level={2} onTimeEnd={() => nextStage('grid-instr')} />)
            :
            (stage === "int3" && <LevelDisplay version={gameVersion} level={2} onTimeEnd={() => nextStage('rec-instr')} />)
            )
            }

            {stage === 'vis-tutorial' && <VisuoTutorial level={3} onTimeEnd={() => nextStage('visuo')} />}
            {stage === 'vis-instr' && <VisuoInstructions tutButton={() => nextStage('vis-tutorial')} onTimeEnd={() => nextStage('visuo')} />}
            {stage === 'grid-instr' && <GridInstructions onTimeEnd={() => nextStage('grid')}/>}

            {stage === 'visuo' && <Visuospatial visData={storeVisData} storeVis={storeVisuospatial} onTimeEnd={() => nextStage('int4')}/>}
            {stage === 'grid' && <Grid onTimeEnd={() => nextStage('int4')} gridData={storeGridData} accuracy={storeGrid} speed={storeGridSpeed}/>}

            {stage === 'int4' && <LevelDisplay version={gameVersion} level={3} onTimeEnd={() => nextStage('rec-instr')} />}

            {stage === 'rec-instr' && <RecallInstructions onTimeEnd={() => nextStage('recall')} />}
            {stage === 'recall' && <Recall recData={storeRecData} storeRec={storeRecall} words={words[gameVersion]} onTimeEnd={() => nextStage('end')}/>}

            {gameVersion === 1 ?
            (stage === 'end' && 
                <DisplayScore prolific={prolificID} gameVersion={1} AddData={AddData} id={prolificID} attScoreColors={acs} attScoreShapes={AttShS} speedColors={psc} speedShapes={pss} visuo={visSc} recall={recSc}/>
            )
            :
            (stage === 'end' &&
                <DisplayScore prolific={prolificID} gameVersion={2} AddData={AddData} id={prolificID} execScore={execSc} gridScore={gridSc} gridSpeed={gridSpeed} recall={recSc}/>
            )
            }
        </div>
    );
};

export default App;
