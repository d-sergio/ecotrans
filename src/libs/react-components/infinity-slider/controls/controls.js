import React from 'react';
import { controlStyle } from './controls.module.css';

function Controls(props) {
    return(
        <div className={ controlStyle }>
            { props.view }
        </div>
    );
}

export default Controls;

Controls.defaultProps = {
    view: null
};