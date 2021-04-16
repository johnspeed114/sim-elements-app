import React, { useState } from 'react';
import '../styles/Editor.scss';
import { TwitterPicker } from 'react-color';
import Display from './Display';

const Editor = () => {
	const [ panelWidth, setPanelWidth ] = useState(60);
	const [ panelHeight, setPanelHeight ] = useState(60);
	const [ seletectedColor, setColor ] = useState('646586');

	function changeColor(color) {
		setColor(color.hex);
	}

	return (
		<div id="editor">
			<Display width={panelWidth} height={panelHeight} seletectedColor={seletectedColor} />
			<TwitterPicker color={seletectedColor} onChangeComplete={changeColor} />
		</div>
	);
};

export default Editor;
