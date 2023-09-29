import './stylesheet.css';
import ReactModal from 'react-modal';
import React, { useEffect, useState } from 'react';

const LevelDisplay = ({ level, onTimeEnd }) => {

	const levels = ['Word Memory', 'Attention', 'Visuospatial', 'Recall'];
	const [isOpen, setIsOpen] = useState(false);
	const [firstTime, setFirstTime] = useState(true);

	const completedLevels = levels.slice(0, level);
	const currentLevel = levels[level];
	const remainingLevels = levels.slice(level + 1);

	useEffect(() => {
		setTimeout(function() {
			if(firstTime && level === 0) {
				setIsOpen(true);
			}
		}, 1000);
	});

	const understood = () => {
		setFirstTime(false);
		setIsOpen(false);
	}


	return (
		<div className='fullGameMargin'>
			<div>
				<div style={{height:'5vh'}}>
					
				</div>

				

				<div className='level-content'>
						{completedLevels && completedLevels.map((levelNum, index) => (
							<div className="listCont">
								<span className='levels'>✓</span> 
								<div className='level-name'>{levelNum}</div>
							</div>
						))}
					<div className={`${level === 3 ? "listContLast" : "listContCurr"}`}>
						<span className='levels-curr'>{level + 1}</span> 
						<div className='level-name-curr'>{currentLevel}</div>
					</div>
						{remainingLevels && remainingLevels.map((levelNum, index) => (
							<div className={`${level + index === 2 ? "listContLast" : "listContInactive"}`}>
								<span className='levels-incomp'>{level + index + 2}</span> 
								<div className='level-name-incomp'>{levelNum}</div>
							</div>
						))}
				</div>

				<div className='buttonCont'>
					<button className="buttonNext" onClick={onTimeEnd}>Start Playing</button>
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
							height: '525px',
							width: '275px',
							position: 'absolute',
							top: '50%',
							left: '50%',
							transform: 'translate(-50%, -50%)'
						}
					  }}
				>
					<img style={{position: 'absolute', top: '0px', right:'0px', width:'100%'}} src='./PopUpBrain.png'/>
					<img onClick={understood} style={{position:'absolute', zIndex: 1000, right:'20px'}} src='./Outlined.svg' />
					<div style={{justifyContent: "center", display: 'flex', alignItems: 'center', textAlign: 'center'}}>
						<div style={{fontFamily: 'Poppins-Regular', color: '#24292E', fontWeight: '600', fontSize: '24px', marginTop: '75%'}}>ONE SHOT MONTHLY!</div>
					</div>
					<div style={{justifyContent: "center", display: 'flex', alignItems: 'center', textAlign: 'center'}}>
						<div style={{fontFamily: 'Poppins-Regular', color: '#6A737D', fontWeight: '400', fontSize: '18px', paddingTop: '5%'}}>
							Attention gamers! You get just one shot per month to play. Be fully present, prepare in advance, and make it count!
						</div>
					</div>
					<div style={{justifyContent: "center", display: 'flex', alignItems: 'center', textAlign: 'center'}}>
						<div style={{fontFamily: 'Poppins-Regular', color: '#24292E', fontWeight: '400', fontSize: '18px', paddingTop: '5%', paddingBottom: '10%'}}>
						Good luck and enjoy the challenge! 🚀🎮
						</div>
					</div>
					<div className='buttonContModal'>
						<button onClick={understood} className='buttonNextModal'>Understood!</button>
					</div>
				</ReactModal>
				</div>
			</div>
		</div>
	);
};

export default LevelDisplay;
