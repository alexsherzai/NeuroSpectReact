import React, { useState, useEffect } from 'react';
import './stylesheet.css';

const AttentionTutorial = ({ answer, onTimeEnd }) => {

	const [textColor, setTextColor] = useState('#F6F4FA');
	const [text, setText] = useState('Correct!');
	const [opacityVal, setOpacityVal] = useState(0);
	const [tutorialMode, setTutorialMode] = useState(true);

	const shapes = [
		<svg width="100" height="100">
			<circle cx="50" cy="50" r="50" strokeWidth="0" fill="red" />
		</svg>,
		<svg width="100" height="100">
			<circle cx="50" cy="50" r="50" strokeWidth="0" fill="blue" />
		</svg>,
		<svg width="100" height="100">
			<rect width="100" height="100" strokeWidth="0" fill="orange" />
		</svg>
	];

	const onClickDiff = () => {
		setText("Wrong!")
		setTextColor("#CD3843");
	}

	const onClickSame = () => {
		setText('Correct!');
		setTextColor("#2E8970");
		setOpacityVal(100);
		setTutorialMode(false);
	}

	const reset = () => {
		setOpacityVal(0);
		setTextColor('#F6F4FA');
		setTutorialMode(true);
	}

	const nextScene = () => {
		if(tutorialMode === false) {
			onTimeEnd();
		}
	}

	return (
		<div>
			<div style={{opacity: 100 - opacityVal, position:'absolute'}}>
				<div className="header"><span className='tutorialHeader'>Tutorial: Are these the same {answer}?</span></div>
				<div className="content">
					<div className="shape">
						<svg width="100" height="100">
							<circle cx="50" cy="50" r="50" strokeWidth="0" fill="red" />
						</svg>
					</div>
					<div className="shape">
						<svg width="100" height="100">
							<circle cx="50" cy="50" r="50" strokeWidth="0" fill="red" />
						</svg>
					</div>
				</div>

				<div className='response'>
					<div style = {{color: textColor}}className='correct'>{text}</div>
				</div>

				<div className="footer">
					<button className='attentionButton' onClick={onClickDiff}><img src="/NoButton.png"/></button>
					<button className='attentionButton' onClick={onClickSame}><img src="/YesButton.png"/></button>
				</div>
			</div>

			<div style={{marginTop:'35vh', opacity: opacityVal, textAlign: 'center', zIndex:'99', position:'absolute', display:'flex', alignItems: 'center', justifyContent:'center'}}>
				<div>
					<div style={{margin: '15px'}}>
						Great! Now you're ready to play the game! Don't forget that in the game, the shapes will disappear and appear very quickly.
					</div>
                    <button className="buttonNext" onClick={() => reset()}><img src="/TutorialAgain.png"/></button>
                    <button className="buttonNext" onClick={nextScene}><img src="/StartPlaying.png"/></button>
                </div>
			</div>
		</div>
	);
};

export default AttentionTutorial;
