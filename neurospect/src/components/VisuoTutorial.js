import React, { useState, useEffect } from "react";
import "./stylesheet.css";
import {TouchableHighlight, Text} from "react-native";
const VisuoTutorial = ({onTimeEnd }) => {
    const [opacityVal, setOpacityVal] = useState(0);
    const [tutorialMode, setTutorialMode] = useState(true);
    const [iter, setIter] = useState(1);
    const buttonWrong = '2px solid #CD3843';
    const buttonCorrect = '2px solid #2E8970';
    const [button1style, setButton1Style] = useState('2px solid #F6F4FA');
    const [button2style, setButton2Style] = useState('2px solid #F6F4FA');
    const [button3style, setButton3Style] = useState('2px solid #F6F4FA');
    const [button4style, setButton4Style] = useState('2px solid #F6F4FA');

    const [timeLeft, setTimeLeft] = useState(4);
	const [countdownText, setCountdownText] = useState("Ready?");

    useEffect(() => {

        const timer = setInterval(() => {
            setTimeLeft(oldTime => {
                if (oldTime <= 1) {
                    clearInterval(timer);
                    setIter(7);
                }

				if(oldTime === 3) {
					setCountdownText("Set!");
				} else if(oldTime === 2) {
					setCountdownText("Go!");
				}

				console.log(oldTime);
				
				if(iter === 6) {
					return oldTime - 1;
				} else {
					return oldTime;
				}

            });
        }, 1000);

        return () => clearInterval(timer);
    }, [onTimeEnd, iter]);
    
    const onClickResponse = () => {
        setIter(iter + 1);
    }
    const nextScene = () => {
        if(tutorialMode === false) {
            onTimeEnd();
        }
    }
    
    const button1 = () => {
        if(iter === 3) {
            setButton1Style(buttonWrong);
            setButton2Style('2px solid #F6F4FA');
            setButton3Style('2px solid #F6F4FA');
            setButton4Style('2px solid #F6F4FA');
        } else if(iter === 4) {
            setButton1Style(buttonWrong);
            setButton2Style('2px solid #F6F4FA');
            setButton3Style('2px solid #F6F4FA');
            setButton4Style('2px solid #F6F4FA');
        }
    }
    const button2 = () => {
        if(iter === 3) {
            setButton1Style('2px solid #F6F4FA');
            setButton2Style(buttonWrong);
            setButton3Style('2px solid #F6F4FA');
            setButton4Style('2px solid #F6F4FA');
        } else if(iter === 4) {
            setButton1Style('2px solid #F6F4FA');
            setButton2Style(buttonWrong);
            setButton3Style('2px solid #F6F4FA');
            setButton4Style('2px solid #F6F4FA');
        }
    }
    const button3 = () => {
        if(iter === 3) {
            setButton1Style('2px solid #F6F4FA');
            setButton2Style('2px solid #F6F4FA');
            setButton3Style(buttonCorrect);
            setButton4Style('2px solid #F6F4FA');

            setTimeout(function() {
                setIter(iter + 1);
                setButton3Style('2px solid #F6F4FA');
            }, 500);
        } else if(iter === 4) {
            setButton1Style('2px solid #F6F4FA');
            setButton2Style('2px solid #F6F4FA');
            setButton3Style(buttonWrong);
            setButton4Style('2px solid #F6F4FA');
        }
    }
    const button4 = () => {
        if(iter === 3) {
            setButton1Style('2px solid #F6F4FA');
            setButton2Style('2px solid #F6F4FA');
            setButton3Style('2px solid #F6F4FA');
            setButton4Style(buttonWrong);
        } else if(iter === 4) {
            setButton1Style('2px solid #F6F4FA');
            setButton2Style('2px solid #F6F4FA');
            setButton3Style('2px solid #F6F4FA');
            setButton4Style(buttonCorrect);

            setTimeout(function() {
                setIter(iter + 1);
            }, 500);
        }
    }


    const reset = () => {
        setIter(1);
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

                    <div style={{position: "absolute"}}>
                    <div style={{justifyContent: "center", alignItems:"center", textAlign:"center", margin:"10px"}}>
                        <h3 style={{fontFamily:"Poppins-Regular"}}>1/1</h3>
                    </div>
                    <div className="vis-main-shape">
                        <svg style={{zIndex:"inherit", backgroundColor:"#F4F6FA", borderRadius:"10px"}} width="250" height="200">
                            <polygon points="75,50 75,100 125,100 125,50" strokeWidth="0" fill="blue" />
                            <polygon points="125,50 125,100 175,100 175,50" strokeWidth="0" fill="red" />
                            <polygon points="125,100 125,150 175,150 175,100" strokeWidth="0" fill="orange" />
                        </svg>
                        <div className="tut-intro-fade" style={{position: "absolute", zIndex:1100, marginTop:"78%"}}>
                            <img src="/TutorialIcons/Arrow1.png"/>
                        </div>
                        <div className="tut-intro-fade" style={{zIndex:1004, position:"absolute", paddingTop:'10px', paddingBottom:'10px', padding: '5px', fontFamily:"Poppins-Regular", border:"solid 2px #FF9417", backgroundColor:"white", borderRadius:"6px", marginTop:"100%"}}>
                            <Text style={{padding: '30px', fontSize: "16px"}}>This is the <strong>original</strong> shape.</Text>
                        </div>
                    </div>
                    <div className='fullGameMargin'>
                        <button style={{border: button1style}} className="visuoButton">
                            <svg width="150" height="150">
                                <polygon points="45,70 45,100 75,100 75,70" strokeWidth="0" fill="blue" />
                                <polygon points="75,70 75,100 105,100 105,70" strokeWidth="0" fill="red" />
                                <polygon points="75,40 75,70 105,70 105,40" strokeWidth="0" fill="orange" />
                            </svg>
                        </button>
                        <button style={{border: button2style}} className="visuoButton">
                            <svg width="150" height="150">
                                <polygon points="45,70 45,100 75,100 75,70" strokeWidth="0" fill="blue" />
                                <polygon points="75,70 75,100 105,100 105,70" strokeWidth="0" fill="red" />
                                <polygon points="75,40 75,70 105,70 105,40" strokeWidth="0" fill="blue" />
                            </svg>
                        </button>
                        <button style={{border: button3style}} className="visuoButton">
                            <svg width="150" height="150">
                                <polygon points="75,70 75,100 105,100 105,70" strokeWidth="0" fill="blue" />
                                <polygon points="45,70 45,100 75,100 75,70" strokeWidth="0" fill="red" />
                                <polygon points="45,40 45,70 75,70 75,40" strokeWidth="0" fill="orange" />
                            </svg>
                        </button>
                        <button style={{border: button4style}} className="visuoButton">
                            <svg width="150" height="150">
                                <polygon points="45,70 45,100 75,100 75,70" strokeWidth="0" fill="blue" />
                                <polygon points="75,70 75,100 105,100 105,70" strokeWidth="0" fill="blue" />
                                <polygon points="45,40 45,70 75,70 75,40" strokeWidth="0" fill="green" />
                            </svg>
                        </button>
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

                        <div style={{position: "absolute", width: '100%'}}>
                        <div style={{justifyContent: "center", alignItems:"center", textAlign:"center", margin:"10px"}}>
                            <h3 style={{fontFamily:"Poppins-Regular"}}>1/1</h3>
                        </div>
                        <div className="vis-main-shape2">
                            <svg style={{zIndex:"inherit", backgroundColor:"#F4F6FA", borderRadius:"10px"}} width="250" height="200">
                                <polygon points="75,50 75,100 125,100 125,50" strokeWidth="0" fill="blue" />
                                <polygon points="125,50 125,100 175,100 175,50" strokeWidth="0" fill="red" />
                                <polygon points="125,100 125,150 175,150 175,100" strokeWidth="0" fill="orange" />
                            </svg>
                            <div style={{position: "absolute", zIndex:1100, marginTop:"35%"}}>
                                <img src="/TutorialIcons/Arrow2.png"/>
                            </div>
                            <div style={{zIndex:1004, position:"absolute", width: '75%', paddingTop:'10px', paddingBottom:'10px', fontFamily:"Poppins-Regular", border:"solid 2px #FF9417", backgroundColor:"white", borderRadius:"6px", marginBottom:"", padding: '5px'}}>
                                <Text style={{fontSize: '16px'}}>Click on the option that is the <strong>rotated</strong> version of the original shape.</Text>
                            </div>
                        </div>

                        <div className='fullGameMargin vis-button-container-tut'>
                            <button style={{border: button1style}} className="visuoButton">
                                <svg width="150" height="150">
                                    <polygon points="45,70 45,100 75,100 75,70" strokeWidth="0" fill="blue" />
                                    <polygon points="75,70 75,100 105,100 105,70" strokeWidth="0" fill="red" />
                                    <polygon points="75,40 75,70 105,70 105,40" strokeWidth="0" fill="orange" />
                                </svg>
                            </button>
                            <button style={{border: button2style}} className="visuoButton">
                                <svg width="150" height="150">
                                    <polygon points="45,70 45,100 75,100 75,70" strokeWidth="0" fill="blue" />
                                    <polygon points="75,70 75,100 105,100 105,70" strokeWidth="0" fill="red" />
                                    <polygon points="75,40 75,70 105,70 105,40" strokeWidth="0" fill="blue" />
                                </svg>
                            </button>
                            <button style={{border: button3style}} className="visuoButton">
                                <svg width="150" height="150">
                                    <polygon points="75,70 75,100 105,100 105,70" strokeWidth="0" fill="blue" />
                                    <polygon points="45,70 45,100 75,100 75,70" strokeWidth="0" fill="red" />
                                    <polygon points="45,40 45,70 75,70 75,40" strokeWidth="0" fill="orange" />
                                </svg>
                            </button>
                            <button style={{border: button4style}} className="visuoButton">
                                <svg width="150" height="150">
                                    <polygon points="45,70 45,100 75,100 75,70" strokeWidth="0" fill="blue" />
                                    <polygon points="75,70 75,100 105,100 105,70" strokeWidth="0" fill="blue" />
                                    <polygon points="45,40 45,70 75,70 75,40" strokeWidth="0" fill="green" />
                                </svg>
                            </button>
                        </div>

                    </div>

                    <div class="tutorialCoverNoFade"></div>
                </div>

                </div>
            }


            {iter === 3 && 
            
                <div>
                    <div>
                    <div style={{justifyContent: "center", alignItems:"center", textAlign:"center", margin:"10px"}}>
                        <h3 style={{fontFamily:"Poppins-Regular"}}>1/2</h3>
                    </div>
                    <div className="vis-main-shape">
                        <svg style={{zIndex:"inherit", backgroundColor:"#F4F6FA", borderRadius:"10px"}} width="250" height="200">
                            <polygon points="75,50 75,100 125,100 125,50" strokeWidth="0" fill="blue" />
                            <polygon points="125,50 125,100 175,100 175,50" strokeWidth="0" fill="red" />
                            <polygon points="125,100 125,150 175,150 175,100" strokeWidth="0" fill="orange" />
                        </svg>
                    </div>
                    <div className='fullGameMargin'>
                        <button style={{border: button1style}} onClick={button1} className="visuoButton">
                            <svg width="150" height="150">
                                <polygon points="45,70 45,100 75,100 75,70" strokeWidth="0" fill="blue" />
                                <polygon points="75,70 75,100 105,100 105,70" strokeWidth="0" fill="red" />
                                <polygon points="75,40 75,70 105,70 105,40" strokeWidth="0" fill="orange" />
                            </svg>
                        </button>
                        <button style={{border: button2style}} onClick={button2} className="visuoButton">
                            <svg width="150" height="150">
                                <polygon points="45,70 45,100 75,100 75,70" strokeWidth="0" fill="blue" />
                                <polygon points="75,70 75,100 105,100 105,70" strokeWidth="0" fill="red" />
                                <polygon points="75,40 75,70 105,70 105,40" strokeWidth="0" fill="blue" />
                            </svg>
                        </button>
                        <button style={{border: button3style}} onClick={button3} className="visuoButton">
                            <svg width="150" height="150">
                                <polygon points="75,70 75,100 105,100 105,70" strokeWidth="0" fill="blue" />
                                <polygon points="45,70 45,100 75,100 75,70" strokeWidth="0" fill="red" />
                                <polygon points="45,40 45,70 75,70 75,40" strokeWidth="0" fill="orange" />
                            </svg>
                        </button>
                        <button style={{border: button4style}} onClick={button4} className="visuoButton">
                            <svg width="150" height="150">
                                <polygon points="45,70 45,100 75,100 75,70" strokeWidth="0" fill="blue" />
                                <polygon points="75,70 75,100 105,100 105,70" strokeWidth="0" fill="blue" />
                                <polygon points="45,40 45,70 75,70 75,40" strokeWidth="0" fill="green" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            
            }

            {iter === 4 && 
            
                <div>
                    <div>
                    <div style={{justifyContent: "center", alignItems:"center", textAlign:"center", margin:"10px"}}>
                        <h3 style={{fontFamily:"Poppins-Regular"}}>2/2</h3>
                    </div>
                    <div className="vis-main-shape">
                        <svg style={{zIndex:"inherit", backgroundColor:"#F4F6FA", borderRadius:"10px"}} width="250" height="200">
                            <polygon points="75,50 75,100 125,100 125,50" strokeWidth="0" fill="red" />
                            <polygon points="125,50 125,100 175,100 175,50" strokeWidth="0" fill="green" />
                            <polygon points="75,100 75,150 125,150 125,100" strokeWidth="0" fill="orange" />
                        </svg>
                    </div>
                    <div className='fullGameMargin'>
                        <button style={{border: button1style}} onClick={button1} className="visuoButton">
                            <svg width="150" height="150">
                                <polygon points="45,70 45,100 75,100 75,70" strokeWidth="0" fill="blue" />
                                <polygon points="75,70 75,100 105,100 105,70" strokeWidth="0" fill="green" />
                                <polygon points="45,40 45,70 75,70 75,40" strokeWidth="0" fill="green" />
                            </svg>
                        </button>
                        <button style={{border: button2style}} onClick={button2} className="visuoButton">
                            <svg width="150" height="150">
                                <polygon points="75,70 75,100 105,100 105,70" strokeWidth="0" fill="orange" />
                                <polygon points="45,70 45,100 75,100 75,70" strokeWidth="0" fill="red" />
                                <polygon points="75,40 75,70 105,70 105,40" strokeWidth="0" fill="orange" />
                            </svg>
                        </button>
                        <button style={{border: button3style}} onClick={button3} className="visuoButton">
                            <svg width="150" height="150">
                                <polygon points="45,70 45,100 75,100 75,70" strokeWidth="0" fill="green" />
                                <polygon points="75,70 75,100 105,100 105,70" strokeWidth="0" fill="red" />
                                <polygon points="45,40 45,70 75,70 75,40" strokeWidth="0" fill="green" />
                            </svg>
                        </button>
                        <button style={{border: button4style}} onClick={button4} className="visuoButton">
                            <svg width="150" height="150">
                                <polygon points="45,70 45,100 75,100 75,70" strokeWidth="0" fill="green" />
                                <polygon points="75,70 75,100 105,100 105,70" strokeWidth="0" fill="red" />
                                <polygon points="75,40 75,70 105,70 105,40" strokeWidth="0" fill="orange" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            
            }


            {iter === 5 &&

                <div>

                <div style={{position: 'absolute'}}>

                    <div style={{justifyContent: "center", alignItems:"center", textAlign:"center", margin:"10px"}}>
                        <h3 style={{fontFamily:"Poppins-Regular"}}>2/2</h3>
                    </div>
                    <div className="vis-main-shape2">
                        <svg style={{zIndex:"inherit", backgroundColor:"#F4F6FA", borderRadius:"10px"}} width="250" height="200">
                            <polygon points="75,50 75,100 125,100 125,50" strokeWidth="0" fill="red" />
                            <polygon points="125,50 125,100 175,100 175,50" strokeWidth="0" fill="green" />
                            <polygon points="75,100 75,150 125,150 125,100" strokeWidth="0" fill="orange" />
                        </svg>
                    </div>
                    <div className='fullGameMargin'>
                        <button style={{border: button1style}} onClick={button1} className="visuoButton">
                            <svg width="150" height="150">
                                <polygon points="45,70 45,100 75,100 75,70" strokeWidth="0" fill="blue" />
                                <polygon points="75,70 75,100 105,100 105,70" strokeWidth="0" fill="green" />
                                <polygon points="45,40 45,70 75,70 75,40" strokeWidth="0" fill="green" />
                            </svg>
                        </button>
                        <button style={{border: button2style}} onClick={button2} className="visuoButton">
                            <svg width="150" height="150">
                                <polygon points="75,70 75,100 105,100 105,70" strokeWidth="0" fill="orange" />
                                <polygon points="45,70 45,100 75,100 75,70" strokeWidth="0" fill="red" />
                                <polygon points="75,40 75,70 105,70 105,40" strokeWidth="0" fill="orange" />
                            </svg>
                        </button>
                        <button style={{border: button3style}} onClick={button3} className="visuoButton">
                            <svg width="150" height="150">
                                <polygon points="45,70 45,100 75,100 75,70" strokeWidth="0" fill="green" />
                                <polygon points="75,70 75,100 105,100 105,70" strokeWidth="0" fill="red" />
                                <polygon points="45,40 45,70 75,70 75,40" strokeWidth="0" fill="green" />
                            </svg>
                        </button>
                        <button style={{border: button4style}} onClick={button4} className="visuoButton">
                            <svg width="150" height="150">
                                <polygon points="45,70 45,100 75,100 75,70" strokeWidth="0" fill="green" />
                                <polygon points="75,70 75,100 105,100 105,70" strokeWidth="0" fill="red" />
                                <polygon points="75,40 75,70 105,70 105,40" strokeWidth="0" fill="orange" />
                            </svg>
                        </button>
                    </div>

                </div>
            
                <div style={{width:'100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.8)', backdropFilter: 'blur(10px)', position: 'absolute', zIndex: 1}}>

                    <div className='fullGameMargin' style={{marginTop:"60vh", textAlign: "center", zIndex:"99", position:"absolute", display:"flex", alignItems: "center", justifyContent:"center"}}>
                        <div>
                            <div className="buttonCont">
                            <div style={{fontFamily: "Poppins-Regular", fontSize: "30px", fontWeight: '600', marginBottom: '10%', color: 'white'}}>
                                Tutorial Over!
                            </div>
                            
                                <button className="buttonSecondary" onClick={() => reset()}>How To Play</button>
                                <button className="buttonNext" onClick={onClickResponse}>Start Playing</button>
                            </div>
                        </div>
                    </div>
                </div>

                </div>
            }

            {iter === 6 && 

		        <div>

					<div style={{position: 'absolute'}}>

                    <div style={{justifyContent: "center", alignItems:"center", textAlign:"center", margin:"10px"}}>
                        <h3 style={{fontFamily:"Poppins-Regular"}}>2/2</h3>
                    </div>
                    <div className="vis-main-shape2">
                        <svg style={{zIndex:"inherit", backgroundColor:"#F4F6FA", borderRadius:"10px"}} width="250" height="200">
                            <polygon points="75,50 75,100 125,100 125,50" strokeWidth="0" fill="red" />
                            <polygon points="125,50 125,100 175,100 175,50" strokeWidth="0" fill="green" />
                            <polygon points="75,100 75,150 125,150 125,100" strokeWidth="0" fill="orange" />
                        </svg>
                    </div>
                    <div className='fullGameMargin'>
                        <button style={{border: button1style}} onClick={button1} className="visuoButton">
                            <svg width="150" height="150">
                                <polygon points="45,70 45,100 75,100 75,70" strokeWidth="0" fill="blue" />
                                <polygon points="75,70 75,100 105,100 105,70" strokeWidth="0" fill="green" />
                                <polygon points="45,40 45,70 75,70 75,40" strokeWidth="0" fill="green" />
                            </svg>
                        </button>
                        <button style={{border: button2style}} onClick={button2} className="visuoButton">
                            <svg width="150" height="150">
                                <polygon points="75,70 75,100 105,100 105,70" strokeWidth="0" fill="orange" />
                                <polygon points="45,70 45,100 75,100 75,70" strokeWidth="0" fill="red" />
                                <polygon points="75,40 75,70 105,70 105,40" strokeWidth="0" fill="orange" />
                            </svg>
                        </button>
                        <button style={{border: button3style}} onClick={button3} className="visuoButton">
                            <svg width="150" height="150">
                                <polygon points="45,70 45,100 75,100 75,70" strokeWidth="0" fill="green" />
                                <polygon points="75,70 75,100 105,100 105,70" strokeWidth="0" fill="red" />
                                <polygon points="45,40 45,70 75,70 75,40" strokeWidth="0" fill="green" />
                            </svg>
                        </button>
                        <button style={{border: button4style}} onClick={button4} className="visuoButton">
                            <svg width="150" height="150">
                                <polygon points="45,70 45,100 75,100 75,70" strokeWidth="0" fill="green" />
                                <polygon points="75,70 75,100 105,100 105,70" strokeWidth="0" fill="red" />
                                <polygon points="75,40 75,70 105,70 105,40" strokeWidth="0" fill="orange" />
                            </svg>
                        </button>
                    </div>

                </div>

				<div className='countdownText'>
					<div style={{fontFamily: 'Poppins-SemiBold', fontSize: '50px', textAlign: 'center'}}>{countdownText}</div>
				</div>

				</div>

		}

        {iter === 7 &&

                <div>

                <div style={{position: 'absolute'}}>

                    <div style={{justifyContent: "center", alignItems:"center", textAlign:"center", margin:"10px"}}>
                        <h3 style={{fontFamily:"Poppins-Regular"}}>2/2</h3>
                    </div>
                    <div className="vis-main-shape2">
                        <svg style={{zIndex:"inherit", backgroundColor:"#F4F6FA", borderRadius:"10px"}} width="250" height="200">
                            <polygon points="75,50 75,100 125,100 125,50" strokeWidth="0" fill="red" />
                            <polygon points="125,50 125,100 175,100 175,50" strokeWidth="0" fill="green" />
                            <polygon points="75,100 75,150 125,150 125,100" strokeWidth="0" fill="orange" />
                        </svg>
                    </div>
                    <div className='fullGameMargin'>
                        <button style={{border: button1style}} onClick={button1} className="visuoButton">
                            <svg width="150" height="150">
                                <polygon points="45,70 45,100 75,100 75,70" strokeWidth="0" fill="blue" />
                                <polygon points="75,70 75,100 105,100 105,70" strokeWidth="0" fill="green" />
                                <polygon points="45,40 45,70 75,70 75,40" strokeWidth="0" fill="green" />
                            </svg>
                        </button>
                        <button style={{border: button2style}} onClick={button2} className="visuoButton">
                            <svg width="150" height="150">
                                <polygon points="75,70 75,100 105,100 105,70" strokeWidth="0" fill="orange" />
                                <polygon points="45,70 45,100 75,100 75,70" strokeWidth="0" fill="red" />
                                <polygon points="75,40 75,70 105,70 105,40" strokeWidth="0" fill="orange" />
                            </svg>
                        </button>
                        <button style={{border: button3style}} onClick={button3} className="visuoButton">
                            <svg width="150" height="150">
                                <polygon points="45,70 45,100 75,100 75,70" strokeWidth="0" fill="green" />
                                <polygon points="75,70 75,100 105,100 105,70" strokeWidth="0" fill="red" />
                                <polygon points="45,40 45,70 75,70 75,40" strokeWidth="0" fill="green" />
                            </svg>
                        </button>
                        <button style={{border: button4style}} onClick={button4} className="visuoButton">
                            <svg width="150" height="150">
                                <polygon points="45,70 45,100 75,100 75,70" strokeWidth="0" fill="green" />
                                <polygon points="75,70 75,100 105,100 105,70" strokeWidth="0" fill="red" />
                                <polygon points="75,40 75,70 105,70 105,40" strokeWidth="0" fill="orange" />
                            </svg>
                        </button>
                    </div>

                </div>
            
                <div style={{width:'100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.8)', backdropFilter: 'blur(10px)', position: 'absolute', zIndex: 1}}>

                    <div className='fullGameMargin' style={{marginTop:"60vh", textAlign: "center", zIndex:"99", position:"absolute", display:"flex", alignItems: "center", justifyContent:"center"}}>
                        <div>
                            <div className="buttonCont">
                            <div style={{fontFamily: "Poppins-Regular", fontSize: "30px", fontWeight: '600', marginBottom: '10%', color: 'white'}}>
                                You have <span class="highlight">60 seconds</span> to complete <span class="highlight">15 puzzles</span>
                            </div>
                            
                                <button className="buttonNext" onClick={onTimeEnd}>Start</button>
                            </div>
                        </div>
                    </div>
                </div>

                </div>
            }

        </div>
    );
};

export default VisuoTutorial;