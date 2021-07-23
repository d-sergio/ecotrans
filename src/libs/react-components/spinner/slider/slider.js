import React from 'react';
import {container} from './slider.module.css';

function Slider(props) {
    return(
        <div className={container}>
            {React.Children.toArray(props.children)[props.currentPosition]}
        </div>
    );
}

export default Slider;