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

	const [noClicked, setNoClicked] = useState(false);
	const [yesClicked, setYesClicked] = useState(false);

	const [correct, setCorrect] = useState(false);

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
		if(!correct) {
			setNoClicked(true);
			setYesClicked(false);
			if(answer === "Color") {
				if(iter === 4) {
					setText("Wrong!")
					setTextColor("#CD3843");
				} if (iter === 5) {
					setText('Correct!');
					setTextColor("#2E8970");
					setCorrect(true);
					setTimeout(function() {
						setTextColor('#F6F4FA');
						setShapeIndex([1, 2]);
						setIter(iter + 1);
						setCorrect(false);
					}, 1000);
				} if (iter === 6) {
					setText('Correct!');
					setTextColor("#2E8970");
					setCorrect(true);
					setTimeout(function(){
						setTextColor('#F6F4FA');
						setIter(iter + 1);
						setTutorialMode(false);
						setOpacityVal(100);
						setCorrect(false);
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
					setCorrect(true);
					setTimeout(function(){
						setTextColor('#F6F4FA');
						setIter(iter + 1);
						setTutorialMode(false);
						setOpacityVal(100);
						setCorrect(false);
					}, 1000);
				}
			}
		}
		
	}

	const onClickSame = () => {
		if(!correct) {
			setYesClicked(true);
			setNoClicked(false);
			if(answer === "Color") {
				if(iter === 4) {
					setText('Correct!');
					setTextColor("#2E8970");
					setCorrect(true);
					setTimeout(function(){
						setTextColor('#F6F4FA');
						setShapeIndex([0, 1]);
						setIter(iter + 1);
						setYesClicked(false);
						setCorrect(false);
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
					setCorrect(true);
					setTimeout(function(){
						setTextColor('#F6F4FA');
						setShapeIndex([0, 1]);
						setIter(iter + 1);
						setCorrect(false);
					}, 1000);
				} if (iter === 5) {
					setText('Correct!');
					setTextColor("#2E8970");
					setCorrect(true);
					setTimeout(function(){
						setTextColor('#F6F4FA');
						setShapeIndex([1, 2]);
						setIter(iter + 1);
						setCorrect(false);
					}, 1000);
				} if (iter === 6) {
					setText("Wrong!")
					setTextColor("#CD3843");
				}
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

	const onClickIter = () => {
		setIter(iter + 1);
	}

	return (

		<div>
		{iter === 1 &&

			<div onClick={onClickIter}>

			<div style={{position: 'absolute', top: '15%', left: 0, right: 0, marginLeft: 'auto', marginRight: 'auto', display: 'flex', textAlign: 'center', justifyContent: 'center', alignItems: 'center', zIndex: 1004, color: 'white', fontSize: '20px', fontFamily: 'Poppins-Regular', fontWeight: '600'}}>
						Tap on the screen to move forward
			</div>


			<div style={{position:'absolute', width:'100%'}}>
				<div className="header">Same {answer}?</div>
				

				<div style={{height:'50vh', zIndex:1000}} className='content'>
					
						<div className="shape">{shapes[shapeIndex[0]]}</div>
						<div className="shape">{shapes[shapeIndex[1]]}</div>
				</div>

				<div className='response'>
					<div style = {{color: textColor}}className='correct'>{text}</div>
				</div>


				<div className="footer">
					<button className='attentionButton' onClick={onClickDiff}>No</button>
					<button className='attentionButton' onClick={onClickSame}>Yes</button>
				</div>
			</div>

			<div className="tutorialCover">
				<div style={{height:"12vh"}}>
				</div>
				
				<div style={{backgroundColor:'white', zIndex:1000}} className="content-highlight">
					
				</div>

				<div className="tut-intro-fade" style={{position: "absolute", zIndex:1100, marginLeft: '60%', marginTop: '1%'}}>
					<img src="/TutorialIcons/Arrow1.png"/>
				</div>
				<div className="tut-intro-fade" style={{zIndex:1004, position:"absolute", fontFamily:"Poppins-Regular", border:"solid 2px #FF9417", backgroundColor:"white", borderRadius:"6px", marginLeft: '20%', marginTop: '12%'}}>
					<Text style={{margin: "10px"}}>Check if the <strong>{answer.toLowerCase()}s</strong> are <strong>different</strong>.</Text>
				</div>
			</div>

			</div>

			
		}

		{iter === 2 &&

			<div onClick={onClickIter}>

			<div style={{position: 'absolute', top: '15%', left: 0, right: 0, marginLeft: 'auto', marginRight: 'auto', display: 'flex', textAlign: 'center', justifyContent: 'center', alignItems: 'center', zIndex: 1004, color: 'white', fontSize: '20px', fontFamily: 'Poppins-Regular', fontWeight: '600'}}>
						Tap on the screen to move forward
			</div>


			<div style={{position:'absolute', width:'100%'}}>
				<div className="header">Same {answer}?</div>
				<div className="content">
					<div className="shape">{shapes[shapeIndex[0]]}</div>
					<div className="shape">{shapes[shapeIndex[1]]}</div>
				</div>
				<div className='response'>
					<div style = {{color: textColor}}className='correct'>{text}</div>
				</div>

				<div className="footer">
					<button className='button-highlight attentionButton' onClick={onClickDiff}>No</button>
					<button className='attentionButton' onClick={onClickSame}>Yes</button>
				</div>

				
			</div>

			<div className="tutorialCoverNoFade">
				<div style={{height:"65vh"}}></div>

				<div style={{zIndex:1004, position:"absolute", fontFamily:"Poppins-Regular", border:"solid 2px #FF9417", backgroundColor:"white", borderRadius:"6px", marginLeft: '20%', marginBottom:'20%'}}>
					<Text style={{margin: "10px"}}>Click <strong>'no'</strong> if the {answer.toLowerCase()}s are <strong>different</strong>.</Text>
				</div>

				<div style={{position: "absolute", zIndex:1100, marginLeft: '30%', marginTop:'10%'}}>
					<img src="/TutorialIcons/Arrow3.png"/>
				</div>
				

				
			</div>

			</div>

			
		}

		{iter === 3 &&

			<div onClick={onClickIter}>

			<div style={{position: 'absolute', top: '15%', left: 0, right: 0, marginLeft: 'auto', marginRight: 'auto', display: 'flex', textAlign: 'center', justifyContent: 'center', alignItems: 'center', zIndex: 1004, color: 'white', fontSize: '20px', fontFamily: 'Poppins-Regular', fontWeight: '600'}}>
						Tap on the screen to move forward
			</div>


			<div style={{position:'absolute', width:'100%'}}>
				<div style={{fontSize: '20px'}} className="header">Same {answer}?</div>
				<div className="content">
					<div className="shape">{shapes[shapeIndex[0]]}</div>
					<div className="shape">{shapes[shapeIndex[1]]}</div>
				</div>
				<div className='response'>
					<div style = {{color: textColor}}className='correct'>{text}</div>
				</div>

				<div className="footer">
					<button className='attentionButton' onClick={onClickDiff}>No</button>
					<button className='button-highlight attentionButton' onClick={onClickSame}>Yes</button>
				</div>

				
			</div>

			<div className="tutorialCoverNoFade">
				<div style={{height:"65vh"}}></div>

				<div style={{zIndex:1004, position:"absolute", fontFamily:"Poppins-Regular", border:"solid 2px #FF9417", backgroundColor:"white", borderRadius:"6px", marginLeft: '20%', marginBottom:'20%'}}>
					<Text style={{margin: "20px"}}>Click <strong>'yes'</strong> if the {answer.toLowerCase()}s are the <strong>same</strong>.</Text>
				</div>

				<div style={{position: "absolute", zIndex:1100, marginLeft: '65%', marginTop:'10%'}}>
					<img src="/TutorialIcons/Arrow2.png"/>
				</div>
				

				
			</div>

			</div>

			
		}

		{iter === 4  &&
		
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
				<button className={`attentionButton${noClicked === true ? 'Clicked' : ''}`} onMouseDown={onClickDiff} onMouseUp={() => {setTimeout(function(){
						setNoClicked(false);
					}, 500);}}>No</button>
                <button className={`attentionButton${yesClicked === true ? 'Clicked' : ''}`} onMouseDown={onClickSame} onMouseUp={() => {setTimeout(function(){
						setYesClicked(false);
					}, 500);}}>Yes</button>
            </div>
		</div>
		
		}

		{iter === 5  &&
		
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
					<circle cx="50" cy="50" r="50" strokeWidth="0" fill="blue" />
				</svg>
				</div>
            </div>
			<div className='response'>
				<div style = {{color: textColor}}className='correct'>{text}</div>
			</div>

			

            <div className="footer">
				<button className={`attentionButton${noClicked === true ? 'Clicked' : ''}`} onMouseDown={onClickDiff} onMouseUp={() => {setTimeout(function(){
						setNoClicked(false);
					}, 500);}}>No</button>
                <button className={`attentionButton${yesClicked === true ? 'Clicked' : ''}`} onMouseDown={onClickSame} onMouseUp={() => {setTimeout(function(){
						setYesClicked(false);
					}, 500);}}>Yes</button>
            </div>
		</div>
		
		}

		{iter === 6  &&
		
		<div>
			<div className="header">Same {answer}?</div>
            <div className="content">
                <div className="shape">
				<svg width="100" height="100">
					<circle cx="50" cy="50" r="50" strokeWidth="0" fill="blue" />
				</svg>
				</div>
                <div className="shape">
				<svg width="100" height="100">
					<rect width="100" height="100" strokeWidth="0" fill="orange" />
				</svg>
				</div>
            </div>
			<div className='response'>
				<div style = {{color: textColor}}className='correct'>{text}</div>
			</div>

			

            <div className="footer">
				<button className={`attentionButton${noClicked === true ? 'Clicked' : ''}`} onMouseDown={onClickDiff} onMouseUp={() => {setTimeout(function(){
						setNoClicked(false);
					}, 500);}}>No</button>
                <button className={`attentionButton${yesClicked === true ? 'Clicked' : ''}`} onMouseDown={onClickSame} onMouseUp={() => {setTimeout(function(){
						setYesClicked(false);
					}, 500);}}>Yes</button>
            </div>
		</div>
		
		}

		{iter === 7 &&

				<div style={{width:'100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.9)', position: 'absolute'}}>

					<div className='fullGameMargin' style={{marginTop:"35vh", textAlign: "center", zIndex:"99", position:"absolute", display:"flex", alignItems: "center", justifyContent:"center"}}>
						<div>
							<div style={{fontFamily: "Poppins-Regular", fontSize: "30px", fontWeight: '600', marginBottom: '10%', color: 'white'}}>
								Tutorial Over!
							</div>
							<div className="buttonCont">
								<button className="buttonSecondary" onClick={() => reset()}>How To Play</button>
							</div>
							<div className="buttonCont">
								<button className="buttonNext" onClick={onTimeEnd}>Start Playing</button>
							</div>
						</div>
					</div>
				</div>
		}



		</div>
	);
};

export default AttentionTutorial;
