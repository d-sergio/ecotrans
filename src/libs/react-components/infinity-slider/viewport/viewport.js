import React, { useRef } from 'react';
import { viewportStyle } from './viewport.module.css';

function Viewport(props) {
    const viewportRef = useRef(null);

    return(
        <div className={viewportStyle} ref={viewportRef}>
            {props.children}
        </div>
    );
}

export default Viewport;