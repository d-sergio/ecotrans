import React, { useEffect, useRef } from 'react';
import {container} from './default.module.css';

function Default(props) {
    const containerRef = useRef(null);

    useEffect(() => setPosition());

    function setPosition() {
        if (!containerRef.current) return;

        containerRef.current.style.top = - containerRef.current.clientHeight + 'px';
    }

    return(
        <div ref={containerRef} className={container}>{props.children}</div>
    );
}

export default Default;