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
		<div>
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
					<div className="listCont">
						<span className='levels-curr'>{level + 1}</span> <div className='level-name-curr'>{currentLevel}</div>
					</div>
						{remainingLevels && remainingLevels.map((levelNum, index) => (
							<div className="listCont">
								<span className='levels-incomp'>{level + index + 2}</span> 
								<div className='level-name-incomp'>{levelNum}</div>
							</div>
						))}
				</div>

				<div className='buttonCont'>
					<button className="buttonNext" onClick={onTimeEnd}><img src="/StartPlaying.png"/></button>
				</div>

				<div className='modal'>
				<ReactModal
					isOpen={isOpen}
					contentLabel="Example Modal"
				>
					<img style={{position: 'absolute', top: '0px', right:'0px', width:'100%'}} src='./PopUpBrain.png'/>
					<img style={{marginTop:'100%', width: '100%'}} src='./AttentionGamers.png' />
					<button onClick={understood} className='buttonNext'><img style={{position: 'absolute', bottom: '0px', right:'0px', width:'100%'}} src='./Understood.png' /></button>
				</ReactModal>
				</div>
			</div>
		</div>
	);
};

export default LevelDisplay;
