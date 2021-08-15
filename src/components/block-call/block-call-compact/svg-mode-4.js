import React from 'react';
import {svgMode4}  from './block-call-compact.module.css'; 

function SvgDMode4(props) {
    const scaleSvgFactor = props.scaleSvgFactor;

    return(
        <svg
            className={svgMode4}
            width={930 * scaleSvgFactor.X}
            height={181 * scaleSvgFactor.Y}
            viewBox={`0 0 ${930 * scaleSvgFactor.X} ${181 * scaleSvgFactor.Y}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg">

            <path
                d={`
                    M${663.104 * scaleSvgFactor.X} ${180.088}
                    C${663.705 * scaleSvgFactor.X} ${88.5905 * scaleSvgFactor.Y}
                    ${581.789 * scaleSvgFactor.X} ${13.8761 * scaleSvgFactor.Y}
                    ${480.14 * scaleSvgFactor.X} ${13.2086 * scaleSvgFactor.Y}
                    C${378.491 * scaleSvgFactor.X} ${12.5411 * scaleSvgFactor.Y}
                    ${295.601 * scaleSvgFactor.X} ${86.1733 * scaleSvgFactor.Y}
                    ${295 * scaleSvgFactor.X} ${181}
                `}
                stroke="#E87F1E"
                strokeWidth="2"
                strokeDasharray="10 20"/>
        </svg>
    );
}

export default SvgDMode4;