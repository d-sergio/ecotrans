import React, { useEffect, useState, useRef } from 'react';
import Feedback from '../form-feedback';
import Address from '../contact-address';
import LeafletMap from '../../libs/react-components/leaflet-map';
//import LeafletTooltip from '../../libs/react-components/leaflet-tooltip';
import {wrapper,
    container,
    title,
    feedback,
    address,
    info
} from './block-contact.module.css';
import throttle from '../../libs/common/throttle';
import config from '../../config/config-media-queries.json';
import mediaQuery from '../../libs/common/media-query';

/**Контент страницы Контакты */
function BlockContact() {
    const throttleChangeHeight = throttle(changeHeight, 300);

    /*Какую высоту занимает карта относительно окна при горизонтальной ориентации */
    const landscapeFactor = 0.7;

    /**Высота карты в десктопном варианте */
    const desktopMapHeight = 800;

    /*Модальное окно отправки формы обратной связи вложено в компонент
    Feedback. Соседний компонент Address перекрывает это модальное окно.
    Посколько Address тоже имеет своё модальное окно, то простой установкой
    z-index не обойтись, так как кто-то всегда будет перекрывать соседа.
    Реф обёртки Feedback передаётся самому Feedback. Когда он открывает
    модальное окно, то повышает свой z-index. А при закрытии возвращает
    прежнее значение*/
    const feedbackRef = useRef(null);

    const mounted = useRef(true);

    const [mapHeight, setMapHeight] = useState(checkMobileView() ? calcHeight() : desktopMapHeight);

    useEffect(changeWindowSizes, []);

    //const tooltipMargin = checkMobileView() ? 0 : '250px';

    const mapCenter = checkMobileView() ?
        [51.662725, 36.134059]
        : [51.66849, 36.13414];

    //const textDesktop = <p style={{marginTop: tooltipMargin}}>Меняйте масштаб карты колесом мыши, удерживая Shift</p>;
    //const textMobile = <p style={{marginTop: tooltipMargin}}>Перемещайте карту, проводя по ней двумя пальцами</p>;

    function checkMobileView() {
        return mediaQuery(config.blockContact);
    }

    /**Отследить ориентацию экрана */
    function changeWindowSizes() {
        if (typeof window === undefined) return;

        const orientation = window.matchMedia('(orientation: landscape)');

        orientation.addEventListener('change', changeHeight);

        window.addEventListener('resize', throttleChangeHeight);

        return () => {
            mounted.current = false;

            orientation.removeEventListener('change', changeHeight);
            window.removeEventListener('resize', throttleChangeHeight);
        }
    }

    /**Изменить высоту карты */
    function changeHeight() {
        if (!mounted.current) return;

        setMapHeight(checkMobileView() ? calcHeight() : desktopMapHeight);
    }

    /**Высота компонента LeafletMap в зависимости от ориентации экрана*/
    function calcHeight() {
        if (document.documentElement.clientHeight >= document.documentElement.clientWidth) {
            
            return document.documentElement.clientWidth;
        } else {

            return document.documentElement.clientHeight * landscapeFactor;
        }
    }

    return(
            <div className={container}>
                <div className={title}>Мы всегда на связи!</div>

                <div className={wrapper}>                
                    
                    <div>
                        {/*<LeafletTooltip
                            textDesktop={textDesktop}
                            textMobile={textMobile}
                        >*/}

                            <LeafletMap
                                height={mapHeight}
                                view={mapCenter}
                                zoom={15}
                                marker={[51.662725, 36.134059]}
                                modal={"<b>этаж 2, комната 17</b>"}
                            />
                            
                        {/*</LeafletTooltip>*/}
                    </div>

                    <div className={info}>
                        
                        <div ref={feedbackRef} className={feedback}>
                            <Feedback feedbackRef={feedbackRef}/>
                        </div>                    

                        <div className={address}>
                            <Address/>
                        </div>

                    </div>
                </div>

        </div>
    );
}

export default BlockContact;