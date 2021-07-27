import React from 'react';
import {container} from './default.module.css';

function Default(props) {
    return(
        <div className={container}>{props.children}</div>
    );
}

export default Default;