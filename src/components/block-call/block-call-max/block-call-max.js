import React, { useRef, useEffect, useState } from 'react';
import ButtonCall from '../../buttons/button-call/button-call';
import pic from '../../../../static/images/block-call/call-desktop.png';
import {mainContainer} from '../../../common-styles/containers.module.css';
import {title} from '../../../common-styles/title.module.css';
import {container, main, text, image, svgStyleMobile} from './block-call-max.module.css';
import config from '../../../config/config-media-queries.json';
import useMediaQuery from '../../../libs/react/react-hooks/use-media-query';

/**Размеры контейнеров блока от которых масштабируются пунктирные линии
 */

const defaultContainerWidth = 1440;
const defaultContainerHeight = 447;

function BlockCallDesktop() {
    const containerRef = useRef(null);

    const [scaleSvgFactor, setScaleSvgFactor] = useState({X: 1, Y: 1});

    const mobileView = useMediaQuery(config.app);

    /**Сдвиг из-за изменения  mainContainer*/
    const shift = 50;
    const needShift = useMediaQuery('screen and (max-width: 1023px)');

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

    /**Первый запуск происходит в img.onload */
    function drawSvgLine() {
        if (!containerRef.current || typeof window === undefined) return;

        try{
            const containerWidth = containerRef.current.offsetWidth;
            const containerHeight = containerRef.current.offsetHeight;

            const scaleFactorX = containerWidth / defaultContainerWidth;
            const scaleFactorY = containerHeight / defaultContainerHeight;

            setScaleSvgFactor({X: scaleFactorX, Y: scaleFactorY});
        } catch(e) {
            /*Ничего страшного. Просто рефы могли быть пока не созданы*/
        }
    }


    return(
        <section ref={containerRef} className={mainContainer}>
            <div style={{position: 'relative'}} className={container}>

                <svg
                    className={svgStyleMobile}
                    width={1440 * scaleSvgFactor.X}
                    height={461 * scaleSvgFactor.Y}
                    viewBox={`0 0 ${1440 * scaleSvgFactor.X} ${461 * scaleSvgFactor.Y}`}
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">

                    <path
                        d={`
                            M${863.864 * scaleSvgFactor.X + (needShift ? shift : 0)} ${341.344 * scaleSvgFactor.Y}
                            C${865.082 * scaleSvgFactor.X + (needShift ? shift : 0)} ${155.814 * scaleSvgFactor.Y}
                            ${715.668 * scaleSvgFactor.X + (needShift ? shift : 0)} ${4.4249 * scaleSvgFactor.Y}
                            ${530.138 * scaleSvgFactor.X + (needShift ? shift : 0)} ${3.20659 * scaleSvgFactor.Y}
                            C${362.5 * scaleSvgFactor.X + (needShift ? shift : 0)} ${3.2066 * scaleSvgFactor.Y}
                            ${212 * scaleSvgFactor.X + (needShift ? shift : 0)} ${123.5 * scaleSvgFactor.Y}
                            ${194} ${306}
                        `}
                        stroke="#E87F1E"
                        strokeWidth="2"
                        strokeDasharray="10 20"/>
                
                </svg>

                <div className={main}>
                    <p style={{display: 'inline'}} className={title}>
                        Позвоните нам прямо сейчас!
                    </p>

                    <p className={text}>
                        Мы подготовим необходимые документы, которые вы получите
                        в течение трех дней. Позвоните нам и наш менеджер подробно
                        объяснит, как заказать любую из наших услуг.
                    </p>

                    <ButtonCall mobile={mobileView}/>

                </div>

                <div className={image}>
                    <img onLoad={drawSvgLine} src={pic} alt="call"/>
                </div>
            </div>
        </section>
    );
}

export default BlockCallDesktop;