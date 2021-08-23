import React, { useEffect, useState } from 'react';
import { carouselStyle } from './carousel.module.css';
import createSlides from './create-slides/create-slides';

/**Только отрисовывает нужные слайды*/
function Carousel(props) {
    const [slides, setSlides] = useState();

    useEffect(
        () => {
            const children = React.Children.toArray(props.children);
            createSlides(setSlides, children, props)
        }, [props.currentPosition, props.visible]
    );

    return(
        <div className={carouselStyle}>
            {slides}
        </div>
    );
}

export default Carousel;

Carousel.defaultProps = {
    visible: 1,
    currentPosition: 0,
    children: <></>
}