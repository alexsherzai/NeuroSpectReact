import './stylesheet.css';
import ReactModal from 'react-modal';
import React, { useEffect, useState } from 'react';
import SpeechRecognition, {useSpeechRecognition} from 'react-speech-recognition';

const DisplayScore = ({ prolific, gameVersion, AddData, execScore, gridScore, gridSpeed, attScoreColors, attScoreShapes, speedColors, speedShapes, visuo, recall}) => {

    const [isOpen, setIsOpen] = useState(true);
    const startListening = () => {SpeechRecognition.startListening({continuous: true, language: 'en-US'})};
    const {transcript, browserSupportsSpeechRecognition} = useSpeechRecognition();

    const understood = () => {
		setIsOpen(false);
	}

    useEffect(() => {
        AddData();
    }, []);

	return (
		<div className=''>
            { prolific !== null &&
            <div>COQ89QD3</div>
            }
            { gameVersion === 1 &&
            <div>
            <div className='scoreSection'>
                <div className='scoreBoxHeader'>Visuospatial</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                    <div style={{ fontSize: '20px' }}>Score</div>
                    <div style={{ fontSize: '26px', color: '#5A89F5', fontWeight: 600 }}>{visuo}</div>
                </div>
            </div>

            <div className='scoreSection'>
                <div className='scoreBoxHeader'>Colors</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                    <div style={{ fontSize: '20px' }}>Attention Score</div>
                    <div style={{ fontSize: '26px', color: '#5A89F5', fontWeight: 600 }}>{attScoreColors}</div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                    <div style={{ fontSize: '20px' }}>Processing Speed</div>
                    <div style={{ fontSize: '26px', color: '#FF9417', fontWeight: 600 }}>{speedColors}</div>
                </div>
            </div>

            <div className='scoreSection'>
                <div className='scoreBoxHeader'>Shapes</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                    <div style={{ fontSize: '20px' }}>Attention Score</div>
                    <div style={{ fontSize: '26px', color: '#5A89F5', fontWeight: 600 }}>{attScoreShapes}</div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                    <div style={{ fontSize: '20px' }}>Processing Speed</div>
                    <div style={{ fontSize: '26px', color: '#FF9417', fontWeight: 600 }}>{speedShapes}</div>
                </div>
            </div>
            </div>
            }
            {gameVersion === 2 &&
            <div>
                <div className='scoreSection'>
                    <div className='scoreBoxHeader'>Colors</div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                        <div style={{ fontSize: '20px' }}>Executive Function</div>
                        <div style={{ fontSize: '26px', color: '#5A89F5', fontWeight: 600 }}>{execScore} / 9</div>
                    </div>
                </div>
                <div className='scoreSection'>
                    <div className='scoreBoxHeader'>Processing</div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                        <div style={{ fontSize: '20px' }}>Accuracy</div>
                        <div style={{ fontSize: '26px', color: '#5A89F5', fontWeight: 600 }}>{gridScore} / 100</div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                        <div style={{ fontSize: '20px' }}>Speed</div>
                        <div style={{ fontSize: '26px', color: '#FF9417', fontWeight: 600 }}>{gridSpeed}</div>
                    </div>
                </div>
            </div>
            }

            <div className='scoreSection'>
                <div className='scoreBoxHeader'>Recall</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                    <div style={{ fontSize: '20px' }}>Score</div>
                    <div style={{ fontSize: '26px', color: '#5A89F5', fontWeight: 600 }}>{recall}</div>
                </div>
            </div>



            <div className='modal'>
				<ReactModal
					isOpen={isOpen}
					contentLabel="Example Modal"
					style={{
						overlay: {
							backgroundColor: 'rgba(20, 25, 31, 0.8)'
						},
						content: {
                            borderRadius: '7px',
							height: '553px',
							width: '300px',
							position: 'absolute',
							top: '50%',
							left: '50%',
							transform: 'translate(-50%, -50%)'
						}
					  }}
				>
					<img style={{position: 'absolute', top: '0px', right:'0px', width:'60%', marginLeft: '75px', marginRight: '75px'}} src='./Clapping.gif'/>
					<img onClick={understood} style={{position:'absolute', zIndex: 1000, right:'20px'}} src='./Outlined.svg' />
					<div style={{justifyContent: "center", display: 'flex', alignItems: 'center', textAlign: 'center'}}>
						<div style={{fontFamily: 'Poppins-Regular', color: '#24292E', fontWeight: '600', fontSize: '24px', marginTop: '55%', zIndex: 1}}>YOU DID GREAT!</div>
					</div>
					<div style={{justifyContent: "center", display: 'flex', alignItems: 'center', textAlign: 'center'}}>
						<div style={{fontFamily: 'Poppins-Regular', color: '#6A737D', fontWeight: '400', fontSize: '18px', paddingTop: '5%', zIndex: 1}}>
                        You've conquered all the games! Bravo! Stay tuned for future challenges. Your gaming journey continues to unfold. Keep up the great work! 🎮✨
						</div>
					</div>
					<div style={{justifyContent: "center", display: 'flex', alignItems: 'center', textAlign: 'center'}}>
						<div style={{fontFamily: 'Poppins-Regular', color: '#2E8970', fontWeight: '400', fontSize: '18px', paddingTop: '5%', paddingBottom: '10%'}}>
						All of your scores have been saved and will be visible to you in the app
						</div>
					</div>
					<div className='buttonContModal'>
						<button onClick={understood} className='buttonNextModal'>Understood!</button>
					</div>
				</ReactModal>
				</div>
		</div>
	);
};

export default DisplayScore;
