import React, { useState, useEffect } from 'react';
import './stylesheet.css';
import { click } from '@testing-library/user-event/dist/click';

const Grid = ({onTimeEnd}) => {
    const [gridSize, setGridSize] = useState(3);
    const [cellColors, setCellColors] = useState([]);
    const [level, setLevel] = useState(1);
    const [spawn, setSpawn] = useState(true);
    const [clickable, setClickable] = useState(false);
    const [pattern, setPattern] = useState([]);

    const [clickedCells, setClickedCells] = useState([]);

    useEffect(() => {
        if(level >= 20) {
            onTimeEnd(); 
        }
        if (spawn) {
            console.log(level);

            const patternIndices = [];
            let num = 0;
            if (level % 2 === 1) {
                num = gridSize - 2;
            } else {
                num = gridSize - 1;
            }

            while (patternIndices.length < num) {
                const rand = Math.floor(Math.random() * (gridSize ** 2));
                if (!patternIndices.includes(rand)) {
                    patternIndices.push(rand);
                }
            }

            setPattern(patternIndices);

            let grid = [];
            for (let i = 0; i < gridSize ** 2; i++) {
                if(patternIndices.includes(i)) {
                    grid.push('Pattern');
                } else {
                    grid.push('');
                }
            }
            setCellColors(grid);

            setTimeout(() => {
                setCellColors(Array(gridSize ** 2).fill(''));
                setClickable(true);
                setSpawn(false);
            }, 1500);
        } else {
            checkMatch(clickedCells, pattern);
        }
    }, [level, clickedCells]);

    const cellClicked = (index) => {
        if (clickable && cellColors[index] !== 'Clicked') {
            const tempArr = [...cellColors];
            tempArr[index] = 'Clicked';
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
                setGridSize(Math.floor(level / 2) + 3);
                setSpawn(true);
                setClickedCells([]);
            }, 1000);
        }
    };

    return (
        <div className="grid" style={{ gridTemplateColumns: `repeat(${gridSize}, 1fr)` }}>
            {cellColors.map((cell, index) => (
                <div className={`cell${cellColors[index]}`} onClick={() => cellClicked(index)} key={index}></div>
            ))}
        </div>
    );
}

export default Grid;
