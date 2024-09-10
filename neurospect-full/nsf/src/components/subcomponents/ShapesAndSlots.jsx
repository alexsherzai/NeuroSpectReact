import {React, useState, useEffect, useRef} from 'react';
import { DndContext, useDroppable, useDraggable} from '@dnd-kit/core';

const ShapesAndSlots = ({shapes, onTimeEnd, options, slots, chosen}) => {
    const [shapeOptions, setShapeOptions] = useState([...options]);
    const [slotFills, setSlotFills] = useState(slots);
    const [dragging, setDragging] = useState(false);

    const [filled, setFilled] = useState(false);

    const emptyslot = <svg width="50" height="50" viewBox = "0 0 105 105" xmlns="http://www.w3.org/2000/svg">
        <polygon points="50,15 61,35 85,35 66,50 75,75 50,55 25,75 34,50 15,35 39,35" stroke="none" fill="none" stroke-width="2"/>
    </svg>;

    const dragInd = useRef();
    const dragShape = useRef();

    const slotNum = useRef();

    const handleDragStart = (e, params) => {
        dragInd.current = params;
        dragShape.current = e.target;
        dragShape.current.addEventListener('dragend', () => {handleDragEnd(e, params)});
        setTimeout(() => {
            setDragging(true);
        }, 0)
    }

    const handleDragEnd = (e, params) => {
        console.log(slotNum.current);
        if(slotNum.current !== null) {
            if(slots[slotNum.current] !== emptyslot) {
                options.push(slots[slotNum.current])
            }
            slots[slotNum.current] = options[params];
            options.splice(params, 1);
        }

        setDragging(false);
        //dragShape.current.removeEventListener('dragend', handleDragEnd);
        dragInd.current = null;
        dragShape.current = null;
        slotNum.current = null;
    }

    const handleDragEnter = (e, params) => {
        slotNum.current = params;
    }

    const getStylesShape = (params) => {
        let style = 'shape-box';

        if(params === dragInd.current) {
            style = 'shape-box-drag';
        }
        return style;
    }

    useEffect(() => {
        if(!slots.includes(emptyslot)) {
            setFilled(true);
        }
    }, [slots, filled])

    const nextPage = () => {
        chosen(slots);
        onTimeEnd();
    }

    return (
        <>
        <div className='grid-container'>
            <div className='container'>
                {options.map((key, index) => (
                    <div 
                    draggable 
                    onDragStart={(e) => {handleDragStart(e, index)}} 
                    className={dragging ? getStylesShape(index) : 'shape-box'}>
                        {shapes[key]}
                    </div>
                ))}
            </div>
        </div>

        <div className='grid-container'>
            {slots.map((key, index) => (
                <div 
                onDragEnter={dragging ? (e) => {handleDragEnter(e, index)} : null}
                className='slot-box'>
                    {shapes[key]}
                </div>
            ))}
        </div>

        {filled && 
        
        <div className='fullGameMargin'>
            <div className='buttonCont'>
                <button className="buttonNext" onClick={nextPage}>Next</button>
            </div>
        </div>
        }
        </>
    )
}

export default ShapesAndSlots