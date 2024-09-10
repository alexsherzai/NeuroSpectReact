import {React, useState, useEffect} from 'react'
import { useDrag, useDrop } from 'react-dnd'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

const VisualMemory = ({shapes, shapesToMem}) => {

    const [slots, setSlots] = useState([
        <svg width="50" height="50" viewBox = "0 0 105 105" xmlns="http://www.w3.org/2000/svg">
            <polygon points="50,15 61,35 85,35 66,50 75,75 50,55 25,75 34,50 15,35 39,35" stroke="none" fill="none" stroke-width="2"/>
        </svg>,
        <svg width="50" height="50" viewBox = "0 0 105 105" xmlns="http://www.w3.org/2000/svg">
            <polygon points="50,15 61,35 85,35 66,50 75,75 50,55 25,75 34,50 15,35 39,35" stroke="none" fill="none" stroke-width="2"/>
        </svg>,
        <svg width="50" height="50" viewBox = "0 0 105 105" xmlns="http://www.w3.org/2000/svg">
            <polygon points="50,15 61,35 85,35 66,50 75,75 50,55 25,75 34,50 15,35 39,35" stroke="none" fill="none" stroke-width="2"/>
        </svg>,
        <svg width="50" height="50" viewBox = "0 0 105 105" xmlns="http://www.w3.org/2000/svg">
            <polygon points="50,15 61,35 85,35 66,50 75,75 50,55 25,75 34,50 15,35 39,35" stroke="none" fill="none" stroke-width="2"/>
        </svg>,
        <svg width="50" height="50" viewBox = "0 0 105 105" xmlns="http://www.w3.org/2000/svg">
            <polygon points="50,15 61,35 85,35 66,50 75,75 50,55 25,75 34,50 15,35 39,35" stroke="none" fill="none" stroke-width="2"/>
        </svg>,
        <svg width="50" height="50" viewBox = "0 0 105 105" xmlns="http://www.w3.org/2000/svg">
            <polygon points="50,15 61,35 85,35 66,50 75,75 50,55 25,75 34,50 15,35 39,35" stroke="none" fill="none" stroke-width="2"/>
        </svg>,
    ]);

    const [options, setOptions] = useState([]);

    function grue(arr, num) {
        if (arr.length < num) {
            throw new Error('Array length is less than the number of elements requested');
        }
    
        const arrCopy = [...arr];
    
        for (let i = arrCopy.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arrCopy[i], arrCopy[j]] = [arrCopy[j], arrCopy[i]];
        }
    
        return arrCopy.slice(0, num);
    }

    useEffect(() => {
        let temp = grue(shapes, 6);
        console.log(temp)
        for(var i = 0; i < shapesToMem.length; i++) {
            temp.push(shapesToMem[i])
        }

        for (let i = temp.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [temp[i], temp[j]] = [temp[j], temp[i]];
        }

        setOptions(temp);
    }, []);

    return (
        <div className='fullGameMargin'>
            <h1>Place the symbols in the order you saw earlier</h1>
            <div className='grid-container'>
                {options.map((key, index) => (
                    <div className='slot-box'>
                        {key}
                    </div>
                ))}
            </div>

            <div className='grid-container'>
                {slots.map((key, index) => (
                    <div className='shape-box'>
                        {key}
                    </div>
                ))}
            </div>

        </div>
    )
}

export default VisualMemory