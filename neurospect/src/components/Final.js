import './stylesheet.css';
import ReactModal from 'react-modal';
import React, { useEffect, useState } from 'react';

const Final = ({ prolific, AddData, version }) => {

	const levelVersions = {
		1: ['Word Memory', 'Attention', 'Visuospatial', 'Recall'],
		2: ['Word Memory', 'Problem Solving', 'Pattern Play', 'Recall'],
		3: ['Word Memory', 'Language', 'Short-Term Recall'],
		4: ['Word Memory', 'Attention', 'Visuospatial', 'Executive Function', 'Processing', 'Language', 'Long-Term Recall']
	};
	
	const levels = levelVersions[version];

	const [isOpen, setIsOpen] = useState(false);
	const [firstTime, setFirstTime] = useState(true);

	useEffect(() => {
		setTimeout(function() {
			if(firstTime) {
				setIsOpen(true);
			}
		}, 500);

		AddData();
	});

	const understood = () => {
		setFirstTime(false);
		setIsOpen(false);
	}


	return (
		<div className='fullGameMargin'>
			<div>
				<div style={{height:'8vh'}}>
					<h2>{Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit', day: '2-digit'}).format(Date.now())}</h2>
				</div>

				<div className={`level-content${levelVersions[version].length > 4 ? `-full` : ``}`}>
						{
						(levels && levels.slice(-4).map((levelNum, index) => (
							<div className={`listCont${index === 3 ? `Last` : ``}`}>
								<span className='levels'>✓</span> 
								<div className='level-name'>{levelNum}</div>
							</div>
						)))
						}
				</div>

				<div style={{height:'1vh', textAlign:"center"}}>
					<h2>To view scores, Press "<span style={{fontFamily:"Poppins-Bold"}}>Exit</span>" on top left corner</h2>
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
		</div>
	);
};

export default Final;
