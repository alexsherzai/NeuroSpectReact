import React, { useState, useEffect } from "react";
import "./stylesheet.css";
import {TouchableHighlight, Text} from "react-native";
const VisuoTutorial = ({onTimeEnd }) => {
    const [opacityVal, setOpacityVal] = useState(0);
    const [tutorialMode, setTutorialMode] = useState(true);
    const [iter, setIter] = useState(1);
    const buttonWrong = '2px solid #CD3843';
    const buttonCorrect = '2px solid #2E8970';
    const [button1style, setButton1Style] = useState('');
    const [button2style, setButton2Style] = useState('');
    const [button3style, setButton3Style] = useState('');
    const [button4style, setButton4Style] = useState('');

    useEffect(() => {
    });
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
            setButton2Style('');
            setButton3Style('');
            setButton4Style('');
        } else if(iter === 4) {
            setButton1Style(buttonWrong);
            setButton2Style('');
            setButton3Style('');
            setButton4Style('');
        }
    }
    const button2 = () => {
        if(iter === 3) {
            setButton1Style('');
            setButton2Style(buttonWrong);
            setButton3Style('');
            setButton4Style('');
        } else if(iter === 4) {
            setButton1Style('');
            setButton2Style(buttonWrong);
            setButton3Style('');
            setButton4Style('');
        }
    }
    const button3 = () => {
        if(iter === 3) {
            setButton1Style('');
            setButton2Style('');
            setButton3Style(buttonCorrect);
            setButton4Style('');

            setTimeout(function() {
                setIter(iter + 1);
                setButton3Style('');
            }, 500);
        } else if(iter === 4) {
            setButton1Style('');
            setButton2Style('');
            setButton3Style(buttonWrong);
            setButton4Style('');
        }
    }
    const button4 = () => {
        if(iter === 3) {
            setButton1Style('');
            setButton2Style('');
            setButton3Style('');
            setButton4Style(buttonWrong);
        } else if(iter === 4) {
            setButton1Style('');
            setButton2Style('');
            setButton3Style('');
            setButton4Style(buttonCorrect);

            setTimeout(function() {
                setIter(iter + 1);
            }, 500);
        }
    }


    const reset = () => {
        setIter(1);
        setButton4Style('');
    }

    return (
        <div>
            {iter === 1 &&

            <div onClick={onClickResponse}>
                <div>
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
                        <div className="tut-intro-fade" style={{zIndex:1004, position:"absolute", fontFamily:"Poppins-Regular", border:"solid 2px #FF9417", backgroundColor:"white", borderRadius:"6px", marginTop:"100%"}}>
                            <Text style={{margin: "10px"}}>This is the <strong>original</strong> shape.</Text>
                        </div>
                    </div>
                    <div className='fullGameMargin'>
                        <button className="visuoButton">
                            <svg width="150" height="150">
                                <polygon points="45,70 45,100 75,100 75,70" strokeWidth="0" fill="blue" />
                                <polygon points="75,70 75,100 105,100 105,70" strokeWidth="0" fill="red" />
                                <polygon points="75,40 75,70 105,70 105,40" strokeWidth="0" fill="orange" />
                            </svg>
                        </button>
                        <button className="visuoButton">
                            <svg width="150" height="150">
                                <polygon points="45,70 45,100 75,100 75,70" strokeWidth="0" fill="blue" />
                                <polygon points="75,70 75,100 105,100 105,70" strokeWidth="0" fill="red" />
                                <polygon points="75,40 75,70 105,70 105,40" strokeWidth="0" fill="blue" />
                            </svg>
                        </button>
                        <button className="visuoButton">
                            <svg width="150" height="150">
                                <polygon points="75,70 75,100 105,100 105,70" strokeWidth="0" fill="blue" />
                                <polygon points="45,70 45,100 75,100 75,70" strokeWidth="0" fill="red" />
                                <polygon points="45,40 45,70 75,70 75,40" strokeWidth="0" fill="orange" />
                            </svg>
                        </button>
                        <button className="visuoButton">
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
                        <div>
                        <div style={{justifyContent: "center", alignItems:"center", textAlign:"center", margin:"10px"}}>
                            <h3 style={{fontFamily:"Poppins-Regular"}}>1/1</h3>
                        </div>
                        <div className="vis-main-shape2">
                            <div style={{height:'35%', marginBottom: '18%'}} class="tutorialCoverNoFade"></div>
                            <svg style={{zIndex:"inherit", backgroundColor:"#F4F6FA", borderRadius:"10px"}} width="250" height="200">
                                <polygon points="75,50 75,100 125,100 125,50" strokeWidth="0" fill="blue" />
                                <polygon points="125,50 125,100 175,100 175,50" strokeWidth="0" fill="red" />
                                <polygon points="125,100 125,150 175,150 175,100" strokeWidth="0" fill="orange" />
                            </svg>

                            <div style={{position: "absolute", zIndex:1100, marginTop: '30%'}}>
                                <img src="/TutorialIcons/Arrow2.png"/>
                            </div>
                            <div style={{zIndex:1004, position:"absolute", width: '80%', fontFamily:"Poppins-Regular", border:"solid 2px #FF9417", backgroundColor:"white", borderRadius:"6px", marginBottom:""}}>
                                <Text style={{margin: "10px"}}>Click on the option that is the <strong>rotated</strong> version of the original shape.</Text>
                            </div>
                        </div>

                        
                        </div>

                        <div className="fullGameMargin vis-button-container">
                            <button className="visuoButton">
                                <svg width="150" height="150">
                                    <polygon points="45,70 45,100 75,100 75,70" strokeWidth="0" fill="blue" />
                                    <polygon points="75,70 75,100 105,100 105,70" strokeWidth="0" fill="red" />
                                    <polygon points="75,40 75,70 105,70 105,40" strokeWidth="0" fill="orange" />
                                </svg>
                            </button>
                            <button className="visuoButton">
                                <svg width="150" height="150">
                                    <polygon points="45,70 45,100 75,100 75,70" strokeWidth="0" fill="blue" />
                                    <polygon points="75,70 75,100 105,100 105,70" strokeWidth="0" fill="red" />
                                    <polygon points="75,40 75,70 105,70 105,40" strokeWidth="0" fill="blue" />
                                </svg>
                            </button>
                            <button className="visuoButton">
                                <svg width="150" height="150">
                                    <polygon points="75,70 75,100 105,100 105,70" strokeWidth="0" fill="blue" />
                                    <polygon points="45,70 45,100 75,100 75,70" strokeWidth="0" fill="red" />
                                    <polygon points="45,40 45,70 75,70 75,40" strokeWidth="0" fill="orange" />
                                </svg>
                            </button>
                            <button className="visuoButton">
                                <svg width="150" height="150">
                                    <polygon points="45,70 45,100 75,100 75,70" strokeWidth="0" fill="blue" />
                                    <polygon points="75,70 75,100 105,100 105,70" strokeWidth="0" fill="blue" />
                                    <polygon points="45,40 45,70 75,70 75,40" strokeWidth="0" fill="green" />
                                </svg>
                            </button>
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
                <div className='fullGameMargin' style={{marginTop:"35vh", textAlign: "center", zIndex:"99", position:"absolute", display:"flex", alignItems: "center", justifyContent:"center"}}>
                    <div>
                        <div style={{fontFamily: "Poppins-Regular", margin: "15px"}}>
                            Great! Now you are ready to play the game! Don't forget that in the game, you will have 90 seconds!
                        </div>
                        <div className="buttonCont">
                            <button className="buttonSecondary" onClick={() => reset()}>How To Play</button>
                        </div>
                        <div className="buttonCont">
                            <button className="buttonNext" onClick={onTimeEnd}>Start Playing</button>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default VisuoTutorial;