import React from 'react';
import '../styles/DisplaySCSS.scss'

const Display = ({pixel}) => {
    const numGrids= 47040
    return (
    <div className='container'>
        {for (let i=0; i<numGrids.length; i++) {
            <input id='theButton'{i} className='buttonClass' onMouseDown={()=>} />
        }}
    </div>
    )
};
//140x 336 w and h
export default Display;