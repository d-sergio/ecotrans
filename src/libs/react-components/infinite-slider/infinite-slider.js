import React, { useState } from 'react';
import Controls from './controls';
import Viewport from './viewport';
import Carousel from './carousel';
import { containerStyle } from './infinite-slider.module.css';


function InfiniteSlider(props) {
    /*Из позиции и props.visible вычисляется какие слайды отрисовывать*/
    const [currentPosition, setPosition] = useState(0);
    const [animationObject, setAnimationObject] = useState();   //объект анимации

    return(
        <div className={containerStyle}>
            <Controls/>

            <Viewport
                lockScroll={props.lockScroll}
            >
                <Carousel
                    currentPosition={currentPosition}
                    setPosition={setPosition}
                    visible={props.visible}
                >
                    {props.children}
                </Carousel>
            </Viewport>
            
            <Controls/>
        </div>
    );
}

export default InfiniteSlider;

InfiniteSlider.defaultProps = {
    prev: null,
    next: null,
    visible: 1,
    lockScroll: 0.0606
};