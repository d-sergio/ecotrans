import React, { useRef } from 'react';
import { viewportStyle } from './viewport.module.css';

function Viewport(props) {
    const viewportRef = useRef(null);
    const carouselRef = useRef(null);

    return(
        <div className={viewportStyle} ref={viewportRef}>
            <div ref={carouselRef}>
                {props.children}
            </div>
        </div>
    );
}

export default Viewport;