import React, { useRef, useState, useEffect } from 'react';
import ButtonCall from '../../buttons/button-call/button-call';
import pic from '../../../../static/images/block-call/call-mobile.png';
import {mainContainer} from '../../../common-styles/containers.module.css';
import {title} from '../../../common-styles/title.module.css';
import {text, image, floatImage, container, buttonBottom, buttonTop, svgMode4} from './block-call-compact.module.css';
import useMediaQuery from '../../../libs/react/react-hooks/use-media-query';
import config from '../../../config/config-media-queries.json';
import SvgMode1 from './svg-mode-1';
import SvgMode2 from './svg-mode-2';
import SvgMode3 from './svg-mode-3';
import SvgMode4 from './svg-mode-4';

/**Изначально для мобильного и десктопного вида была своя пунктирная линия.
 * Но из-за того, что мобильная линия не может адаптироваться абсолютно ко всем
 * мобильным размерам экрана, а десктопная - к десктопным, то есть 4 режима
 * для разных размеров экрана. Для каждого режима - своя линия.
 */
const viewMode = {
    0: 'mode1',
    466: 'mode2',
    576: 'mode3',
    730: 'mode4'
}

/**Размеры контейнеров блока от которых масштабируются пунктирные линии
 */

const defaultContainerSizes = {
    mode1:
        {
            width: 320,
            height: 243
        },
        mode2:
        {
            width: 466,
            height: 186
        },
    mode3:
        {
            width: 576,
            height: 286
        },
    mode4:
        {
            width: 939,
            height: 181
        }
}

function BlockCallMobile() {
    const svgModeRef1 = useRef(null);
    const svgModeRef2 = useRef(null);
    const svgModeRef3 = useRef(null);
    const svgModeRef4 = useRef(null);
    const containerRef = useRef(null);

    const [scaleSvgFactor, setScaleSvgFactor] = useState({X: 1, Y: 1});

    const mobileButton = useMediaQuery(config.app);

    useEffect(() => {
        drawSvgLine();  //чтоб наверняка сработало, когда уже всё отрендерено

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
            selectSvg();

            const containerWidth = containerRef.current.offsetWidth;
            const containerHeight = containerRef.current.offsetHeight;

            const defaults = getDefaultWidth();

            const scaleFactorX = containerWidth / defaults.width;
            const scaleFactorY = containerHeight / defaults.height;

            setScaleSvgFactor({X: scaleFactorX, Y: scaleFactorY});
        } catch(e) {
            /*Ничего страшного. Просто рефы могли быть пока не созданы*/
        }
    }

    /**Размеры мобильного или десктопного контейнера от которого масштабируется
     * линия
     */
    function getDefaultWidth() {
        let width;
        let height;

        if (checkViewMode() === 'mode1') {
            width = defaultContainerSizes.mode1.width;
            height = defaultContainerSizes.mode1.height;
        } else if (checkViewMode() === 'mode2') {
            width = defaultContainerSizes.mode2.width;
            height = defaultContainerSizes.mode2.height;
        } else if (checkViewMode() === 'mode3') {
            width = defaultContainerSizes.mode3.width;
            height = defaultContainerSizes.mode3.height;
        } else if (checkViewMode() === 'mode4') {
            width = defaultContainerSizes.mode4.width;
            height = defaultContainerSizes.mode4.height;
        }

        return {width, height};
    }

    /**Выбрать мобильную или десктопную линию */
    function selectSvg() {
        if (!svgModeRef4.current && !svgModeRef1.current) return;

        if (checkViewMode() === 'mode1') {
            svgModeRef1.current.style.display = 'block';
            svgModeRef2.current.style.display = 'none';
            svgModeRef3.current.style.display = 'none';
            svgModeRef4.current.style.display = 'none';

        } else if (checkViewMode() === 'mode2') {
            svgModeRef1.current.style.display = 'none';
            svgModeRef2.current.style.display = 'block';
            svgModeRef3.current.style.display = 'none';
            svgModeRef4.current.style.display = 'none';

        } else if (checkViewMode() === 'mode3') {
            svgModeRef1.current.style.display = 'none';
            svgModeRef2.current.style.display = 'none';
            svgModeRef3.current.style.display = 'block';
            svgModeRef4.current.style.display = 'none';

        } else if (checkViewMode() === 'mode4') {
            svgModeRef1.current.style.display = 'none';
            svgModeRef2.current.style.display = 'none';
            svgModeRef3.current.style.display = 'none';
            svgModeRef4.current.style.display = 'block';

        }
    }

    /**Режим мобильный или десктопный? */
    function checkViewMode() {
        if (!containerRef.current) return;

        const sizes = Object.entries(viewMode);
        const containerWidth = window.innerWidth;

    
        for ( let i = sizes.length - 1; i >= 0; i-- ) {
            let [modeMinSize, mode] = sizes[i];
    
            if ( containerWidth >= modeMinSize ) {
                return mode;
            }
        }
    }

    return(
        <section ref={containerRef} className={mainContainer}>
            <div style={{position: 'relative'}} className={container}>

                <div ref={svgModeRef1}>
                    <SvgMode1 key={scaleSvgFactor} scaleSvgFactor={scaleSvgFactor}/>
                </div>

                <div ref={svgModeRef2}>
                    <SvgMode2 key={scaleSvgFactor} scaleSvgFactor={scaleSvgFactor}/>
                </div>

                <div ref={svgModeRef3}>
                    <SvgMode3 key={scaleSvgFactor} scaleSvgFactor={scaleSvgFactor}/>
                </div>

                <div ref={svgModeRef4}>
                    <SvgMode4 key={scaleSvgFactor} scaleSvgFactor={scaleSvgFactor}/>
                </div>
                    
                <div style={{marginBottom: '11px'}} className={title}>
                    Позвоните нам!
                </div>
                
                <div className={floatImage}>

                    <img onLoad={drawSvgLine} className={image} src={pic} alt="call"/>

                    <div className={text}>
                        Мы подготовим необходимые документы, которые вы получите
                        в течение трех дней. Позвоните нам и наш менеджер подробно
                        объяснит, как заказать любую из наших услуг.
                    </div>

                    <div className={buttonTop}>
                        <ButtonCall mobile={mobileButton}/>
                    </div>
                    
                </div>

                <div className={buttonBottom}>
                    <ButtonCall mobile={mobileButton}/>
                </div>

            </div>
        </section>
    );
}

export default BlockCallMobile;