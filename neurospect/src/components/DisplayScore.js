import './stylesheet.css';
import ReactModal from 'react-modal';
import React, { useEffect, useState } from 'react';
import Visuospatial from './Visuospatial';

const DisplayScore = ({ attScoreColors, attScoreShapes, speedColors, speedShapes, visuo, recall}) => {

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
		</div>
	);
};

export default DisplayScore;
