import React, { useState, useEffect } from 'react';
import './stylesheet.css';
import { updateDoc, doc } from 'firebase/firestore';
import { storage } from '../config/firebase';

const Attention = ({ attData, storeAtt, storeSpeed, answer, shapes, onTimeEnd }) => {
	const [counter, setCounter] = useState(0);
	const [displaySvgs, setDisplaySvgs] = useState([null, null]);
	const [svgIndeces, setSvgIndeces] = useState([null, null]);
	const [iter, setIter] = useState(0);
	const [correct, setCorrect] = useState([]);
	const [textColor, setTextColor] = useState('#F6F4FA');
	const [text, setText] = useState('Correct!');
	const [buttonClicked, setButtonClicked] = useState(false);
	const [preButtonClick, setPreButtonClick] = useState(0);
	const [buttonClickTimes, setButtonClickTimes] = useState([]);
	const [shapeList, setShapeList] = useState([]);

	const [noClicked, setNoClicked] = useState(false);
	const [yesClicked, setYesClicked] = useState(false);

	const queryParams = new URLSearchParams(window.location.search)
    const prolificID = queryParams.get("PROLIFIC_PID");
    const userID = queryParams.get("userID");

    let docName = userID;
    if(prolificID !== null) {
        docName = prolificID;
    } else if(userID === null && prolificID === null) {
        docName = "noID";
    }

	let svgDets = [];

	let timeOfAppearance = 1000;

	const getColor = (i) => {
		let color = "";

		switch(i % 5) {
			case 0:
				color = "red";
				break;
			case 1:
				color = "blue";
				break;
			case 2:
				color = "orange";
				break;
			case 3:
				color = "green";
				break;
			case 4:
				color = "purple";
		}

		return color;
	}

	const getShape = (i) => {
		let shape = "";
		switch(Math.floor(i / 5)) {
			case 0:
				shape = "circle";
				break;
			case 1:
				shape = "square";
				break;
			case 2:
				shape = "triangle";
				break;
			case 3:
				shape = "diamond";
				break;
			case 4:
				shape = "pentagon";
		}

		return shape;
	}

	const getRandomSvgs = () => {
		let randomSvgs = [];
		let svgDet = [];

		let index1 = Math.floor(Math.random() * shapes.length);

		let randomVal = Math.round(Math.random() * 1000);
		let newArr = [];

		if(randomVal > 500) {
			for(let i = 0; i < 25; i++) {
				if(answer === "Color") {
					if(i % 5 === index1 % 5) {
						newArr.push(i);
					}
				} else {
					if(Math.floor(i / 5) === Math.floor(index1 / 5)) {
						newArr.push(i);
					}
				}
			}
		} else {
			for(let i = 0; i < 25; i++) {
				if(answer === "Color") {
					if(i % 5 !== index1 % 5) {
						newArr.push(i);
					}
				} else {
					if(Math.floor(i / 5) !== Math.floor(index1 / 5)) {
						newArr.push(i);
					}
				}
			}
		}

		let index2 = newArr[Math.floor(Math.random() * newArr.length)];

		console.log(index1 + ", " + index2 + ", " + randomVal);

		shapeList.push(getColor(index1) + "," + getShape(index1) + "," + getColor(index2) + "," + getShape(index2));

		randomSvgs.push(shapes[index1]);
		randomSvgs.push(shapes[index2]);

		svgDet.push(index1);
		svgDet.push(index2);

		setSvgIndeces(svgDet);

		return randomSvgs;
	};
	

	useEffect(() => {
		const svgs = getRandomSvgs();

		setDisplaySvgs(svgs[0]);
		setSvgIndeces(svgs[1]);

		const interval = setInterval(() => {
			setPreButtonClick(Date.now());
			setTextColor("#F6F4FA");

			setCounter((iter) => {
				if (iter >= 30) {
					clearInterval(interval);
					AddData();
					onTimeEnd();
					return iter;
				} else {
					setDisplaySvgs(getRandomSvgs());

					buttonClickTimes.push(1501);
					correct.push(0);

					timeOfAppearance = 1000 - (107.5 * Math.floor(iter / 3));
					console.log(timeOfAppearance);
			
					setTimeout(() => {
						setDisplaySvgs([null, null]);
					}, timeOfAppearance);

					setButtonClicked(false);
										
					return iter + 1;
				}
			});
		}, 1500);
		return () => clearInterval(interval);
	}, [onTimeEnd, shapes]);

	const onClickSame = () => {

		let val1 = getColor(svgIndeces[0]);
		let val2 = getColor(svgIndeces[1]);
		let val3 = getShape(svgIndeces[0]);
		let val4 = getShape(svgIndeces[1]);

		if(!buttonClicked) {
			setYesClicked(true);
			setNoClicked(false);

			setButtonClicked(true);
			let timeToClick = 0;
			if(preButtonClick > 0) {
				timeToClick = Date.now() - preButtonClick;
			}
			buttonClickTimes.push(timeToClick);
			console.log(timeToClick);
			
			if(answer === "Color") {
				if(val1 === val2) {
					setText('Correct!');
					setTextColor("#2E8970");
					correct.push(1);
				} else {
					setText("Wrong!")
					setTextColor("#CD3843");
					correct.push(2);
				}
			} else if(answer === "Shape") {
				if(val3 === val4) {
					setText('Correct!');
					setTextColor("#2E8970");
					correct.push(1);
				} else {
					setText("Wrong!")
					setTextColor("#CD3843");
					correct.push(2);
				}
			}
		}
	}

	const onClickDiff = () => {

		let val1 = getColor(svgIndeces[0]);
		let val2 = getColor(svgIndeces[1]);
		let val3 = getShape(svgIndeces[0]);
		let val4 = getShape(svgIndeces[1]);

		if(!buttonClicked) {
			setYesClicked(false);
			setNoClicked(true);

			setButtonClicked(true);
			let timeToClick = Date.now() - preButtonClick;
			buttonClickTimes.push(timeToClick);
			console.log(buttonClickTimes);

			if(answer === "Color") {
				if(val1 === val2) {
					setText("Wrong!")
					setTextColor("#CD3843");
					correct.push(2);
				} else {
					setText('Correct!');
					setTextColor("#2E8970");
					correct.push(1);
				}
			} else if(answer === "Shape") {
				if(val3 === val4) {
					setText("Wrong!")
					setTextColor("#CD3843");
					correct.push(2);
				} else {
					setText('Correct!');
					setTextColor("#2E8970");
					correct.push(1);
				}
			}
		}
	}


	const AddData = () => {
		//0 is separater, 1 is correct, 2 is wrong
		//1500 is separater for speed

		for(let i = 0; i < correct.length - 1; i++) {
			if(buttonClickTimes[i] === 1501 && buttonClickTimes[i + 1] < 1501) {
				buttonClickTimes.splice(i, 1);
			}

			if(correct[i] === 0 && correct[i + 1] !== 0) {
				correct.splice(i, 1);
			}
		}


		let correctNum = 0;
		correct.forEach(e => {if(e === 1) {correctNum++}});

		correctNum *= (10/3);



		console.log(buttonClickTimes);
		console.log(correct);

		console.log(correctNum);

		const average = array => array.reduce((a, b) => a + b) / array.length;

		let pSpeed = Math.round(average(buttonClickTimes)) / 1000;

		console.log(shapeList);

		storeAtt(correctNum);
		storeSpeed(pSpeed);


		if(answer === "Color") {
			attData(
			{
				attentionScoreColors: correctNum,
				processingSpeedColors: pSpeed,
				attentionColorsList: correct,
				processingSpeedColorsList: buttonClickTimes,
				shapeListColors: shapeList
			}
			)
		} else if(answer === "Shape") {
			attData({
				attentionScoreShapes: correctNum,
				processingSpeedShapes: pSpeed,
				attentionShapesList: correct,
				processingSpeedShapesList: buttonClickTimes,
				shapeListShapes: shapeList
			})
		}
    };

	return (
		<div>
			<div className="header">Are these {answer.toLowerCase()}s the same?</div>
            <div className="content">
                <div className="shape">{displaySvgs[0]}</div>
                <div className="shape">{displaySvgs[1]}</div>
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
	);
};

export default Attention;
