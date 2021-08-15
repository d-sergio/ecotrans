import React, {useState, useEffect, useRef} from 'react';
import Buttons from  '../../buttons'
import {subscribe, button, container, stayInformed, svgStyle} from './block-instagram-max.module.css';
import {mainContainer} from '../../../common-styles/containers.module.css';
import {title} from '../../../common-styles/title.module.css';
import Text from './instagram-text';
import InstagramSlider from './instagram-slider';

/**Функции getShift и getCorrectRight дополнительно корректируют положение
 * пунктирной линии в зависимости от размера блока.
 * 
 * defaultWidth и defaultHeight - размеры картинки с пунктирной линией по
 * умолчанию, от которых она масштабируется для любого размера блока
*/
const defaultWidth = 916;
const defaultHeight = 467;

/**Блок Instagram (десктопный)
 * 
 * Содержит пунктирную кривую SVG, которая масштабируется по размеру родительского
 * блока.
 * 
 * scaleSvgFactor - массив множителей для масштабирования пунктирной кривой
 *  scaleSvgFactor[0] - по оси X
 *  scaleSvgFactor[1] - по оси Y
*/
function BlockInstagramDesktop() {
    const titleStyle = [title, stayInformed].join(" ");

    const [scaleSvgFactor, setScaleSvgFactor] = useState([1, 1]);

    const containerRef = useRef(null);
    const subscribeRef = useRef(null);
    const buttonRef = useRef(null);
    const svgRef = useRef(null);

    useEffect(() => setTimeout(drawSvgLine), []);

    useEffect(() => {
        if (typeof window !== undefined) {
            window.addEventListener('resize', drawSvgLine);
        }

        return () => {
            if (typeof window !== undefined) {
                window.removeEventListener('resize', drawSvgLine);
            }
        }
    }, []);


    /**Рассчитать множители для масштабирования пунктирной кривой*/
    function drawSvgLine() {
        if (!svgRef || !buttonRef || !subscribeRef || !containerRef || typeof window === undefined) return;
        
        try{
            svgRef.current.style.left = getShift(containerRef) + 'px';

            const width = subscribeRef.current.offsetWidth - getShift(containerRef) - getCorrectRight(containerRef);

            const height = buttonRef.current.firstChild.getBoundingClientRect().top - containerRef.current.getBoundingClientRect().top;

            const scaleFactorX = width / defaultWidth >= 1 ? 1 : width / defaultWidth;
            const scaleFactorY = height / defaultHeight;

            setScaleSvgFactor([scaleFactorX, scaleFactorY]);
        } catch(e) {
            /*Ничего страшного. Просто рефы могли быть пока не созданы*/
        }
    }

    return(
        <section ref={containerRef} className={container}>

            <div style={{position: 'relative'}} className={mainContainer}>
                <svg
                    ref={svgRef}
                    className={svgStyle}
                    
                    width={`${defaultWidth * scaleSvgFactor[0]}`}
                    height={`${defaultHeight * scaleSvgFactor[1]}`}
                    viewBox={`0 0 ${defaultWidth * scaleSvgFactor[0]} ${defaultHeight * scaleSvgFactor[1]}`}

                    fill="none" xmlns="http://www.w3.org/2000/svg">

                        <path
                        
                        d={`M${0.744141} ${33.9802}
                        C${0.744141} ${33.9802}
                        ${155.073 * scaleSvgFactor[0]} ${3}
                        ${250.66 * scaleSvgFactor[0]} ${3}
                        C${442.302 * scaleSvgFactor[0]} ${-3.46813}
                        ${889.194 * scaleSvgFactor[0]} ${88.582}
                        ${915.472 * scaleSvgFactor[0]} ${470.055 * scaleSvgFactor[1]}`}
                        
                        stroke="#E87F1E" strokeWidth="2" strokeDasharray="10 20"/>
                </svg>
            </div>

            <div className={mainContainer}>
                    <p className={titleStyle}>Будьте в курсе!</p><br/>
            </div>

            <InstagramSlider/>

            <div className={mainContainer}>
                <div ref={subscribeRef} className={subscribe}>

                    <Text/>

                    <div ref={buttonRef} className={button}>
                        <Buttons.Subscribe.Desktop/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BlockInstagramDesktop;

/**Сдвиг пунктирной кривой от левого края родительского блока
 * зависит от размера блока
*/
function getShift(containerRef) {
    if(!containerRef.current) return;

    const containerWidth = containerRef.current.clientWidth;

    return containerWidth < 1009 ? 300 : 350;
}

/*getCorrectRight
При размере блока < 1009px линия около кнопки немного смещается вправо
из-за того, что линия просто масштабируется, а исходник адаптирован под
полный размер*/
function getCorrectRight(containerRef) {
    if(!containerRef.current) return;

    const containerWidth = containerRef.current.clientWidth;

    return containerWidth < 1009 ? 80 : 30;
}