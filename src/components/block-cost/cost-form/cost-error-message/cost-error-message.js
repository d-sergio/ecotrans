import React from 'react';
import {container} from './cost-error-message.module.css';

function CostError(props) {
    return(
        <div className={container}>{props.children}</div>
    );
}

export default CostError;