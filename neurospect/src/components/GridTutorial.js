import React, { useState, useEffect } from "react";
import "./stylesheet.css";
import {TouchableHighlight, Text} from "react-native";
import { click } from "@testing-library/user-event/dist/click";

const GridTutorial = ({onTimeEnd }) => {
    const [opacityVal, setOpacityVal] = useState(0);
    const [tutorialMode, setTutorialMode] = useState(true);
    const [iter, setIter] = useState(1);
    const [gridSize, setGridSize] = useState(3);
    const [cellColors, setCellColors] = useState([]);

    const [warningText, setWarningText] = useState("");
    const [textColor, setTextColor] = useState("");

    const [solvedCards, setSolvedCards] = useState([]);
    const [clickedShapes, setClickedShapes] = useState([]);

    const [timeLeft, setTimeLeft] = useState(4);
	const [countdownText, setCountdownText] = useState("Ready?");

    const [shown, setShown] = useState(false);
    const [clickable, setClickable] = useState(true);

    const patternIndices = [4, 8];

    const cellClicked = (index) => {
        if(clickable) {
            let temp = [...clickedShapes];
            temp.push(index);

            let tempColors = [...cellColors];

            tempColors[index] = "Pattern";

            if(temp.length >= 2) {
                setClickable(false);

                let bothTrue = true;

                for(let i = 0; i < temp.length; i++) {
                    let found = false;
                    for(let j = 0; j < patternIndices.length; j++) {
                        if(temp[i] === patternIndices[j]) {
                            found = true;
                        }
                    }

                    if(found) {
                        tempColors[temp[i]] = "Correct";
                    } else {
                        tempColors[temp[i]] = "Wrong";
                        bothTrue = false;
                    }
                }

                if(bothTrue) {
                    setTimeout(() => {
                        setCellColors(Array(9).fill(''));
                        setClickedShapes([]);
                        setClickable(true);
                        setIter(5);
                    }, 1000);
                }

                setTimeout(() => {
                    setCellColors(Array(9).fill(''));
                    setClickedShapes([]);
                    setClickable(true);
                }, 1000);
            }

            setCellColors(tempColors);

            setClickedShapes(temp);
        }
    };

    useEffect(() => {

        if(iter === 4 && !shown) {
            let grid = [];
                for (let i = 0; i < gridSize ** 2; i++) {
                    if(patternIndices.includes(i)) {
                        grid.push('Pattern');
                    } else {
                        grid.push('');
                    }
                }
                setCellColors(grid);

            setShown(true);
            
            setTimeout(() => {
                setCellColors(Array(9).fill(''));
            }, 1000);
        }

        const timer = setInterval(() => {
            setTimeLeft(oldTime => {
                if (oldTime <= 1) {
                    clearInterval(timer);
                    onTimeEnd();
                }

				if(oldTime === 3) {
					setCountdownText("Set!");
				} else if(oldTime === 2) {
					setCountdownText("Go!");
				}
				
				if(iter === 6) {
					return oldTime - 1;
				} else {
					return oldTime;
				}

            });
        }, 1000);

        return () => clearInterval(timer);

    }, [onTimeEnd, iter, clickedShapes]);
    
    const onClickResponse = () => {
        setIter(iter + 1);
    }
    const nextScene = () => {
        if(tutorialMode === false) {
            onTimeEnd();
        }
    }

    const reset = () => {
        setIter(1);
        setSolvedCards([]);
        setWarningText('');
    }

    return (
        <div>
            {iter === 1 &&

            <div onClick={onClickResponse}>
                <div>
                <div className="tut-intro-fade" style={{position: 'absolute', top: '3%', left: 0, right: 0, marginLeft: 'auto', marginRight: 'auto', display: 'flex', textAlign: 'center', justifyContent: 'center', alignItems: 'center', zIndex: 1004, color: 'white', fontSize: '20px', fontFamily: 'Poppins-Regular', fontWeight: '600'}}>
						Tap on the screen to move forward
			    </div>

                <div>

                    <div className="grid-main-shape">
                        <div className='gridCont' style={{zIndex: "inherit", backgroundColor:"#F4F6FA", borderRadius:"10px", padding: '15px'}}>
                            <div className="grid" style={{left: 0, right: 0, gridTemplateColumns: 'repeat(3, 1fr)', width: '100%', maxHeight: '350px', minHeight: '300px', gap: '5px'}}>
                                <div className='cell' onClick={() => cellClicked(0)} key={0}></div>
                                <div className='cell' onClick={() => cellClicked(1)} key={1}></div>
                                <div className='cell' onClick={() => cellClicked(2)} key={2}></div>
                                <div className='cell' onClick={() => cellClicked(3)} key={3}></div>
                                <div className='cell' onClick={() => cellClicked(4)} key={4}></div>
                                <div className='cell' onClick={() => cellClicked(5)} key={5}></div>
                                <div className='cell' onClick={() => cellClicked(6)} key={6}></div>
                                <div className='cell' onClick={() => cellClicked(7)} key={7}></div>
                                <div className='cell' onClick={() => cellClicked(8)} key={8}></div>
                            </div>
                        </div>
                    </div>

                    <div className="tut-intro-fade" style={{position: "absolute", zIndex:1100, marginLeft: "60%"}}>
                        <img src="/TutorialIcons/Arrow1.png"/>
                    </div>
                    <div className="tut-intro-fade" style={{zIndex:1004, position:"absolute", paddingTop:'10px', paddingBottom:'10px', padding: '5px', fontFamily:"Poppins-Regular", border:"solid 2px #FF9417", backgroundColor:"white", borderRadius:"6px", marginTop:"12%", marginLeft: "16%"}}>
                        <Text style={{padding: '30px', fontSize: "16px"}}>This is a <strong>grid</strong> of squares</Text>
                    </div>
                    
                    </div>
                    <div class="tutorialCover"></div>
                </div>
            </div>
            }

            {iter === 2 &&

            <div onClick={onClickResponse}>
                <div>
                <div style={{position: 'absolute', top: '3%', left: 0, right: 0, marginLeft: 'auto', marginRight: 'auto', display: 'flex', textAlign: 'center', justifyContent: 'center', alignItems: 'center', zIndex: 1004, color: 'white', fontSize: '20px', fontFamily: 'Poppins-Regular', fontWeight: '600'}}>
						Tap on the screen to move forward
			    </div>

                <div style={{position: "absolute"}}>

                    <div className="grid-main-shape">
                        <div className='gridCont' style={{zIndex: "inherit", backgroundColor:"#F4F6FA", borderRadius:"10px", padding: '15px'}}>
                            <div className="grid" style={{left: 0, right: 0, gridTemplateColumns: 'repeat(3, 1fr)', width: '100%', maxHeight: '350px', minHeight: '300px', gap: '5px'}}>
                                <div className='cell' onClick={() => cellClicked(0)} key={0}></div>
                                <div className='cell' onClick={() => cellClicked(1)} key={1}></div>
                                <div className='cell' onClick={() => cellClicked(2)} key={2}></div>
                                <div className='cell' onClick={() => cellClicked(3)} key={3}></div>
                                <div className='cellPattern' onClick={() => cellClicked(4)} key={4}></div>
                                <div className='cell' onClick={() => cellClicked(5)} key={5}></div>
                                <div className='cellPattern' onClick={() => cellClicked(6)} key={6}></div>
                                <div className='cell' onClick={() => cellClicked(7)} key={7}></div>
                                <div className='cell' onClick={() => cellClicked(8)} key={8}></div>
                            </div>
                        </div>
                    </div>

                    <div style={{position: "absolute", zIndex:1100, marginLeft: "60%"}}>
                        <img src="/TutorialIcons/Arrow1.png"/>
                    </div>
                    <div style={{zIndex:1004, position:"absolute", paddingTop:'10px', paddingBottom:'10px', padding: '5px', fontFamily:"Poppins-Regular", border:"solid 2px #FF9417", backgroundColor:"white", borderRadius:"6px", marginTop:"12%", marginLeft: "2%"}}>
                        <Text style={{padding: '30px', fontSize: "16px"}}>You will be shown a <strong>sequence of lights</strong></Text>
                    </div>
                    
                    </div>
                    <div class="tutorialCoverNoFade"></div>
                </div>
            </div>
            }

             {iter === 3 &&

            <div onClick={onClickResponse}>
                <div>
                <div style={{position: 'absolute', top: '3%', left: 0, right: 0, marginLeft: 'auto', marginRight: 'auto', display: 'flex', textAlign: 'center', justifyContent: 'center', alignItems: 'center', zIndex: 1004, color: 'white', fontSize: '20px', fontFamily: 'Poppins-Regular', fontWeight: '600'}}>
						Tap on the screen to move forward
			    </div>

                <div style={{position: "absolute"}}>

                    <div className="grid-main-shape">
                        <div className='gridCont' style={{zIndex: "inherit", backgroundColor:"#F4F6FA", borderRadius:"10px", padding: '15px'}}>
                            <div className="grid" style={{left: 0, right: 0, gridTemplateColumns: 'repeat(3, 1fr)', width: '100%', maxHeight: '350px', minHeight: '300px', gap: '5px'}}>
                                <div className='cell' onClick={() => cellClicked(0)} key={0}></div>
                                <div className='cell' onClick={() => cellClicked(1)} key={1}></div>
                                <div className='cell' onClick={() => cellClicked(2)} key={2}></div>
                                <div className='cell' onClick={() => cellClicked(3)} key={3}></div>
                                <div className='cell' onClick={() => cellClicked(4)} key={4}></div>
                                <div className='cell' onClick={() => cellClicked(5)} key={5}></div>
                                <div className='cell' onClick={() => cellClicked(6)} key={6}></div>
                                <div className='cell' onClick={() => cellClicked(7)} key={7}></div>
                                <div className='cell' onClick={() => cellClicked(8)} key={8}></div>
                            </div>
                        </div>
                    </div>

                    <div style={{position: "absolute", zIndex:1100, marginLeft: "60%"}}>
                        <img src="/TutorialIcons/Arrow1.png"/>
                    </div>
                    <div style={{zIndex:1004, position:"absolute", paddingTop:'10px', paddingBottom:'10px', padding: '5px', fontFamily:"Poppins-Regular", border:"solid 2px #FF9417", backgroundColor:"white", borderRadius:"6px", marginTop:"12%", marginLeft: "2%"}}>
                        <Text style={{padding: '30px', fontSize: "16px"}}>Tap the squares to <strong>copy the sequence</strong></Text>
                    </div>
                    
                    </div>
                    <div class="tutorialCoverNoFade"></div>
                </div>
            </div>
            }

             {iter === 4 &&

                <div>
                    <div className='gridCont' style={{zIndex: "inherit", backgroundColor:"#F4F6FA", borderRadius:"10px", padding: '15px'}}>
                        <div style={{height: '10vh', textAlign: 'center'}}>
                            <h3>Replicate the Sequence</h3>
                        </div>
                        <div className="grid" style={{left: 0, right: 0, gridTemplateColumns: 'repeat(3, 1fr)', width: '100%', maxHeight: '350px', minHeight: '300px', gap: '5px'}}>
                            {cellColors.map((cell, index) => (
                                <div className={`cell${cellColors[index]}`} onClick={() => cellClicked(index)} key={index}></div>
                            ))}
                        </div>
                    </div>
                </div>
            }


            {iter === 5 &&

                <div>

                    <div style={{position: "absolute"}}>
                        <div className='gridCont' style={{zIndex: "inherit", backgroundColor:"#F4F6FA", borderRadius:"10px", padding: '15px'}}>
                            <div style={{height: '10vh', textAlign: 'center'}}>
                                <h3>Replicate the Sequence</h3>
                            </div>
                            <div className="grid" style={{left: 0, right: 0, gridTemplateColumns: 'repeat(3, 1fr)', width: '100%', maxHeight: '350px', minHeight: '300px', gap: '5px'}}>
                                <div className='cell' onClick={() => cellClicked(0)} key={0}></div>
                                <div className='cell' onClick={() => cellClicked(1)} key={1}></div>
                                <div className='cell' onClick={() => cellClicked(2)} key={2}></div>
                                <div className='cell' onClick={() => cellClicked(3)} key={3}></div>
                                <div className='cell' onClick={() => cellClicked(4)} key={4}></div>
                                <div className='cell' onClick={() => cellClicked(5)} key={5}></div>
                                <div className='cell' onClick={() => cellClicked(6)} key={6}></div>
                                <div className='cell' onClick={() => cellClicked(7)} key={7}></div>
                                <div className='cell' onClick={() => cellClicked(8)} key={8}></div>
                            </div>
                        </div>
                    </div>
            
                <div className="countdownText">

                    <div className='fullGameMargin' style={{zIndex:"99"}}>
						<div>
							<div className="buttonContTut">
								<div style={{textAlign: 'center', fontFamily: "Poppins-Regular", fontSize: "30px", fontWeight: '600', marginBottom: '10%', color: 'white'}}>
									Tutorial Over!
								</div>
								<button className="buttonSecondary" onClick={() => reset()}>How to Play?</button>
								<button className="buttonNext" onClick={onClickResponse}>Start Playing</button>
							</div>
						</div>
					</div>
                </div>

                </div>
            }

            {iter === 6 &&

                <div>

                    <div style={{position: "absolute"}}>
                    <div style={{height: "15vh", left: 0, right: 0, marginLeft: 'auto', marginRight: 'auto', display: 'flex', textAlign: 'center', justifyContent: 'center', alignItems: 'center', fontSize: '20px', fontFamily: 'Poppins-Regular', fontWeight: '600'}}>Pair up the matching cards</div>
                        <div className="exec-main-shape">
                            <div className="card-grid" style={{ backgroundColor:"#F4F6FA", borderRadius:"10px"}}>

                            
                                
                            </div>
                        </div>
                        <div className='buttonCont'>
                            <h3 style={{color: {textColor}}}>{warningText}</h3>
                    </div>
                    </div>
            
                    <div className='countdownText'>
                        <div style={{fontFamily: 'Poppins-SemiBold', fontSize: '50px', textAlign: 'center'}}>{countdownText}</div>
                    </div>

                </div>
            }

        </div>
    );
};

export default GridTutorial;