import React, { useState } from 'react';
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
import './components/stylesheet.css';

import { setDoc, doc } from 'firebase/firestore';
import { storage } from './config/firebase';

const App = () => {
    const [stage, setStage] = useState('intro');
    const words = ["Elephant", "Banana", "Australia", "Orange", "Tennis", "Guitar", "Truck", "History", "Lily", "Valley"];
    const words2 = ["Dolphin", "Apple", "Canada", "Purple", "Football", "Piano", "Airplane", "Math", "Rose", "River"]
    const words3 = ["Gorilla", "Mango", "Japan", "Green", "Hockey", "Flute", "Boat", "Biology", "Tulip", "Forest"]
    const [selectedLevel, setSelectedLevel] = useState(0);
    const [acs, setAcs] = useState(0);
    const [AttShS, setAttShS] = useState(0);
    const [psc, setPsc] = useState(0);
    const [pss, setPss] = useState(0);
    const [visSc, setVisSc] = useState(0);
    const [recSc, setRecSc] = useState(0);

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

    console.log("Visuospatial", visSc);
    console.log("Recall", recSc);

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
    const userID = queryParams.get("userID");

    let docName = userID;
    if(prolificID !== null) {
        docName = prolificID;
    } else if(userID === null && prolificID === null) {
        docName = "noID";
    }
     
    const AddData = async() => {
        setStage('int1');

        console.log(acs + ", " + AttShS + ", " + psc + ", " + pss + ", " + visSc + ", " + recSc);

        const reviewRef = doc(storage, "neurospect", docName);

        try {
            await setDoc(reviewRef, {
                testID: prolificID,
                userID: userID,
            })
        } catch(err) {
            console.log(err);
        }
    }


    return (
        <div>
            {stage === 'intro' && <Intro onTimeEnd={AddData} />}
            {stage === 'int1' && <LevelDisplay level={0} onTimeEnd={() => nextStage('enc-instr')} />}
            {stage === 'enc-instr' && <EncodingInstructions onTimeEnd={() => nextStage('encoding')} />}
            {stage === 'encoding' && <Encoding words={words} onTimeEnd={() => nextStage('int2')} />}
            {stage === 'int2' && <LevelDisplay level={1} onTimeEnd={() => nextStage('att-instr')} />}
            {stage === 'att-instr' && <ShapesInstructions tutorial="yes" tutButton={() => nextStage('att-tutorial')} onTimeEnd={() => nextStage('attentionShapes')} />}
            {stage === 'att-tutorial' && <AttentionTutorial answer="Shape" onTimeEnd={() => nextStage('attentionShapes')} />}
            {stage === 'attentionShapes' && <Attention storeAtt={storeAttentionShapes} storeSpeed={storeSpeedShapes} answer="Shape" shapes={attentionShapes} onTimeEnd={() => nextStage('att-instr2')}/>}
            {stage === 'att-instr2' && <ShapesInstructions tutorial="yes" tutButton={() => nextStage('att-tutorial2')} onTimeEnd={() => nextStage('attentionColors')} />}
            {stage === 'att-tutorial2' && <AttentionTutorial answer="Color" onTimeEnd={() => nextStage('attentionColors')} />}
            {stage === 'attentionColors' && <Attention storeAtt={storeAttentionColors} storeSpeed={storeSpeedColors} answer="Shape" shapes={attentionShapes} onTimeEnd={() => nextStage('int3')}/>}
            {stage === 'int3' && <LevelDisplay level={2} onTimeEnd={() => nextStage('vis-instr')} />}
            {stage === 'vis-instr' && <VisuoInstructions tutButton={() => nextStage('vis-tutorial')} onTimeEnd={() => nextStage('visuo')} />}
            {stage === 'vis-tutorial' && <VisuoTutorial level={3} onTimeEnd={() => nextStage('visuo')} />}
            {stage === 'visuo' && <Visuospatial storeVis={storeVisuospatial} onTimeEnd={() => nextStage('int4')}/>}
            {stage === 'int4' && <LevelDisplay level={3} onTimeEnd={() => nextStage('rec-instr')} />}
            {stage === 'rec-instr' && <RecallInstructions onTimeEnd={() => nextStage('recall')} />}
            {stage === 'recall' && <Recall storeRec={storeRecall} words={words} onTimeEnd={() => nextStage('end')}/>}
            {stage === 'end' && 
                <DisplayScore id={prolificID} attScoreColors={acs} attScoreShapes={AttShS} speedColors={psc} speedShapes={pss} visuo={visSc} recall={recSc}/>
            }
        </div>
    );
};

export default App;
