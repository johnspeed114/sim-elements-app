import React from 'react';
import '../styles/DisplaySCSS.scss';
import Rows from './Rows';

const Display = ({ width, height, selectedColor }) => {
	let rows = [];
	for (let x = 0; x < height; x++) {
		rows.push(<Rows key={x} width={width} selectedColor={selectedColor} />);
	}
	return (
		<div className="displayPanel">
			<div class="pixels">{rows}</div>
		</div>
	);
};
//140x 336 w and h
export default Display;
