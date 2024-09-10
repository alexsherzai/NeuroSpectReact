import {React, useState, useEffect} from 'react'
import { DndContext, useDroppable, useDraggable} from '@dnd-kit/core';

import ShapesAndSlots from './subcomponents/ShapesAndSlots';

const VisualMemory = ({shapes, shapesToMem, chosen, onTimeEnd}) => {

    const [slots, setSlots] = useState([0, 0, 0, 0, 0, 0]);

    const [timeLeft, setTimeLeft] = useState(60);

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

        let temp = []
        for(var i = 0; i < shapesToMem.length; i++) {
            temp.push(shapesToMem[i])
        }

        while(temp.length < 12){
            var r = Math.floor(Math.random() * (shapes.length - 1)) + 1;
            if(temp.indexOf(r) === -1) {
                temp.push(r)
            }
        }

        for (let i = temp.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [temp[i], temp[j]] = [temp[j], temp[i]];
        }

        setOptions(temp);

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
    }, []);

    return (
        <div className='fullGameMargin'>
            <div>
                <h1>Drag and drop shapes into the correct slots</h1>
                <h1 className="timer">{timeLeft} sec</h1>
            </div>
            
            <DndContext>
                <ShapesAndSlots onTimeEnd={onTimeEnd} shapes={shapes} options={options} slots={slots} chosen={chosen} />
            </DndContext>

        </div>
    )
}

export default VisualMemory