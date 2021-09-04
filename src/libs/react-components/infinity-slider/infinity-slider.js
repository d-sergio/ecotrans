import React, { useState } from 'react';
import Controls from './controls';
import Viewport from './viewport';
import Carousel from './carousel';
import { containerStyle } from './infinity-slider.module.css';


function InfinitySlider(props) {
    /*Из позиции и props.visible вычисляется какие слайды отрисовывать*/
    const [currentPosition, setPosition] = useState(0);
    const [animationObject, setAnimationObject] = useState();   //объект анимации

    return(
        <div className={containerStyle}>
            <Controls/>

            <Viewport
                setPosition={setPosition}
                lockScroll={props.lockScroll}
            >
                <Carousel
                    currentPosition={currentPosition}
                    visible={props.visible}
                >
                    {props.children}
                </Carousel>
            </Viewport>
            
            <Controls/>
        </div>
    );
}

export default InfinitySlider;

InfinitySlider.defaultProps = {
    prev: null,
    next: null,
    visible: 1,
    lockScroll: 0.0606
};