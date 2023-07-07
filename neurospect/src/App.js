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
import './components/stylesheet.css';

const App = () => {
    const [stage, setStage] = useState('intro');
    const words = ["Elephant", "Banana", "Australia", "Orange", "Tennis", "Guitar", "Truck", "History"];
    const [selectedLevel, setSelectedLevel] = useState(0);

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

    const handleIntro = () => {
        setStage('int1');
    }

    const handleInt1 = () => {
        setSelectedLevel(1);
        setStage('enc-instr');
    };
    const handleEncInstr = () => {
        setStage('encoding');
    }
    const handleEnc = () => {
        setStage('int2');
    };
    const handleInt2 = () => {
        setSelectedLevel(2);
        setStage('att-instr');
    };
    const handleAttInstr = () => {
        setStage('attentionColors');
    }
    const handleCols = () => {
        setStage('attentionShapes');
    };
    const handleShapes = () => {
        setStage('int3');
    };
    const handleInt3 = () => {
        setSelectedLevel(3);
        setStage('vis-instr');
    };
    const handleVisInstr = () => {
        setStage('visuo');
    }
    const handleVis = () => {
        setStage('int4');
    };
    const handleInt4 = () => {
        setSelectedLevel(4);
        setStage('rec-instr');
    };
    const handleRecInstr = () => {
        setStage('recall');
    }
    const handleRecall = () => {
        setStage('end');
    };

    return (
        <div>
            {stage === 'intro' && <Intro onTimeEnd={handleIntro} />}
            {stage === 'int1' && <LevelDisplay level={selectedLevel} onTimeEnd={handleInt1} />}
            {stage === 'enc-instr' && <EncodingInstructions onTimeEnd={handleEncInstr} />}
            {stage === 'encoding' && <Encoding words={words} onTimeEnd={handleEnc} />}
            {stage === 'int2' && <LevelDisplay level={selectedLevel} onTimeEnd={handleInt2} />}
            {stage === 'att-instr' && <AttentionInstructions onTimeEnd={handleAttInstr} />}
            {stage === 'attentionColors' && <Attention answer="Color" shapes={attentionShapes} onTimeEnd={handleCols}/>}
            {stage === 'attentionShapes' && <Attention answer="Shape" shapes={attentionShapes} onTimeEnd={handleShapes}/>}
            {stage === 'int3' && <LevelDisplay level={selectedLevel} onTimeEnd={handleInt3} />}
            {stage === 'vis-instr' && <VisuoInstructions onTimeEnd={handleVisInstr} />}
            {stage === 'visuo' && <Visuospatial onTimeEnd={handleVis}/>}
            {stage === 'int4' && <LevelDisplay level={selectedLevel} onTimeEnd={handleInt4} />}
            {stage === 'rec-instr' && <RecallInstructions onTimeEnd={handleRecInstr} />}
            {stage === 'recall' && <Recall words={words} onTimeEnd={handleRecall}/>}
            {stage === 'end' && <h1>Game Over!</h1>}
        </div>
    );
};

export default App;
