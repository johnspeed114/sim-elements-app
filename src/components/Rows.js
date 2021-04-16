import React from 'react';
import '../styles/Rows.scss';
import Pixel from './Pixel';

const Row = ({ width, selectedColor }) => {
	let pixels = [];
	for (let x = 0; x < width; x++) {
		pixels.push(<Pixel key={x} selectedColor={selectedColor} />);
	}
	return <div className="row">{pixels}</div>;
};

export default Row;
