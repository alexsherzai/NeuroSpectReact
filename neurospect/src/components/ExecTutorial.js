import React, { useState, useEffect } from "react";
import "./stylesheet.css";
import {TouchableHighlight, Text} from "react-native";
import { click } from "@testing-library/user-event/dist/click";
const ExecTutorial = ({onTimeEnd }) => {
    const [opacityVal, setOpacityVal] = useState(0);
    const [tutorialMode, setTutorialMode] = useState(true);
    const [iter, setIter] = useState(1);
    const buttonWrong = '2px solid #CD3843';
    const buttonCorrect = '2px solid #2E8970';
    const [button1style, setButton1Style] = useState('2px solid #F6F4FA');
    const [button2style, setButton2Style] = useState('2px solid #F6F4FA');
    const [button3style, setButton3Style] = useState('2px solid #F6F4FA');
    const [button4style, setButton4Style] = useState('2px solid #F6F4FA');

    const [warningText, setWarningText] = useState("");
    const [textColor, setTextColor] = useState("");

    const [showButton, setShowButton] = useState(false);

    const shuffledShapes = [
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                <pattern id="pattern-dots-green" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle fill = "green" cx="5" cy="5" r="4"></circle>
                    <circle fill = "green" cx="15" cy="15" r="4"></circle>
                    <circle fill = "green" cx="5" cy="15" r="4"></circle>
                    <circle fill = "green" cx="15" cy="5" r="4"></circle>
                </pattern>
                <rect x="5" y="5" width="40" height="40" stroke="black" stroke-width="1.5" fill="url(#pattern-dots-green)" />
            </svg>,
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                <defs>
                            <radialGradient id="pattern-gradient-red">
                            <stop offset="3%" stop-color="white" />
                            <stop offset="95%" stop-color="red" />
                            </radialGradient>
                        </defs>
                <rect x="5" y="5" width="40" height="40" stroke="black" stroke-width="1.5" fill="url(#pattern-gradient-red)" />
            </svg>,
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                <pattern id="pattern-dots-blue" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle fill = "blue" cx="5" cy="5" r="4"></circle>
                    <circle fill = "blue" cx="15" cy="15" r="4"></circle>
                    <circle fill = "blue" cx="5" cy="15" r="4"></circle>
                    <circle fill = "blue" cx="15" cy="5" r="4"></circle>
                </pattern>
                <circle cx="25" cy="25" r="20" stroke="black" stroke-width="1.5" fill="url(#pattern-dots-blue)" />
            </svg>,
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                <defs>
                    <pattern id="pattern-lines-teal" fill="blue" x="9" y="9" width="16" height="16" patternUnits="userSpaceOnUse">
                        <rect fill = "teal" x="0" width="20" height="5" y="0"></rect>
                    </pattern>
                </defs>
                <circle cx="25" cy="25" r="20" stroke="black" stroke-width="1.5" fill="url(#pattern-lines-teal)" opacity="1"/>
            </svg>
    ];

    const [solvedCards, setSolvedCards] = useState([]);
    const [clickedShapes, setClickedShapes] = useState([]);

    const [timeLeft, setTimeLeft] = useState(4);
	const [countdownText, setCountdownText] = useState("Ready?");

    const cardClicked = (index) => {
        if(clickedShapes.length < 2) {
            if(clickedShapes.includes(index)) {
                const newClicked = clickedShapes.filter((clickedIndex) => clickedIndex !== index);
                setClickedShapes(newClicked);
            } else {
                setClickedShapes([...clickedShapes, index]);
            }
        } else {
            if(clickedShapes.includes(index)) {
                const newClicked = clickedShapes.filter((clickedIndex) => clickedIndex !== index);
                setClickedShapes(newClicked);
            }
        }
    };

    const checkMatch = () => {
        let val = false;
        if((clickedShapes[0] === 1 && clickedShapes[1] === 0) || (clickedShapes[0] === 0 && clickedShapes[1] === 1) || (clickedShapes[0] === 2 && clickedShapes[1] === 3) || (clickedShapes[0] === 3 && clickedShapes[1] === 2)) {
            val = true;
        }

        return val;
    }


    useEffect(() => {
        setWarningText("");

        if(clickedShapes.length === 2) {
            if(checkMatch()) {
                solvedCards.push.apply(solvedCards, clickedShapes);
                setWarningText("Nice!");
                setTextColor("#2E8970");
            } else {
                setWarningText("Not a pair!");
                setTextColor("#CD3843");
            }
            clickedShapes.length = 0;
        }

        if(solvedCards.length === 4) {
            setShowButton(true);
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
				
				if(iter === 5) {
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
        setButton4Style('2px solid #F6F4FA');
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
                    
                    <div style={{position: "absolute", "height": "15vh", left: 0, right: 0, marginLeft: 'auto', marginRight: 'auto', display: 'flex', textAlign: 'center', justifyContent: 'center', alignItems: 'center', fontSize: '20px', fontFamily: 'Poppins-Regular', fontWeight: '600'}}>Pair up the matching cards</div>
                    <div className="exec-main-shape" style={{marginTop: "15vh"}}>
                        <div className="card-grid" style={{zIndex: "inherit", backgroundColor:"#F4F6FA", borderRadius:"10px"}}>
                            <div className="card-tut">
                                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                                    <pattern id="pattern-dots-green" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                        <circle fill = "green" cx="5" cy="5" r="4"></circle>
                                        <circle fill = "green" cx="15" cy="15" r="4"></circle>
                                        <circle fill = "green" cx="5" cy="15" r="4"></circle>
                                        <circle fill = "green" cx="15" cy="5" r="4"></circle>
                                    </pattern>
                                    <rect x="5" y="5" width="40" height="40" stroke="black" stroke-width="1.5" fill="url(#pattern-dots-green)" />
                                </svg>
                            </div>
                            <div className="card-tut">
                                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                                    <defs>
                                                <radialGradient id="pattern-gradient-red">
                                                <stop offset="3%" stop-color="white" />
                                                <stop offset="95%" stop-color="red" />
                                                </radialGradient>
                                            </defs>
                                    <rect x="5" y="5" width="40" height="40" stroke="black" stroke-width="1.5" fill="url(#pattern-gradient-red)" />
                                </svg>
                            </div>
                            <div className="card-tut">
                                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                                    <pattern id="pattern-dots-blue" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                        <circle fill = "blue" cx="5" cy="5" r="4"></circle>
                                        <circle fill = "blue" cx="15" cy="15" r="4"></circle>
                                        <circle fill = "blue" cx="5" cy="15" r="4"></circle>
                                        <circle fill = "blue" cx="15" cy="5" r="4"></circle>
                                    </pattern>
                                    <circle cx="25" cy="25" r="20" stroke="black" stroke-width="1.5" fill="url(#pattern-dots-blue)" />
                                </svg>
                            </div>
                            <div className="card-tut">
                                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                                    <defs>
                                        <pattern id="pattern-lines-teal" fill="blue" x="9" y="9" width="16" height="16" patternUnits="userSpaceOnUse">
                                            <rect fill = "teal" x="0" width="20" height="5" y="0"></rect>
                                        </pattern>
                                    </defs>
                                    <circle cx="25" cy="25" r="20" stroke="black" stroke-width="1.5" fill="url(#pattern-lines-teal)" opacity="1"/>
                                </svg>
                            </div>
                            
                        </div>
                    </div>

                    <div className="tut-intro-fade" style={{position: "absolute", zIndex:1100, marginLeft: "60%", marginTop: "31vh"}}>
                        <img src="/TutorialIcons/Arrow1.png"/>
                    </div>
                    <div className="tut-intro-fade" style={{zIndex:1004, position:"absolute", paddingTop:'10px', paddingBottom:'10px', padding: '5px', fontFamily:"Poppins-Regular", border:"solid 2px #FF9417", backgroundColor:"white", borderRadius:"6px", marginLeft: "4%", marginTop: "38vh"}}>
                        <Text style={{padding: '30px', fontSize: "16px"}}>Find a <strong>matching element</strong> in two shapes</Text>
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

                        <div>
                        
                        <div style={{position: "absolute", "height": "15vh", left: 0, right: 0, marginLeft: 'auto', marginRight: 'auto', display: 'flex', textAlign: 'center', justifyContent: 'center', alignItems: 'center', fontSize: '20px', fontFamily: 'Poppins-Regular', fontWeight: '600'}}>Pair up the matching cards</div>
                        <div className="exec-main-shape"  style={{marginTop: "15vh"}}>
                            <div className="card-grid" style={{zIndex: "inherit", backgroundColor:"#F4F6FA", borderRadius:"10px"}}>
                                <div className="card-tut">
                                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                                        <pattern id="pattern-dots-green" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                            <circle fill = "green" cx="5" cy="5" r="4"></circle>
                                            <circle fill = "green" cx="15" cy="15" r="4"></circle>
                                            <circle fill = "green" cx="5" cy="15" r="4"></circle>
                                            <circle fill = "green" cx="15" cy="5" r="4"></circle>
                                        </pattern>
                                        <rect x="5" y="5" width="40" height="40" stroke="black" stroke-width="1.5" fill="url(#pattern-dots-green)" />
                                    </svg>
                                </div>
                                <div className="card-tut">
                                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                                        <defs>
                                                    <radialGradient id="pattern-gradient-red">
                                                    <stop offset="3%" stop-color="white" />
                                                    <stop offset="95%" stop-color="red" />
                                                    </radialGradient>
                                                </defs>
                                        <rect x="5" y="5" width="40" height="40" stroke="black" stroke-width="1.5" fill="url(#pattern-gradient-red)" />
                                    </svg>
                                </div>
                                <div className="card-tut">
                                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                                        <pattern id="pattern-dots-blue" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                            <circle fill = "blue" cx="5" cy="5" r="4"></circle>
                                            <circle fill = "blue" cx="15" cy="15" r="4"></circle>
                                            <circle fill = "blue" cx="5" cy="15" r="4"></circle>
                                            <circle fill = "blue" cx="15" cy="5" r="4"></circle>
                                        </pattern>
                                        <circle cx="25" cy="25" r="20" stroke="black" stroke-width="1.5" fill="url(#pattern-dots-blue)" />
                                    </svg>
                                </div>
                                <div className="card-tut">
                                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                                        <defs>
                                            <pattern id="pattern-lines-teal" fill="blue" x="9" y="9" width="16" height="16" patternUnits="userSpaceOnUse">
                                                <rect fill = "teal" x="0" width="20" height="5" y="0"></rect>
                                            </pattern>
                                        </defs>
                                        <circle cx="25" cy="25" r="20" stroke="black" stroke-width="1.5" fill="url(#pattern-lines-teal)" opacity="1"/>
                                    </svg>
                                </div>
                                
                            </div>
                        </div>

                        <div style={{position: "absolute", zIndex:1100, marginLeft: "68%", marginTop: "31vh"}}>
                            <img src="/TutorialIcons/Arrow1.png"/>
                        </div>
                        <div style={{zIndex:1004, position:"absolute", paddingTop:'10px', paddingBottom:'10px', padding: '5px', fontFamily:"Poppins-Regular", border:"solid 2px #FF9417", backgroundColor:"white", borderRadius:"6px", marginTop: "38vh", marginLeft: "5%"}}>
                            <Text style={{padding: '30px', fontSize: "16px"}}>Tap two <strong>cards</strong> which you think match</Text>
                        </div>
                        
                        </div>
                        <div class="tutorialCoverNoFade"></div>
                    </div>
                </div>
            }


            {iter === 3 && 
            
                <div>
                    <div style={{"height": "15vh", left: 0, right: 0, marginLeft: 'auto', marginRight: 'auto', display: 'flex', textAlign: 'center', justifyContent: 'center', alignItems: 'center', fontSize: '20px', fontFamily: 'Poppins-Regular', fontWeight: '600'}}>Pair up the matching cards</div>
                        <div className="exec-main-shape">
                            <div className="card-grid" style={{zIndex: "inherit", backgroundColor:"#F4F6FA", borderRadius:"10px"}}>

                            {shuffledShapes.map((shape, index) => (
                                solvedCards.includes(index) ?
                                (<div key={index} className="cardSolved">
                                {shape}
                                </div>)
                                :
                                (clickedShapes.includes(index) ?
                                (<div key={index} className="cardClicked" onClick={() => cardClicked(index)}>
                                {shape}
                                </div>)
                                :
                                (<div key={index} className="card" onClick={() => cardClicked(index)}>
                                {shape}
                                </div>))
                            ))}
                                
                            </div>
                        </div>
                        <div className='buttonCont'>
                            <h3 style={{color: {textColor}}}>{warningText}</h3>
                            {showButton ?
                            <button className="buttonNext" onClick={() => {setIter(4)}}>Next!</button>
                            :
                            <div></div>
                            }
                        </div>
                </div>
            
            }


            {iter === 4 &&

                <div>

                    <div>
                    <div style={{position: "absolute", height: "15vh", left: 0, right: 0, marginLeft: 'auto', marginRight: 'auto', display: 'flex', textAlign: 'center', justifyContent: 'center', alignItems: 'center', fontSize: '20px', fontFamily: 'Poppins-Regular', fontWeight: '600'}}>Pair up the matching cards</div>
                        <div className="exec-main-shape" style={{marginTop: "15vh", zIndex: 0}}>
                            <div className="card-grid" style={{ zIndex: 0, backgroundColor: "#F4F6FA", borderRadius:"10px"}}>

                            {shuffledShapes.map((shape, index) => (
                                solvedCards.includes(index) ?
                                (<div key={index} className="cardSolved">
                                {shape}
                                </div>)
                                :
                                (clickedShapes.includes(index) ?
                                (<div key={index} className="cardClicked" onClick={() => cardClicked(index)}>
                                {shape}
                                </div>)
                                :
                                (<div key={index} className="card" onClick={() => cardClicked(index)}>
                                {shape}
                                </div>))
                            ))}
                                
                            </div>
                        </div>
                        <div className='buttonCont'>
                            <h3 style={{textColor: {textColor}}}>{warningText}</h3>
                    </div>
                    </div>
            
                <div className="countdownText">

                    <div className='fullGameMargin' style={{zIndex:"99"}}>
						<div>
							<div className="buttonContTut">
								<div style={{textAlign: 'center', fontFamily: "Poppins-Regular", fontSize: "30px", fontWeight: '600', marginBottom: '10%', color: 'white'}}>
									Tutorial Over!
								</div>
								<button className="buttonSecondary" onClick={() => reset()}>Play Tutorial Again</button>
								<button className="buttonNext" onClick={onClickResponse}>Start Playing</button>
							</div>
						</div>
					</div>
                </div>

                </div>
            }

            {iter === 5 &&

                <div>

                    <div style={{position: "absolute"}}>
                    <div style={{height: "15vh", left: 0, right: 0, marginLeft: 'auto', marginRight: 'auto', display: 'flex', textAlign: 'center', justifyContent: 'center', alignItems: 'center', fontSize: '20px', fontFamily: 'Poppins-Regular', fontWeight: '600'}}>Pair up the matching cards</div>
                        <div className="exec-main-shape">
                            <div className="card-grid" style={{ backgroundColor:"#F4F6FA", borderRadius:"10px"}}>

                            {shuffledShapes.map((shape, index) => (
                                solvedCards.includes(index) ?
                                (<div key={index} className="cardSolved">
                                {shape}
                                </div>)
                                :
                                (clickedShapes.includes(index) ?
                                (<div key={index} className="cardClicked" onClick={() => cardClicked(index)}>
                                {shape}
                                </div>)
                                :
                                (<div key={index} className="card" onClick={() => cardClicked(index)}>
                                {shape}
                                </div>))
                            ))}
                                
                            </div>
                        </div>
                        <div className='buttonCont'>
                            <h3 style={{textColor: {textColor}}}>{warningText}</h3>
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

export default ExecTutorial;