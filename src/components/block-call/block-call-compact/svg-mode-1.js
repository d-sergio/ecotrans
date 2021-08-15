import React from 'react';
import {svgMode1}  from './block-call-compact.module.css'; 

function SvgMode1(props) {
    const scaleSvgFactor = props.scaleSvgFactor;

    return(
        <svg
            className={svgMode1}
            width={310 * scaleSvgFactor.X}
            height={220 * scaleSvgFactor.Y}
            viewBox={`0 0 ${310 * scaleSvgFactor.X} ${220 * scaleSvgFactor.Y}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg">

            <path
                d={`
                    M${205.538 * scaleSvgFactor.X} ${215.887 * scaleSvgFactor.Y}
                    C${259.378 * scaleSvgFactor.X} ${215.724 * scaleSvgFactor.Y}
                    ${302.904 * scaleSvgFactor.X} ${167.821 * scaleSvgFactor.Y}
                    ${302.755 * scaleSvgFactor.X} ${108.891 * scaleSvgFactor.Y}
                    C${302.755 * scaleSvgFactor.X} ${53.0002 * scaleSvgFactor.Y}
                    ${254.5 * scaleSvgFactor.X} ${3.49984 * scaleSvgFactor.Y}
                    ${188.5} ${3.49984}
                `}
                stroke="#E87F1E"
                strokeWidth="2"
                strokeDasharray="10 20"/>    
        </svg>
    );
}

export default SvgMode1;