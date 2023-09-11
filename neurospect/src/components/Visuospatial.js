import React, { useState, useEffect } from 'react';
import { updateDoc, doc } from 'firebase/firestore';
import { storage } from '../config/firebase';

const Visuospatial = ( { storeVis, onTimeEnd }) => {
    const [iter, setIter] = useState(0);
    const [mainShape, setMainShape] = useState(null);
    const [optionShapes, setOptionShapes] = useState([null, null, null, null]);
    const [correct, setCorrect] = useState([]);
    const [correctAnswer, setCorrectAnswer] = useState(0);
    const [timeLeft, setTimeLeft] = useState(60);
    const [preButtonClick, setPreButtonClick] = useState(Date.now());
    const [buttonClickTimes, setButtonClickTimes] = useState([]);

    const buttonWrong = '2px solid #CD3843';
    const buttonCorrect = '2px solid #2E8970';
    const [button1style, setButton1Style] = useState('2px solid #F6F4FA');
    const [button2style, setButton2Style] = useState('2px solid #F6F4FA');
    const [button3style, setButton3Style] = useState('2px solid #F6F4FA');
    const [button4style, setButton4Style] = useState('2px solid #F6F4FA');
    const [clicked, setClicked] = useState(false);

    const queryParams = new URLSearchParams(window.location.search)
    const prolificID = queryParams.get("PROLIFIC_PID");
    const userID = queryParams.get("userID");

    let docName = userID;
    if(prolificID !== null) {
        docName = prolificID;
    }

    const AddData = async() => {
        const reviewRef = doc(storage, "neurospect", docName);

        let correctNum = 0;
		correct.forEach(e => {if(e === 1) {correctNum++}});

        console.log("Score", correctNum);

        storeVis(correctNum);

        try {
            await updateDoc(reviewRef, {
                visuospatial: correctNum,
                visuospatialAnswers: correct,
                visuospatialSpeed: buttonClickTimes
            })
        } catch(err) {
            console.log(err);
        }
    }

    const turn = (pts, dir, size, rotation) => {
        let totalString = "";

        let array = pts.split(' ');

        for(let i = 0; i < array.length; i++) {
            let coords = array[i].split(',');

            switch(dir) {
                case 0:
                    let newVal = parseInt(coords[1], 10) - size;
                    totalString += coords[0].toString() + ",";
                    totalString += newVal.toString() + " ";
                    break;
                case 1:
                    let newVal = parseInt(coords[1], 10) + size;
                    totalString += coords[0].toString() + ",";
                    totalString += newVal.toString() + " ";
                    break;
                case 2:
                    let newVal = parseInt(coords[0], 10) + size;
                    totalString += newVal.toString() + ",";
                    totalString += coords[1].toString() + " ";
                    break;
                case 3:
                    let newVal = parseInt(coords[0], 10) - size;
                    totalString += newVal.toString() + ",";
                    totalString += coords[1].toString() + " ";
                    break;
            }
        }

        totalString = totalString.substring(0, totalString.length-1);
        return totalString;
    }

    const generateShape = (dir, size, leftCornerX, leftCornerY, colors) => {
        let totalDirX = 0;
        let totalDirY = 0;

        for(let i = 0; i < 2 + Math.floor(iter / 6); i++) {
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

        let ptsList = [];
        ptsList.push(firstPoint);

        for(let i = 0; i < 2 + Math.floor(iter / 6); i++) {
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

        let flippedDir = [];
        for(let i = 0; i < corDir.length; i++) {
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

        let randomDir1 = flippedDir.slice();
        let randomDir2 = [];

        for(let i = 0; i < 4; i++) {
            let newVal = Math.floor(Math.random() * 4);
            if(i > 0) {
                if(randomDir2[i - 1] === 0) {
                    while(newVal === 1) {
                        newVal = Math.floor(Math.random() * 4);
                    }
                } else if(randomDir2[i - 1] === 1) {
                    while(newVal === 0) {
                        newVal = Math.floor(Math.random() * 4);
                    }
                } else if(randomDir2[i - 1] === 2) {
                    while(newVal === 3) {
                        newVal = Math.floor(Math.random() * 4);
                    }
                } else if(randomDir2[i - 1] === 3) {
                    while(newVal === 2) {
                        newVal = Math.floor(Math.random() * 4);
                    }
                }
            }

            randomDir2.push(newVal);
        }


        const colors = ["red", "blue", "green", "orange"];
        let diffColArray = corCol.slice();

        if(iter < 6) {
            let index = Math.floor(Math.random() * 3);
            let temp = corCol[index];

            while(diffColArray[index] === temp) {
                diffColArray[index] = colors[Math.floor(Math.random() * 4)];
            }

            let options = [];

            if(randomDir1[0] === 0) {
                options = [0, 2, 3];
            } else if(randomDir1[0] === 1) {
                options = [1, 2, 3];
            } else if(randomDir1[0] === 2) {
                options = [0, 1, 2];
            } else if(randomDir1[0] === 3) {
                options = [0, 1, 3];
            }

            while(randomDir1[1] === flippedDir[1]) {
                randomDir1[1] = options[Math.floor(Math.random() * 3)];
            }
        } else if(iter >= 6 && iter < 12) {
            let index = Math.floor(Math.random() * 4);
            let temp = corCol[index];

            while(diffColArray[index] === temp) {
                diffColArray[index] = colors[Math.floor(Math.random() * 4)];
            }

            let options = [];

            if(randomDir1[1] === 0) {
                options = [0, 2, 3];
            } else if(randomDir1[1] === 1) {
                options = [1, 2, 3];
            } else if(randomDir1[1] === 2) {
                options = [0, 1, 2];
            } else if(randomDir1[1] === 3) {
                options = [0, 1, 3];
            }

            while(randomDir1[2] === flippedDir[2]) {
                randomDir1[2] = options[Math.floor(Math.random() * 3)];
            }

            console.log(flippedDir);
            console.log(randomDir1);

        } else if(iter >= 12) {
            let index = Math.floor(Math.random() * 5);
            let temp = corCol[index];

            while(diffColArray[index] === temp) {
                diffColArray[index] = colors[Math.floor(Math.random() * 4)];
            }

            let options = [];

            if(randomDir1[2] === 0) {
                options = [0, 2, 3];
            } else if(randomDir1[2] === 1) {
                options = [1, 2, 3];
            } else if(randomDir1[2] === 2) {
                options = [0, 1, 2];
            } else if(randomDir1[2] === 3) {
                options = [0, 1, 3];
            }

            while(randomDir1[3] === flippedDir[3]) {
                randomDir1[3] = options[Math.floor(Math.random() * 3)];
            }

            console.log(flippedDir);
            console.log(randomDir1);
        }

        let diffColArray2 = [colors[Math.floor(Math.random() * 4)], colors[Math.floor(Math.random() * 4)], colors[Math.floor(Math.random() * 4)], colors[Math.floor(Math.random() * 4)], colors[Math.floor(Math.random() * 4)]]

        const main = generateShape(flippedDir, 25, 65, 65, corCol)[0];
        const option1 = generateShape(flippedDir, 25, 65, 65, diffColArray)[0];
        const option2 = generateShape(randomDir1, 25, 65, 65, corCol)[0];
        const option3 = generateShape(randomDir2, 25, 65, 65, diffColArray2)[0];

        let optionsTemp = [];

        let correctIndex = 0;
        let options = [];

        let indArray = [0, 1, 2, 3];

        indArray = shuffle(indArray);

        for(let i = 0; i < indArray.length; i++) {
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
        let dir = [];
        for(let i = 0; i < 4; i++) {
            let newVal = Math.floor(Math.random() * 4);
            if(i > 0) {
                if(dir[i - 1] === 0) {
                    while(newVal === 1) {
                        newVal = Math.floor(Math.random() * 4);
                    }
                } else if(dir[i - 1] === 1) {
                    while(newVal === 0) {
                        newVal = Math.floor(Math.random() * 4);
                    }
                } else if(dir[i - 1] === 2) {
                    while(newVal === 3) {
                        newVal = Math.floor(Math.random() * 4);
                    }
                } else if(dir[i - 1] === 3) {
                    while(newVal === 2) {
                        newVal = Math.floor(Math.random() * 4);
                    }
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
            AddData();
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
            console.log(iter);
            buttonClickTimes.push(Date.now() - preButtonClick);
            
            setPreButtonClick(Date.now());
            console.log(buttonClickTimes);
            if(correctAnswer === 0) {
                correct.push(1);
                setButton1Style(buttonCorrect);
                setClicked(true);
            } else {
                correct.push(0);
                setButton1Style(buttonWrong);
                setClicked(true);
            }
            setTimeout(function() {
                setIter(iter + 1);
                setButton1Style('2px solid #F6F4FA');
                setClicked(false);
            }, 500);
        }
    };
    const button2 = () => {
        if(!clicked) {
            buttonClickTimes.push(Date.now() - preButtonClick);
            setPreButtonClick(Date.now());
            if(correctAnswer === 1) {
                correct.push(1);
                setButton2Style(buttonCorrect);
                setClicked(true);
            } else {
                correct.push(0);
                setButton2Style(buttonWrong);
                setClicked(true);
            }
            setTimeout(function() {
                setIter(iter + 1);
                setButton2Style('2px solid #F6F4FA');
                setClicked(false);
            }, 500);
        }
    };
    const button3 = () => {
        if(!clicked) {
            buttonClickTimes.push(Date.now() - preButtonClick);
            setPreButtonClick(Date.now());
            if(correctAnswer === 2) {
                correct.push(1);
                setButton3Style(buttonCorrect);
                setClicked(true);
            } else {
                correct.push(0);
                setButton3Style(buttonWrong);
                setClicked(true);
            }
            setTimeout(function() {
                setIter(iter + 1);
                setButton3Style('2px solid #F6F4FA');
                setClicked(false);
            }, 500);
        }
    };
    const button4 = () => {
        if(!clicked) {
            buttonClickTimes.push(Date.now() - preButtonClick);
            setPreButtonClick(Date.now());
            if(correctAnswer === 3) {
                correct.push(1);
                setButton4Style(buttonCorrect);
                setClicked(true);
            } else {
                correct.push(0);
                setButton4Style(buttonWrong);
                setClicked(true);
            }
            setTimeout(function() {
                setIter(iter + 1);
                setButton4Style('2px solid #F6F4FA');
                setClicked(false);
            }, 500);
        }
    };




    return (
		<div>
            <div style={{textAlign:'center', height: '2vh'}}>
                <h3 style={{fontFamily:'Poppins-Regular', marginBottom: 0}}>{iter + 1}/15</h3>
            </div>
            

            <div className="fullGameMargin vis-button-container">
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

            <h1 className="timer">{timeLeft} sec</h1>
        </div>
	);
}

export default Visuospatial;