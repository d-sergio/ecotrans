import React, { useEffect, useRef } from 'react';
import { viewportStyle } from './viewport.module.css';
import handleTouch from './pointer-handlers/handle-touch';
import handleMouse from './pointer-handlers/handle-mouse';

function Viewport(props) {
    const viewportRef = useRef(null);

    useEffect(addTouchListeners, []);

    function addTouchListeners() {
        if (!viewportRef.current) return;

        viewportRef.current.addEventListener(
            'touchstart', onTouchStart, {passive: false}
        );

        return () => {
            if (viewportRef.current) {
                viewportRef.current.removeEventListener(
                    'touchstart', onTouchStart, {passive: false}
                );
            }
        };
    }

    function onTouchStart(event) {
        handleTouch({
            carousel: viewportRef.current.firstChild,
            lockScroll: props.lockScroll,
            event: event
        });
    }

    function onMouseDown(event) {
        handleMouse({
            carousel: viewportRef.current.firstChild,
            event: event
        });
    }

    return(
        <div
            ref={viewportRef}
            className={viewportStyle}
            onMouseDown={onMouseDown}
        >
            {props.children}
        </div>
    );
}

export default Viewport;