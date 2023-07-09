import React, { useState, useEffect } from 'react';
import './stylesheet.css';

const AttentionTutorial = ({ answer, onTimeEnd }) => {

	const [textColor, setTextColor] = useState('#F6F4FA');
	const [text, setText] = useState('Correct!');

	const onClickDiff = () => {
		setText("Wrong!")
		setTextColor("#CD3843");
	}

	const onClickSame = () => {
		setText('Correct!');
		setTextColor("#2E8970");
		setTimeout(() => {
			onTimeEnd();
		}, 1000);
	}

	return (
		<div>
			<div className="header">Same {answer}?</div>
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
	);
};

export default AttentionTutorial;
