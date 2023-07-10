import React from 'react';
import './stylesheet.css';

const LevelDisplay = ({ level, onTimeEnd }) => {

	const levels = ['Word Memory', 'Attention', 'Visuospatial', 'Recall'];

	const completedLevels = levels.slice(0, level);
	const currentLevel = levels[level];
	const remainingLevels = levels.slice(level + 1);



	return (
		<div>
			<img src="/LogoHeader.png"/>
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
		</div>
	);
};

export default LevelDisplay;
