import React, { useEffect, useRef, useState } from 'react';
import {container} from './popup.module.css';

function Popup(props) {
    const containerRef = useRef(null);
    const prevented = useRef(false);

    const [display, setDisplay] = useState();

    useEffect(() => {
        if (typeof window === undefined) return;
        
        if (!display) setDisplay(false);
    }, []);

    useEffect(preventScroll, [props.isOpen]);

    /**Предотвратить прокрутку страницы */
    function preventScroll() {
        if (props.isOpen && !prevented.current) {
            
            prevented.current = true;

            window.addEventListener('wheel', preventScrollEvent, {passive: false});
            window.addEventListener('touchmove', preventScrollEvent, {passive: false});

        } else if (!props.isOpen && prevented.current) {

            prevented.current = false;

            window.removeEventListener('wheel', preventScrollEvent, {passive: false});
            window.removeEventListener('touchmove', preventScrollEvent, {passive: false});
        }

        setDisplay(props.isOpen ? 'flex' : 'none');

        return () => {            
            if (prevented.current) {
                window.removeEventListener('wheel', preventScrollEvent, {passive: false});
                window.removeEventListener('touchmove', preventScrollEvent, {passive: false});
            }
        };
    }

    function preventScrollEvent(e) {
        e.preventDefault();
    }

    /**Закрыть popup кликом по пустому пространству вокруг него */
    function closePopup(e) {

        if (!e.target.dataset.popupContent) {
            return;
        }

        props.closeFunction();
    }

    return (
        <div
            data-popup-content
            style={{display: display}}
            ref={containerRef}
            className={props.className || container}
            onClick={closePopup}
        >
                {props.children}
        </div>
    );
}

export default Popup;

Popup.defaultProps = {
    isOpen: false,
    children: <div style={{backgroundColor: 'white'}}>Hello, world!</div>
};