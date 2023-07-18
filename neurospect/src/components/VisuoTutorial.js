import React, { useState, useEffect } from 'react';
import './stylesheet.css';
import {TouchableHighlight, Text} from 'react-native';

const VisuoTutorial = ({onTimeEnd }) => {

	const [opacityVal, setOpacityVal] = useState(0);
	const [tutorialMode, setTutorialMode] = useState(true);
	const [iter, setIter] = useState(1);

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

    const buttonCorrect = () => {
		setOpacityVal(100);
		setTutorialMode(false);
        console.log(opacityVal);
    }
    const buttonWrong = () => {

    }
    const reset = () => {
		setOpacityVal(0);
		setTutorialMode(true);
	}


	return (
		<div>
            {iter === 1 && 
            <div onClick={onClickResponse}>
                <div>
                    <div style={{position: 'absolute'}}>
                    <div style={{justifyContent: 'center', alignItems:'center', textAlign:'center', margin:'10px'}}>
                        <h3 style={{fontFamily:'Poppins-Regular'}}>1/1</h3>
                    </div>
                    <div className="vis-main-shape">
                        <svg style={{zIndex:'inherit', backgroundColor:'#F4F6FA', borderRadius:'10px'}} width="250" height="200">
                            <polygon points="75,50 75,100 125,100 125,50" strokeWidth="0" fill="blue" />
                            <polygon points="125,50 125,100 175,100 175,50" strokeWidth="0" fill="red" />
                            <polygon points="125,100 125,150 175,150 175,100" strokeWidth="0" fill="orange" />
                        </svg>

                        <div className="tut-intro-fade" style={{position: 'absolute', zIndex:1100, marginTop:'78%'}}>
                            <img src='/TutorialIcons/Arrow1.png'/>
                        </div>

                        <div className="tut-intro-fade" style={{zIndex:1004, position:'absolute', fontFamily:'Poppins-Regular', border:'solid 2px #FF9417', backgroundColor:'white', borderRadius:'6px', marginTop:'100%'}}>
							<Text style={{margin: '10px'}}>This is the <strong>original</strong> shape.</Text>
						</div>
                    </div>

                    <div>
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
                    <div style={{position: 'absolute'}}>
                    <div style={{justifyContent: 'center', width: '100%', alignItems:'center', textAlign:'center', margin:'10px'}}>
                        <h3 style={{fontFamily:'Poppins-Regular'}}>1/1</h3>
                    </div>

                    <div style={{position: 'absolute', zIndex:1100, marginTop:'80%'}}>
                        <img src='/TutorialIcons/Arrow2.png'/>
                    </div>

                    <div style={{zIndex:1004, position:'absolute', fontFamily:'Poppins-Regular', border:'solid 2px #FF9417', backgroundColor:'white', borderRadius:'6px', marginTop:'100%'}}>
                        <Text style={{margin: '10px'}}>Choose the option that is the <strong>rotated</strong> version of the original shape</Text>
                    </div>

                    </div>

                    <div>

                        <div style={{height:'45vh', backgroundColor:'black', opacity:'0.8'}}></div>

                        <div className='vis-button-container'>
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

                    <div class="tutorialCoverNoFade"></div>

                    
                </div>
            </div>

            }

            {iter === 6 && 

            <div style={{marginTop:'35vh', opacity: opacityVal, textAlign: 'center', zIndex:'99', position:'absolute', display:'flex', alignItems: 'center', justifyContent:'center'}}>
            <div>
                <div style={{margin: '15px'}}>
                    Great! Now you're ready to play the game! Don't forget that in the game, you will have 90 seconds!
                </div>
                <button className="buttonNext" onClick={() => reset()}><img src="/TutorialAgain.png"/></button>
                <button className="buttonNext" onClick={nextScene}><img src="/StartPlaying.png"/></button>
            </div>
            </div>
            
            }
            
        </div>
	);
};

export default VisuoTutorial;
