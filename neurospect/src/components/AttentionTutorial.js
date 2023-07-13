import React, { useState, useEffect } from 'react';
import './stylesheet.css';
import {TouchableHighlight, Text} from 'react-native';

const AttentionTutorial = ({ answer, onTimeEnd }) => {

	const [textColor, setTextColor] = useState('#F6F4FA');
	const [text, setText] = useState('Correct!');
	const [opacityVal, setOpacityVal] = useState(0);
	const [tutorialMode, setTutorialMode] = useState(true);
	const [iter, setIter] = useState(1);
	const [shapeIndex, setShapeIndex] = useState([0, 0]);

	const [shapeHighlight, setShapeHighlight] = useState('content-highlight');
	const [shapeNotesHighlight, setShapeNotesHighlight] = useState('tutorialDis');
	const [next, setNext] = useState('tutorialDis');
	const [noHighlight, setNoHighlight] = useState('button-unhighlight');
	const [yesHighlight, setYesHighlight] = useState('button-unhighlight');
	const [noHighlightText, setNoHighlightText] = useState('tutorialDis');
	const [yesHighlightText, setYesHighlightText] = useState('tutorialDis');
	const [buttonZIndex, setButtonZIndex] = useState(1002);

	const [cover, setCover] = useState('');

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

	const onClickScreen = () => {
		if (iter < 4) {
			setIter(iter + 1);
		}
	};

	useEffect(() => {
		if(iter === 1) {
			setTimeout(function() {
				setCover('tutorialCover');
				setShapeHighlight('content-highlight');
				setShapeNotesHighlight('tutorialImgs');
				setNext('tutorialImgs');
			}, 500);
		} else if(iter === 2) {
			setCover('tutorialCover');
			setShapeHighlight('content-unhighlight');
			setShapeNotesHighlight('tutorialDis');

			setNoHighlight('button-highlight');
			setYesHighlight('button-unhighlight');
			setNoHighlightText('noHighlightText');
		} else if(iter === 3) {
			setCover('tutorialCover');
			setShapeHighlight('content-unhighlight');
			setShapeNotesHighlight('tutorialDis');

			setNoHighlight('button-unhighlight');
			setYesHighlight('button-highlight');
			setNoHighlightText('tutorialDis');
			setYesHighlightText('yesHighlightText');
		} else {
			setCover('tutorialDis');
			setShapeHighlight('content');
			setShapeNotesHighlight('tutorialDis');
			setNoHighlight('');
			setYesHighlight('');
			setNoHighlightText('tutorialDis');
			setYesHighlightText('tutorialDis');
			setButtonZIndex(1002);
		}
	});

	

	const onClickDiff = () => {
		if(answer === "Color") {
			if(iter === 4) {
				setText("Wrong!")
				setTextColor("#CD3843");
			} if (iter === 5) {
				setText('Correct!');
				setTextColor("#2E8970");
				setTimeout(function() {
					setTextColor('#F6F4FA');
					setShapeIndex([1, 2]);
					setIter(iter + 1);
				}, 1000);
			} if (iter === 6) {
				setText('Correct!');
				setTextColor("#2E8970");
				setTimeout(function(){
					setTextColor('#F6F4FA');
					setIter(iter + 1);
					setTutorialMode(false);
					setOpacityVal(100);
				}, 1000);
			}
		} else if(answer === "Shape") {
			if(iter === 4) {
				setText("Wrong!")
				setTextColor("#CD3843");
			} if (iter === 5) {
				setText("Wrong!")
				setTextColor("#CD3843");
			} if (iter === 6) {
				setText('Correct!');
				setTextColor("#2E8970");
				setTimeout(function(){
					setTextColor('#F6F4FA');
					setIter(iter + 1);
					setTutorialMode(false);
					setOpacityVal(100);
				}, 1000);
			}
		}
		
	}

	const onClickSame = () => {
		if(answer === "Color") {
			if(iter === 4) {
				setText('Correct!');
				setTextColor("#2E8970");
				setTimeout(function(){
					setTextColor('#F6F4FA');
					setShapeIndex([0, 1]);
					setIter(iter + 1);
				}, 1000);
			} if (iter === 5) {
				setText("Wrong!")
				setTextColor("#CD3843");
			} if (iter === 6) {
				setText("Wrong!")
				setTextColor("#CD3843");
			}
		} else if(answer === "Shape") {
			if(iter === 4) {
				setText('Correct!');
				setTextColor("#2E8970");
				setTimeout(function(){
					setTextColor('#F6F4FA');
					setShapeIndex([0, 1]);
					setIter(iter + 1);
				}, 1000);
			} if (iter === 5) {
				setText('Correct!');
				setTextColor("#2E8970");
				setTimeout(function(){
					setTextColor('#F6F4FA');
					setShapeIndex([1, 2]);
					setIter(iter + 1);
				}, 1000);
			} if (iter === 6) {
				setText("Wrong!")
				setTextColor("#CD3843");
			}
		}
		
	}

	const reset = () => {
		setOpacityVal(0);
		setTextColor('#F6F4FA');
		setTutorialMode(true);
		setIter(1);
		setShapeIndex([0, 0]);
	}

	const nextScene = () => {
		if(tutorialMode === false) {
			onTimeEnd();
		}
	}

	const moveForward = () => {
		if(iter < 4) {
			setIter(4);
			console.log("test");
		}
	}

	return (
		<div onClick={iter < 4 ? onClickScreen : null}>
			<div style={{opacity: 100 - opacityVal, position:'absolute', width:'100%'}}>
				<div className="header"><span className='tutorialHeader'>Tutorial</span></div>
				<div className="content">
						<div className={next}>
							<div style={{marginTop:'45%', marginLeft:'19%'}}>
								<img src='/TutorialIcons/MoveForward.png'/>
							</div>
						</div>
						<div className={shapeHighlight}>
							<div className="shape">
								{shapes[shapeIndex[0]]}
							</div>
							<div className="shape">
								{shapes[shapeIndex[1]]}
							</div>
						</div>
						<div className={shapeNotesHighlight}>
							<div style={{marginTop:'110%', marginLeft:'70%'}}>
								<img src='/TutorialIcons/Arrow1.png'/>
							</div>
							<div style={{marginLeft:'18%'}}>
								<img src='/TutorialIcons/CheckColors.png'/>
							</div>
						</div>
				</div>

				<div className='response'>
					<div style = {{color: textColor}}className='correct'>{text}</div>
					<div className={noHighlightText}>
						<div style={{fontFamily:'Poppins-Regular', backgroundColor:'white', borderRadius:'30px', marginTop:'15%'}}>
							<Text style={{margin:'20px'}}>Tap 'No' if the {answer.toLowerCase()}s are different</Text>
						</div>
						<div style={{marginRight:'90%', marginTop:'5%'}}>
							<img src='/TutorialIcons/Arrow3.png'/>
						</div>
					</div>
					<div className={yesHighlightText}>
						<div style={{fontFamily:'Poppins-Regular', backgroundColor:'white', borderRadius:'30px', marginTop:'15%'}}>
							<Text style={{margin:'20px'}}>Tap 'Yes' if the {answer.toLowerCase()}s are the same</Text>
						</div>
						<div style={{marginLeft:'60%', marginTop:'5%'}}>
							<img src='/TutorialIcons/Arrow2.png'/>
						</div>
					</div>
				</div>

				<div style={{zIndex:1002}} className="footer">
					<button className={`${noHighlight} attentionButton`} onClick={onClickDiff}><img src="/NoButton.png"/></button>
					<button className={`${yesHighlight} attentionButton`} onClick={onClickSame}><img src="/YesButton.png"/></button>
				</div>
			</div>

			<div className={cover}>

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
			<Text> </Text>
		</div>
	);
};

export default AttentionTutorial;
