import React, {useRef} from 'react';
import {svgMode3}  from './block-call-compact.module.css'; 

function SvgMode3(props) {
    const svgRef = useRef(null);
    const scaleSvgFactor = props.scaleSvgFactor;

    function getCorrect() {
        if (!svgRef.current) return;

        const container = svgRef.current.parentNode.parentNode;
        const containerWidth = container.offsetWidth;

        const correct = containerWidth > 572 ? 150 : 0;

        return correct;
    }

    return(
        <svg
            ref={svgRef}
            className={svgMode3}
            width={560 * scaleSvgFactor.X}
            height={277 * scaleSvgFactor.Y}
            viewBox={`0 0 ${560 * scaleSvgFactor.X} ${277 * scaleSvgFactor.Y}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg">

                <path
                    d={`
                        M${395.636 * scaleSvgFactor.X - getCorrect()} ${247.254 * scaleSvgFactor.Y}
                        C${432.5 * scaleSvgFactor.X} ${247.254 * scaleSvgFactor.Y}
                        ${502.614 * scaleSvgFactor.X} ${191 * scaleSvgFactor.Y}
                        ${497.707 * scaleSvgFactor.X} ${131.844 * scaleSvgFactor.Y}
                        C${491.002 * scaleSvgFactor.X} ${50.9993 * scaleSvgFactor.Y}
                        ${428.501 * scaleSvgFactor.X} ${12.9999 * scaleSvgFactor.Y}
                        ${342.001} ${12.9999}
                    `}
                    stroke="#E87F1E"
                    strokeWidth="2"
                    strokeDasharray="10 20"/>
        </svg>
    );
}

export default SvgMode3;