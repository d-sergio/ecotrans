import React from 'react';
import {svgMode2}  from './block-call-compact.module.css'; 

function SvgMode2(props) {
    const scaleSvgFactor = props.scaleSvgFactor;

    return(
        <svg
            className={svgMode2}
            width={459 * scaleSvgFactor.X}
            height={207 * scaleSvgFactor.Y}
            viewBox={`0 0 ${459 * scaleSvgFactor.X} ${207 * scaleSvgFactor.Y}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg">

            <path
                d={`
                    M${332.423 * scaleSvgFactor.X} ${174.875 * scaleSvgFactor.Y}
                    C${333.045 * scaleSvgFactor.X} ${80.2067 * scaleSvgFactor.Y}
                    ${274.58 * scaleSvgFactor.X} ${3.07597 * scaleSvgFactor.Y}
                    ${201.837 * scaleSvgFactor.X} ${2.5983 * scaleSvgFactor.Y}
                    C${129.095 * scaleSvgFactor.X} ${2.12063 * scaleSvgFactor.Y}
                    ${69.622 * scaleSvgFactor.X} ${78.4769 * scaleSvgFactor.Y}
                    ${69.0004} ${173.145}
                `} stroke="#E87F1E"
                strokeWidth="2"
                strokeDasharray="10 20"/>
        
        </svg>
    );
}

export default SvgMode2;