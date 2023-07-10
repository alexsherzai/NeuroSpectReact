import React, { useState, useEffect } from 'react';
import './stylesheet.css';

const Attention = ({ answer, shapes, onTimeEnd }) => {
	const [counter, setCounter] = useState(0);
	const [displaySvgs, setDisplaySvgs] = useState([null, null]);
	const [svgIndeces, setSvgIndeces] = useState([null, null]);
	const [iter, setIter] = useState(0);
	const [correct, setCorrect] = useState(0);
	const [textColor, setTextColor] = useState('#F6F4FA');
	const [text, setText] = useState('Correct!');
	const [buttonClicked, setButtonClicked] = useState(false);

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
		let index2 = Math.floor(Math.random() * shapes.length);

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
			setTextColor("#F6F4FA");
			setCounter((iter) => {
				if (iter >= 30) {
					clearInterval(interval);
					onTimeEnd();
					return iter;
				} else {
					setDisplaySvgs(getRandomSvgs());

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
			setButtonClicked(true);
			
			if(answer === "Color") {
				if(val1 === val2) {
					setText('Correct!');
					setTextColor("#2E8970");
					setCorrect(correct + 1);
				} else {
					setText("Wrong!")
					setTextColor("#CD3843");
				}
			} else if(answer === "Shape") {
				if(val3 === val4) {
					setText('Correct!');
					setTextColor("#2E8970");
					setCorrect(correct + 1);
				} else {
					setText("Wrong!")
					setTextColor("#CD3843");
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
			setButtonClicked(true);
			if(answer === "Color") {

				if(val1 === val2) {
					setText("Wrong!")
					setTextColor("#CD3843");
				} else {
					setText('Correct!');
					setTextColor("#2E8970");
					setCorrect(correct + 1);
				}
			} else if(answer === "Shape") {
				if(val3 === val4) {
					setText("Wrong!")
					setTextColor("#CD3843");
				} else {
					setText('Correct!');
					setTextColor("#2E8970");
					setCorrect(correct + 1);
				}
			}
		}
	}

	return (
		<div>
			<div className="header">Same {answer}?</div>
            <div className="content">
                <div className="shape">{displaySvgs[0]}</div>
                <div className="shape">{displaySvgs[1]}</div>
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

export default Attention;
