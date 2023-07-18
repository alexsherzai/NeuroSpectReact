import React, { useState, useEffect } from 'react';

const Visuospatial = ( { storeVis, onTimeEnd }) => {
    const [iter, setIter] = useState(0);
    const [mainShape, setMainShape] = useState(null);
    const [optionShapes, setOptionShapes] = useState([null, null, null, null]);
    const [correct, setCorrect] = useState(0);
    const [correctAnswer, setCorrectAnswer] = useState(0);
    const [timeLeft, setTimeLeft] = useState(90);

    const buttonWrong = '2px solid #CD3843';
    const buttonCorrect = '2px solid #2E8970';
    const [button1style, setButton1Style] = useState('');
    const [button2style, setButton2Style] = useState('');
    const [button3style, setButton3Style] = useState('');
    const [button4style, setButton4Style] = useState('');
    const [clicked, setClicked] = useState(false);

    const storeData = () => {
        storeVis(correct);
    }

    const turn = (pts, dir, size) => {
        var totalString = "";

        var array = pts.split(' ');

        for(var i = 0; i < array.length; i++) {
            var coords = array[i].split(',');

            switch(dir) {
                case 0:
                    var newVal = parseInt(coords[1], 10) - size;
                    totalString += coords[0].toString() + ",";
                    totalString += newVal.toString() + " ";
                    break;
                case 1:
                    var newVal = parseInt(coords[1], 10) + size;
                    totalString += coords[0].toString() + ",";
                    totalString += newVal.toString() + " ";
                    break;
                case 2:
                    var newVal = parseInt(coords[0], 10) + size;
                    totalString += newVal.toString() + ",";
                    totalString += coords[1].toString() + " ";
                    break;
                case 3:
                    var newVal = parseInt(coords[0], 10) - size;
                    totalString += newVal.toString() + ",";
                    totalString += coords[1].toString() + " ";
                    break;
            }
        }

        totalString = totalString.substring(0, totalString.length-1);
        return totalString;
    }

    const generateShape = (dir, size, leftCornerX, leftCornerY, colors) => {
        var totalDirX = 0;
        var totalDirY = 0;

        for(var i = 0; i < 2 + Math.floor(iter / 6); i++) {
            switch(dir[i]) {
                case 0:
                    totalDirY = totalDirY - 1;
                    break;
                case 1:
                    totalDirY = totalDirY + 1;
                    break;
                case 2:
                    totalDirX = totalDirX + 1;
                    break;
                case 3:
                    totalDirX = totalDirX - 1;
                    break;
            }
        }

        leftCornerX -= (totalDirX * size / 2);
        leftCornerY -= (totalDirY * size / 2);

        let otherCornerX = (leftCornerX + size);
        let otherCornerY = (leftCornerY + size);

        let firstPoint = leftCornerX.toString() + "," + leftCornerY.toString() + " " + otherCornerX.toString() + "," + leftCornerY.toString() + " " + otherCornerX.toString() + "," + otherCornerY.toString() + " " + leftCornerX.toString() + "," + otherCornerY.toString();

        var ptsList = [];
        ptsList.push(firstPoint);

        for(var i = 0; i < 2 + Math.floor(iter / 6); i++) {
            ptsList.push(turn(ptsList[i], dir[i], size)); 
        }

        while(ptsList.length <= 4) {
            ptsList.push("");
        }
        
        return [(
            <svg width={300 * size / 50} height={300 * size / 50}>
                <polygon points={ptsList[0]} fill={colors[0]}/>
                <polygon points={ptsList[1]} fill={colors[1]}/>
                <polygon points={ptsList[2]} fill={colors[2]}/>
                <polygon points={ptsList[3]} fill={colors[3]}/>
                <polygon points={ptsList[4]} fill={colors[4]}/>
            </svg>
        ), dir];
    }

    function shuffle(array) {
        let currentIndex = array.length,  randomIndex;
        while (currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }
      
        return array;
    }

    const generateOptions = (corDir, corCol) => {

        var flippedDir = [];
        for(var i = 0; i < corDir.length; i++) {
            switch(corDir[i]) {
                case 0:
                    flippedDir.push(1);
                    break;
                case 1:
                    flippedDir.push(0);
                    break;
                case 2:
                    flippedDir.push(3);
                    break;
                case 3:
                    flippedDir.push(2);
                    break;
            }
        }

        var randomDir1 = [];
        var randomDir2 = [];
        var randomDir3 = [];
        for(var i = 0; i < 4; i++) {
            var newVal = Math.floor(Math.random() * 4);
            if(i > 0) {
                while(Math.floor(newVal / 2) === Math.floor(randomDir1[i - 1] / 2)) {
                    newVal = Math.floor(Math.random() * 4);
                } 
            }

            randomDir1.push(newVal);
        }
        for(var i = 0; i < 4; i++) {
            var newVal = Math.floor(Math.random() * 4);
            if(i > 0) {
                while(Math.floor(newVal / 2) === Math.floor(randomDir2[i - 1] / 2)) {
                    newVal = Math.floor(Math.random() * 4);
                } 
            }

            randomDir2.push(newVal);
        }
        for(var i = 0; i < 4; i++) {
            var newVal = Math.floor(Math.random() * 4);
            if(i > 0) {
                while(Math.floor(newVal / 2) === Math.floor(randomDir3[i - 1] / 2)) {
                    newVal = Math.floor(Math.random() * 4);
                } 
            }

            randomDir3.push(newVal);
        }


        const colors = ["red", "blue", "green", "orange"];
        let diffColArray = [colors[Math.floor(Math.random() * 4)], colors[Math.floor(Math.random() * 4)], colors[Math.floor(Math.random() * 4)], colors[Math.floor(Math.random() * 4)], colors[Math.floor(Math.random() * 4)]]
        let diffColArray2 = [colors[Math.floor(Math.random() * 4)], colors[Math.floor(Math.random() * 4)], colors[Math.floor(Math.random() * 4)], colors[Math.floor(Math.random() * 4)], colors[Math.floor(Math.random() * 4)]]
        let diffColArray3 = [colors[Math.floor(Math.random() * 4)], colors[Math.floor(Math.random() * 4)], colors[Math.floor(Math.random() * 4)], colors[Math.floor(Math.random() * 4)], colors[Math.floor(Math.random() * 4)]]


        const main = generateShape(flippedDir, 25, 65, 65, corCol)[0];
        const option1 = generateShape(randomDir1, 25, 65, 65, diffColArray)[0];
        const option2 = generateShape(randomDir2, 25, 65, 65, diffColArray2)[0];
        const option3 = generateShape(randomDir3, 25, 65, 65, diffColArray3)[0];

        var optionsTemp = [];

        var correctIndex = 0;
        var options = [];

        var indArray = [0, 1, 2, 3];

        indArray = shuffle(indArray);

        for(var i = 0; i < indArray.length; i++) {
            if(indArray[i] === 0) {
                options.push(main);
                correctIndex = i;
            } else if(indArray[i] === 1) {
                options.push(option1);
            } else if(indArray[i] === 2) {
                options.push(option2);
            } else if(indArray[i] === 3) {
                options.push(option3);
            }
        }

        return [options, correctIndex];
    };

    

    useEffect(() => {
        var dir = [];
        for(var i = 0; i < 4; i++) {
            var newVal = Math.floor(Math.random() * 4);
            if(i > 0) {
                while(Math.floor(newVal / 2) === Math.floor(dir[i - 1] / 2)) {
                    newVal = Math.floor(Math.random() * 4);
                } 
            }

            dir.push(newVal);
        }

        const colors = ["red", "blue", "green", "orange"];

        let colArray = [colors[Math.floor(Math.random() * 4)], colors[Math.floor(Math.random() * 4)], colors[Math.floor(Math.random() * 4)], colors[Math.floor(Math.random() * 4)], colors[Math.floor(Math.random() * 4)]]

        const [mainShapeSvg, correctDir] = generateShape(dir, 40, 100, 100, colArray);
        setMainShape(mainShapeSvg);

        const [optionShp, correctIndex] = generateOptions(correctDir, colArray);

        setOptionShapes(optionShp);
        setCorrectAnswer(correctIndex);

		if(iter >= 15) {
            storeData();
            onTimeEnd();
        }

        const timer = setInterval(() => {
            setTimeLeft(oldTime => {
                if (oldTime <= 1) {
                    clearInterval(timer);
                    onTimeEnd();
                }
                return oldTime - 1;
            });
        }, 1000);
        return () => clearInterval(timer);
	}, [iter, onTimeEnd]);



    const button1 = () => {
        if(!clicked) {
            if(correctAnswer === 0) {
                setCorrect(correct + 1);
                setButton1Style(buttonCorrect);
                setClicked(true);
            } else {
                setButton1Style(buttonWrong);
                setClicked(true);
            }
            setTimeout(function() {
                setIter(iter + 1);
                setButton1Style('');
                setClicked(false);
            }, 500);
        }
    };
    const button2 = () => {
        if(!clicked) {
            if(correctAnswer === 1) {
                setCorrect(correct + 1);
                setButton2Style(buttonCorrect);
                setClicked(true);
            } else {
                setButton2Style(buttonWrong);
                setClicked(true);
            }
            setTimeout(function() {
                setIter(iter + 1);
                setButton2Style('');
                setClicked(false);
            }, 500);
        }
    };
    const button3 = () => {
        if(!clicked) {
            if(correctAnswer === 2) {
                setCorrect(correct + 1);
                setButton3Style(buttonCorrect);
                setClicked(true);
            } else {
                setButton3Style(buttonWrong);
                setClicked(true);
            }
            setTimeout(function() {
                setIter(iter + 1);
                setButton3Style('');
                setClicked(false);
            }, 500);
        }
    };
    const button4 = () => {
        if(!clicked) {
            if(correctAnswer === 3) {
                setCorrect(correct + 1);
                setButton4Style(buttonCorrect);
                setClicked(true);
            } else {
                setButton4Style(buttonWrong);
                setClicked(true);
            }
            setTimeout(function() {
                setIter(iter + 1);
                setButton4Style('');
                setClicked(false);
            }, 500);
        }
    };




    return (
		<div>
            <div style={{textAlign:'center'}}>
                <h3 style={{fontFamily:'Poppins-Regular'}}>{iter}/15</h3>
            </div>
            

            <div className="vis-button-container">
                <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                    <div>{mainShape}</div>
                </div>
                <button style={{border: button1style}} className="visuoButton" onClick={button1}>
                    <div>{optionShapes[0]}</div>
                </button>
                <button style={{border: button2style}} className="visuoButton" onClick={button2}>
                    <div>{optionShapes[1]}</div>
                </button>
                <button style={{border: button3style}} className="visuoButton" onClick={button3}>
                    <div>{optionShapes[2]}</div>
                </button>
                <button style={{border: button4style}} className="visuoButton" onClick={button4}>
                    <div>{optionShapes[3]}</div>
                </button>
            </div>

            <h1 className="timer">Time left: {timeLeft} seconds</h1>
        </div>
	);
}

export default Visuospatial;