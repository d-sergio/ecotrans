import React, { useContext, useRef, useState, useEffect } from 'react';
import {mainContainer} from '../../../common-styles/containers.module.css';
import {title} from '../../../common-styles/title.module.css';
import {link, text, button, container, svgStyleMobile, svgStyleDesktop} from './block-instagram-compact.module.css';
import ButtonSubscribe from '../../buttons/button-subscribe/button-subscribe';
import config from '../../../config/config.json';
import MobileView from '../../root-layout/view-context';
import InstagramSlider from './instagram-slider-compact';
import throttle from '../../../libs/common/throttle';

/**Размеры контейнеров блока от которых масштабируются пунктирные линии.
 * Линии тут две: десктопная и мобильная
 */
const defaultContainerWidthMobile = 320;
const defaultContainerHeightMobile = 289;

const defaultContainerWidthDesktop = 576;
const defaultContainerHeightDesktop = 504;

/**Блок Instagram (мобильный)
 * 
*/
function BlockInstagramMobile() {
    const throttleDrawSvgLine = throttle(drawSvgLine, 300);
    const containerRef = useRef(null);

    const [scaleSvgFactor, setScaleSvgFactor] = useState({X: 1, Y: 1});

    const mobileView = useContext(MobileView);

    useEffect(drawSvgLine, []);

    useEffect(() => {
        if (typeof window !== undefined) {
            window.addEventListener('resize', throttleDrawSvgLine);
        }

        return () => {
            if (typeof window !== undefined) {
                window.removeEventListener('resize', throttleDrawSvgLine);
            }
        }
    }, []);

    function drawSvgLine() {
        if (!containerRef.current || typeof window === undefined) return;

        try{
            const containerWidth = containerRef.current.offsetWidth;
            const containerHeight = containerRef.current.offsetHeight;

            const defaultWidth = mobileView ?
                defaultContainerWidthMobile
                : defaultContainerWidthDesktop;

            const defaultHeight = mobileView ?
            defaultContainerHeightMobile
            : defaultContainerHeightDesktop;

            const scaleFactorX = containerWidth / defaultWidth;
            const scaleFactorY = containerHeight / defaultHeight;

            setScaleSvgFactor({X: scaleFactorX, Y: scaleFactorY});
        } catch(e) {
            /*Ничего страшного. Просто рефы могли быть пока не созданы*/
        }
    }

    return(
        <section ref={containerRef} className={container}>
            <div style={{position: 'relative'}} className={mainContainer}>

                <svg
                    className={svgStyleMobile}
                    
                    width={306 * scaleSvgFactor.X}
                    height={247 * scaleSvgFactor.Y}
                    viewBox={`0 0 ${306 * scaleSvgFactor.X} ${247 * scaleSvgFactor.Y}`}
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">

                    <path
                        d={`
                            M${194.5} ${0.999529}
                            C${246.5 * scaleSvgFactor.X} ${0.99953 * scaleSvgFactor.Y}
                            ${307 * scaleSvgFactor.X} ${49.7248 * scaleSvgFactor.Y}
                            ${307 * scaleSvgFactor.X} ${119.112 * scaleSvgFactor.Y}
                            C${307 * scaleSvgFactor.X} ${211.5 * scaleSvgFactor.Y}
                            ${227 * scaleSvgFactor.X} ${245.999 * scaleSvgFactor.Y}
                            ${156.68 * scaleSvgFactor.X} ${245.999 * scaleSvgFactor.Y}
                        `}

                        stroke="#E87F1E"
                        strokeWidth="2"
                        strokeDasharray="10 20"/>
                </svg>

                <svg
                    className={svgStyleDesktop}
                    width={576 * scaleSvgFactor.X}
                    height={446 * scaleSvgFactor.Y}
                    viewBox={`0 0 ${576 * scaleSvgFactor.X} ${446 * scaleSvgFactor.Y}`}
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">

                    <path
                        d={`
                            M${361} ${1.50004}
                            C${465.5 * scaleSvgFactor.X} ${7.5 * scaleSvgFactor.Y}
                            ${562.5 * scaleSvgFactor.X} ${112 * scaleSvgFactor.Y}
                            ${562.5 * scaleSvgFactor.X} ${220.5 * scaleSvgFactor.Y}
                            C${562.5 * scaleSvgFactor.X} ${353 * scaleSvgFactor.Y}
                            ${457 * scaleSvgFactor.X} ${435.5 * scaleSvgFactor.Y}
                            ${576 * scaleSvgFactor.X / 2} ${442 * scaleSvgFactor.Y}
                        `}
                        stroke="#E87F1E"
                        strokeWidth="2"
                        strokeDasharray="10 20"/>
                
                </svg>

                <div className={title}>Будьте на связи!</div>
                <div className={text}>
                    Подпишитесь на наш <span className={link}><a target='_blank' href={config.instagram}>Instagram.</a></span><br/>
                    Тут вся полезная информация!
                </div>
            </div>

            <InstagramSlider/>
            
            <div className={button}>
                <ButtonSubscribe mobile={mobileView}/>
            </div>
        </section>
    );
}

export default BlockInstagramMobile;