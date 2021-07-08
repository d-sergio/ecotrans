import React, {useEffect, useRef, useState} from 'react';
import {styleMobile, numberMobile, textMobile, styleDesktop, numberDesktop, textDesktop} from './cards-statistics.module.css';

function CardsStatisticTemp(props) {
    const slide = useRef(null);
    const [activeState, setActive] = useState(undefined);

    const style = props.mobile ? styleMobile : styleDesktop;
    const number = props.mobile ? numberMobile : numberDesktop;
    const text = props.mobile ? textMobile : textDesktop;

    useEffect(() => {
        if (props.active && !props.mobile && activeState === undefined) {
            slide.current.style.transform = 'scale(1.7, 1.7)';
        } else if (props.active && props.mobile && activeState === undefined) {
            slide.current.style.transform = 'scale(1.18, 1.18)';
        } else if (activeState === true && !props.mobile) {
            slide.current.style.transform = 'scale(1.7, 1.7)';
        }else if (activeState === true && props.mobile) {
            slide.current.style.transform = 'scale(1.18, 1.18)';
        }
         else {
            slide.current.style.transform = 'scale(1, 1)';
        }
    });

    return(
        <div ref={slide}
        className={style}
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
        >
            <div className={number}>{props.number}</div>
            <div className={text}>{props.text}</div>
        </div>
    );
}

export default CardsStatisticTemp;