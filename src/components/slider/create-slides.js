import React from 'react';

function createSlides(children, slideStyle) {
    const slides = children.map(item => (
        <div className={slideStyle}>
            {item}
        </div>
    ))

    return slides;
}

export default createSlides;