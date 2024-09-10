import {React, useState, useEffect} from 'react'

const Score = ({correct, chosen}) => {
    const [matching, setMatching] = useState(0);
    const [order, setOrder] = useState(0);

    useEffect(() => {
        let m = 0;
        let o = 0;
        for(var i = 0; i < chosen.length; i++) {
            if(correct.includes(chosen[i])) {
                m += 1;
            }
            if(correct[i] === chosen[i]) {
                o += 1;
            }
        }

        setMatching(m);
        setOrder(o);
    });
    return (
        <div>
            <h1>Accuracy: {matching}/6</h1>
            <h1>Order: {order}/6</h1>
        </div>
    )
}

export default Score;