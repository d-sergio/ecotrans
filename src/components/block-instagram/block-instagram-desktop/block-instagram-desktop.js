import React, {useState, useEffect, useRef} from 'react';
import Buttons from  '../../buttons'
import {subscribe, text, button, images, container, stayInformed, svgStyle} from './block-instagram-desktop.module.css';
import {mainContainer} from '../../../common-styles/containers.module.css';
import {title} from '../../../common-styles/title.module.css';
import Slider from '../../../libs/react-components/sliders/slider';
import mediaQuery from '../../../libs/react/media-query';
import config from '../../../config/config-media-queries.json';

import img1 from '../../../../static/images/instagram/desktop/1.png';
import img2 from '../../../../static/images/instagram/desktop/2.png';
import img3 from '../../../../static/images/instagram/desktop/3.png';
import img4 from '../../../../static/images/instagram/desktop/4.png';

//Сдвиг пунктирной кривой от левого края родительского блока
const getShift = () => document.documentElement.clientWidth < 1024 ? 300 : 350;
/*getCorrect
При размере < 1440px линия около кнопки немного смещается вправо из-за того,
что линия просто масштабируется, а исходник адаптирован под
полный размер*/
const getCorrect = () => document.documentElement.clientWidth <= 1024 ? 80 : 30;

const slides = [
    <div className={images}><img src={img1} alt="instagram1"/></div>,
    <div className={images}><img src={img2} alt="instagram2"/></div>,
    <div className={images}><img src={img3} alt="instagram3"/></div>,
    <div className={images}><img src={img4} alt="instagram4"/></div>
];

const titleStyle = [title, stayInformed].join(" ");

/**Блок Instagram (десктопный)
 * 
 * Содержит пунктирную кривую SVG, которая масштабируется по размеру родительского
 * блока.
 * 
 * State:
 * active - слайдер активен или не активен. На определённом разрешении замораживается
 * 
 * scaleSvgFactor - массив множителей для масштабирования пунктирной кривой
 *  scaleSvgFactor[0] - по оси X
 *  scaleSvgFactor[1] - по оси Y
*/
function BlockInstagramDesktop() {


    const queries = {
        small: config.blockInstagramDesktop.small,
        large: config.blockInstagramDesktop.large
    };

    const [active, setActive] = useState(undefined);
    const [scaleSvgFactor, setScaleSvgFactor] = useState([1, 1]);

    const containerRef = useRef(null);
    const subscribeRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => mediaQuery(active, setActive, queries), []);

    /*Сначала хук с mediaQuery. После него рисуем кривую. Поэтому
    ждём, когда значение active перестанет быть undefined*/
    useEffect(() => drawSvgLine(), [active]);

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

    if (active === undefined) return null;

    /**Рассчитать множители для масштабирования пунктирной кривой*/
    function drawSvgLine() {
        if (!buttonRef || !subscribeRef || !containerRef || typeof window === undefined) return;
        
        try{
            const width = subscribeRef.current.offsetWidth - getShift() - getCorrect();

            const height = buttonRef.current.firstChild.getBoundingClientRect().top - containerRef.current.getBoundingClientRect().top;

            const scaleFactorX = width / 916 >= 1 ? 1 : width / 916;
            const scaleFactorY = height / 467;

            setScaleSvgFactor([scaleFactorX, scaleFactorY]);
        } catch(e) {
            /*Ничего страшного. Просто рефы могли быть пока не созданы*/
        }
    }

    return(
        <div ref={containerRef}>

        <div style={{position: 'relative'}} className={mainContainer}>
                <svg className={svgStyle}

                style={{left: getShift()}}
                
                width={`${916 * scaleSvgFactor[0]}`}
                height={`${467 * scaleSvgFactor[1]}`}
                viewBox={`0 0 ${916 * scaleSvgFactor[0]} ${467 * scaleSvgFactor[1]}`}

                fill="none" xmlns="http://www.w3.org/2000/svg">

                    <path
                    
                    d={`M${0.744141} ${33.9802}
                    C${0.744141} ${33.9802}
                    ${155.073 * scaleSvgFactor[0]} ${3}
                    ${250.66 * scaleSvgFactor[0]} ${3}
                    C${442.302 * scaleSvgFactor[0]} ${-3.46813}
                    ${889.194 * scaleSvgFactor[0]} ${88.582}
                    ${915.472 * scaleSvgFactor[0]} ${470.055 * scaleSvgFactor[1]}`}
                    
                    stroke="#E87F1E" stroke-width="2" stroke-dasharray="10 20"/>
                </svg>
            </div>

            <div className={mainContainer}>
                    <p className={titleStyle}>Будьте в курсе!</p><br/>
            </div>

            <div className={active ? null : mainContainer}>
                <Slider
                    key={active}
                    visible={active ? 0 : 4}
                    freeze={active ? false : true}
                    adjacent={active ? true : false}
                    disableScrollingOn={3}>

                    {slides}

                </Slider>
            </div>

            <div className={mainContainer}>
                <div ref={subscribeRef} className={subscribe}>
                    <div className={text}>
                        Мы освободили вашу почту от спам - рассылки с просьбой скинуть нам ваш email. <br/>
                        Вместо этого приглашем подписаться на наш Instagram. Тут вся полезная информация <br/>
                        не только о деятельности компании, но и последние новости экологического законодательства, <br/>
                        полезные советы по утилизации отходов и многое другое.
                    </div>
                    <div ref={buttonRef} className={button}>
                        <Buttons.Subscribe.Desktop/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlockInstagramDesktop;