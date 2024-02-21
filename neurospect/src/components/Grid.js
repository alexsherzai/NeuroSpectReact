import React, { useState, useEffect } from 'react';
import './stylesheet.css';
import { click } from '@testing-library/user-event/dist/click';

const Grid = ({onTimeEnd, accuracy, speed, gridData}) => {
    const [gridSize, setGridSize] = useState(3);
    const [cellColors, setCellColors] = useState([]);
    const [level, setLevel] = useState(0);
    const [spawn, setSpawn] = useState(true);
    const [clickable, setClickable] = useState(false);
    const [pattern, setPattern] = useState([]);

    const [clickedCells, setClickedCells] = useState([]);

    const [prevVal, setPrevVal] = useState(0);

    const [initTime, setInitTime] = useState(0);

    const [scores, setScores] = useState([]);
    const [speeds, setSpeeds] = useState([]);


    const queryParams = new URLSearchParams(window.location.search)
    const prolificID = queryParams.get("PROLIFIC_PID");
    const userID = queryParams.get("userID");

    let docName = userID;
    if(prolificID !== null) {
        docName = prolificID;
    } else if(userID === null && prolificID === null) {
        docName = "noID";
    }

    const AddData = () => {
        let acc = (Math.round(scores.reduce((prev, a ) => prev + a, 0) * 50) / 100)
        let sp = Math.round(speeds.reduce((prev, a ) => prev + a, 0) * 100/ 40) / 100;
        accuracy(acc);
        speed(sp);

        gridData(
            {
                prosScores: {scores},
                prosSpeeds: {speeds},
                accuracyGrid: acc,
                speedGrid: sp
            }
        );
    }

    useEffect(() => {
        if(level >= 20) {
            AddData();
            onTimeEnd(); 
        }
        if (spawn) {
            console.log(level);

            const patternIndices = [];
            let num = 0;
            if (level % 4 >= 2) {
                num = gridSize - 1;
            } else {
                num = gridSize - 2;
            }

            let timeToClick = (Math.random() * 3200) + 300;
            while(Math.abs(timeToClick - prevVal) <= 1000) {
                timeToClick = (Math.random() * 3200) + 300;
            }

            console.log(timeToClick);

            setPrevVal(timeToClick);
            setCellColors(Array(gridSize ** 2).fill(''));

            while (patternIndices.length < num) {
                const rand = Math.floor(Math.random() * (gridSize ** 2));
                if (!patternIndices.includes(rand)) {
                    patternIndices.push(rand);
                }
            }

            

            setPattern(patternIndices);

            setTimeout(() => {
                let grid = [];
                for (let i = 0; i < gridSize ** 2; i++) {
                    if(patternIndices.includes(i)) {
                        grid.push('Pattern');
                    } else {
                        grid.push('');
                    }
                }
                setCellColors(grid);

            }, timeToClick);

            setTimeout(() => {
                setInitTime(Date.now());
                setCellColors(Array(gridSize ** 2).fill(''));
                setClickable(true);
                setSpawn(false);
            }, 400 + timeToClick);
        } else {
            checkMatch(clickedCells, pattern);
        }
    }, [level, clickedCells]);

    const cellClicked = (index) => {
        if (clickable && cellColors[index] !== 'Clicked') {
            const tempArr = [...cellColors];
            tempArr[index] = 'Pattern';
            setCellColors(tempArr);

            let temp = [...clickedCells, index];

            console.log(temp);

            checkMatch(temp, pattern);

            setClickedCells(temp);
        }
    };

    const checkMatch = (a, b) => {
        console.log("Clicked Cells: " + a);
        console.log("Pattern: " + b);
        if(a.length === b.length) {
            let timeTaken = Date.now() - initTime;
            speeds.push(timeTaken);

            scores.push(gridSize - RMSE(a, b));

            console.log(speeds);
            console.log(scores);

            setClickable(false);
            let boolArr = [];
            for(let i = 0; i < a.length; i++) {
                boolArr.push(b.includes(a[i]));
            }

            let finalResult = [];
            for(let j = 0; j < gridSize ** 2; j++) {
                if(a.includes(j)) {
                    if(boolArr[a.findIndex((element) => element === j)]) {
                        finalResult.push("Correct");
                    } else {
                        finalResult.push("Wrong")
                    }
                } else {
                    finalResult.push("");
                }
            }

            setCellColors(finalResult);

            setTimeout(() => {
                setLevel(level + 1);
                setGridSize(Math.floor((level + 1) / 4) + 3);
                setSpawn(true);
                setClickedCells([]);
            }, 1000);
        }
    };

    const distance = (a, b) => {
        let distX = Math.abs(Math.floor(a / gridSize) - Math.floor(b / gridSize));
        let distY = Math.abs((a % gridSize) - (b % gridSize));

        return Math.round(Math.sqrt((distX ** 2) + (distY ** 2)) * 100) / 100;
    }

    const RMSE = (a, b) => {
        let c = Object.assign([], a);
        let d = Object.assign([], b);

        let sum = 0;
        for(let i = 0; i < c.length; i++) {
            let temp = 10000000;
            let tempJ = 0;
            for(let j = 0; j < d.length; j++) {
                if(distance(c[i], d[j]) < temp) {
                    temp = distance(c[i], d[j]);
                    tempJ = j;
                }
            }

            sum += temp;
            d.splice(tempJ, 1);
        }

        return Math.round(Math.sqrt(sum) * 100) / 100;
    }

    return (
        <div className='gridCont'>
            <div style={{height: '10vh', textAlign: 'center'}}>
                <h3>Replicate the Sequence</h3>
            </div>
            <div className="grid" style={{left: 0, right: 0, gridTemplateColumns: `repeat(${gridSize}, 1fr)`, width: '100%', maxHeight: '350px', minHeight: '300px', gap: '5px'}}>
                {cellColors.map((cell, index) => (
                    <div className={`cell${cellColors[index]}`} onClick={() => cellClicked(index)} key={index}></div>
                ))}
            </div>
        </div>
    );
}

export default Grid;
