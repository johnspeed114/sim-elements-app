import React, { useState } from 'react';
import '../styles/Pixel.scss';

const Pixel = ({ selectedColor }) => {
	const [ pixelState, setPixelState ] = useState('#fff');
	const [ selectorState, setSelectorState ] = useState(pixelState);
	const [ canChangeState, setCanChangeState ] = useState(true);

	return <div className="pixel" style={{ backgroundColor: pixelState }} />;
};

export default Pixel;
