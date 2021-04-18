import React, { useState, useRef, useEffect } from 'react';
import '../styles/Pixel.scss';

// const useInterval = (callback, delay) => {
// 	const savedCallback = useRef();

// 	useEffect(
// 		() => {
// 			savedCallback.current = callback;
// 		},
// 		[ callback ]
// 	);

// 	useEffect(
// 		() => {
// 			function tick() {
// 				savedCallback.current(); //wtf is this current()???
// 			}
// 			if (delay !== null) {
// 				let id = setInterval(tick, delay);
// 				return () => clearInterval(id);
// 			}
// 		},
// 		[ delay ]
// 	);
// };
// const onMouseDown = () => {
// 	console.log('mouse is down');

// };

const Pixel = ({ selectedColor }) => {
	const [ pixelState, setPixelState ] = useState('#fff');
	const [ selectorState, setSelectorState ] = useState(pixelState);
	const [ canChangeState, setCanChangeState ] = useState(true);
	// const [ isMouseDown, setMouseDown ] = useState(false);

	// useInterval(onMouseDown, isMouseDown ? 100 : null);
	const applyColor = () => {
		setPixelState(selectedColor);
		setCanChangeState(false);
	};

	const changeColorOnHover = () => {
		setSelectorState(pixelState);
		setPixelState(selectedColor);
	};
	const resetColor = () => {
		if (canChangeState) {
			setPixelState(selectorState);
		}
		setCanChangeState(true);
	};
	return (
		<div
			className="pixel"
			// onMouseDown={() => setMouseDown(true)}
			// onMouseUp={() => setMouseDown(false)}
			onClick={applyColor}
			onMouseEnter={changeColorOnHover}
			onMouseLeave={resetColor}
			style={{ backgroundColor: pixelState }}
		/>
	);
};
//need to change the mouseenter event to hold the click as the event
export default Pixel;
