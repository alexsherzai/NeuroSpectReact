import './stylesheet.css';
import ReactModal from 'react-modal';
import React, { useEffect, useState } from 'react';

const DisplayScore = ({ attScoreColors, attScoreShapes, speedColors, speedShapes, visuo, recall}) => {

    const [isOpen, setIsOpen] = useState(true);

    const understood = () => {
		setIsOpen(false);
	}

	return (
		<div>
            
			<table style={{alignContent:'center', width:'100%'}}>
                <tr>
                    <th>
                        Attention (Colors):
                    </th>
                    <th>
                        {attScoreColors}
                    </th>
                </tr>
                <tr>
                    <th>
                        Attention (Shapes):
                    </th>
                    <th>
                        {attScoreShapes}
                    </th>
                </tr>
                <tr>
                    <th>
                        Processing Speed (Colors):
                    </th>
                    <th>
                        {speedColors}
                    </th>
                </tr>
                <tr>
                    <th>
                        Processing Speed (Shapes):
                    </th>
                    <th>
                        {speedShapes}
                    </th>
                </tr>
                <tr>
                    <th>
                        Visuospatial:
                    </th>
                    <th>
                        {visuo}
                    </th>
                </tr>
                <tr>
                    <th>
                        Recall:
                    </th>
                    <th>
                        {recall}
                    </th>
                </tr>
            </table>

            <ReactModal
					isOpen={isOpen}
					contentLabel="Example Modal"
				>
					<img style={{position: 'absolute', top: '0px', right:'15%', width:'70%'}} src='https://s3-alpha-sig.figma.com/img/68f9/8670/aef47cb4b9c3658b87bf14495ed3ce45?Expires=1690761600&Signature=q8evpzSYrQcZ2FrvUS5sw4bP12UTqBkQjrB-C2TqrXd7GAwKMJKWOuF2q1IzHvjCHMQeGr~fSTZJkbFl8OFNc7kSbZ-CnG4DPGuAEetlEPmkLYMtfsc5nINF7oKeGxUKoKpL4~WHzUyiQ6GcsQKWLepjL8fBtP7nNNJwKHqP0BVoA1UMnOmhDQWwaJgR3hFpfxFVHaHHH8WXj0~IeEFEsGEdPYFw6D55dZSinLiOhyw4uh2MCZCyp7e6ATT3lOtDFhJoWR7aZzmobav9vf3cegvEOeB5Nx1ccpZo7utG8IMLhG20J1qm985jAYsmrsFdtd-YCXElfP64tZ60uHPerg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'/>
					<img onClick={understood} style={{position:'absolute', zIndex: 1000, right:'20px'}} src='./Outlined.svg' />
					<img style={{marginTop:'75%', marginBottom: '20%', width: '100%'}} src='./Congrats.png' />
					<div className='buttonCont'>
						<button onClick={understood} className='buttonNextModal'>Continue</button>
					</div>
				</ReactModal>
		</div>
	);
};

export default DisplayScore;
