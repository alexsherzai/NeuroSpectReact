import './stylesheet.css';
import ReactModal from 'react-modal';
import React, { useEffect, useState } from 'react';
import { speedDialActionClasses } from '@mui/material';

const DisplayScore = ({ id, attScoreColors, attScoreShapes, speedColors, speedShapes, visuo, recall}) => {

    const [isOpen, setIsOpen] = useState(true);

    const understood = () => {
		setIsOpen(false);
	}

	return (
		<div className=''>

            {id !== null && 
                        
            <div>Enter this code into Prolific to confirm you finished: COQ89QD3</div>

            }
            
            <div className='scoreSection'>
                <div className='scoreBoxHeader'>Visuospatial</div>
                <div style={{justifyContent:'center', display:'flex', alignItems:'center'}}>
                    <div style={{fontSize: '20px', width: '80vw'}}>Score</div>
                    <div style={{fontSize: '26px', color: '#5A89F5'}}>{visuo}</div>
                </div>
            </div>

            <div className='scoreSection'>
                <div className='scoreBoxHeader'>Colors</div>
                <div style={{justifyContent:'center', display:'flex', alignItems:'center'}}>
                    <div style={{fontSize: '20px', width: '80vw'}}>Attention Score</div>
                    <div style={{fontSize: '26px', color: '#5A89F5'}}>{attScoreColors}</div>
                </div>
                <div style={{justifyContent:'center', display:'flex', alignItems:'center'}}>
                    <div style={{fontSize: '20px', width: '80vw'}}>Processing Speed</div>
                    <div style={{fontSize: '26px', color: '#FF9417'}}>{speedColors}</div>
                </div>
            </div>

            <div className='scoreSection'>
                <div className='scoreBoxHeader'>Shapes</div>
                <div style={{justifyContent:'center', display:'flex', alignItems:'center'}}>
                    <div style={{fontSize: '20px', width: '80vw'}}>Attention Score</div>
                    <div style={{fontSize: '26px', color: '#5A89F5'}}>{attScoreShapes}</div>
                </div>
                <div style={{justifyContent:'center', display:'flex', alignItems:'center'}}>
                    <div style={{fontSize: '20px', width: '80vw'}}>Processing Speed</div>
                    <div style={{fontSize: '26px', color: '#FF9417'}}>{speedShapes}</div>
                </div>
            </div>

            <div className='scoreSection'>
                <div className='scoreBoxHeader'>Recall</div>
                <div style={{justifyContent:'center', display:'flex', alignItems:'center'}}>
                    <div style={{fontSize: '20px', width: '80vw'}}>Score</div>
                    <div style={{fontSize: '26px', color: '#5A89F5'}}>{recall}</div>
                </div>
            </div>

            <div className='modal'>
				<ReactModal
					isOpen={isOpen}
					contentLabel="Example Modal"
					style={{
						overlay: {
							
						},
						content: {
						  borderRadius: '7px',
						  height: '580px'
						}
					  }}
				>
					<img style={{position: 'absolute', top: '0px', right:'0px', width:'100%'}} src='./PopUpBrain.png'/>
					<img onClick={understood} style={{position:'absolute', zIndex: 1000, right:'20px'}} src='./Outlined.svg' />
					<div style={{justifyContent: "center", display: 'flex', alignItems: 'center', textAlign: 'center'}}>
						<div style={{fontFamily: 'Poppins-Regular', color: '#24292E', fontWeight: '600', fontSize: '24px', marginTop: '75%'}}>YOU DID GREAT!</div>
					</div>
					<div style={{justifyContent: "center", display: 'flex', alignItems: 'center', textAlign: 'center'}}>
						<div style={{fontFamily: 'Poppins-Regular', color: '#6A737D', fontWeight: '400', fontSize: '18px', paddingTop: '5%'}}>
                        You've conquered all the games! Bravo! Stay tuned for future challenges. Your gaming journey continues to unfold. Keep up the great work! 🎮✨
						</div>
					</div>
					<div style={{justifyContent: "center", display: 'flex', alignItems: 'center', textAlign: 'center'}}>
						<div style={{fontFamily: 'Poppins-Regular', color: '#2E8970', fontWeight: '400', fontSize: '18px', paddingTop: '5%', paddingBottom: '10%'}}>
						All of your scores have been saved and will be visible to you in the app
						</div>
					</div>
					<div className='buttonCont'>
						<button onClick={understood} className='buttonNextModal'>Understood!</button>
					</div>
				</ReactModal>
				</div>
		</div>
	);
};

export default DisplayScore;
