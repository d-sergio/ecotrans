import React, { useEffect, useState, useRef } from 'react';
import Feedback from '../contact-feedback';
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
import useMediaQuery from '../../libs/react/react-hooks/use-media-query';
import config from '../../config/config-media-queries.json';

/**Контент страницы Контакты */
function BlockContact() {

    const mobileView = useMediaQuery(config.blockContact);

    /**Высота карты в десктопном варианте */
    const desktopMapHeight = 800;

    /*Какую высоту занимает карта относительно окна при горизонтальной ориентации */
    const landscapeFactor = 0.7;

    const throttleChangeHeight = throttle(changeHeight, 300);

    const mounted = useRef(true);

    const [mapHeight, setMapHeight] = useState(mobileView ? calcHeight() : desktopMapHeight);

    //useEffect(initMapHeight, []);

    useEffect(() => {
        if (typeof window === undefined) return;
        window.addEventListener('resize', throttleChangeHeight);

        return () => {
            if (typeof window === undefined) return;

            window.removeEventListener('resize', throttleChangeHeight);
        }
    }, []);

    useEffect(changeOrientation, []);

    //const tooltipMargin = checkMobileView() ? 0 : '250px';

    const mapCenter = mobileView ?
        [51.662725, 36.134059]
        : [51.66849, 36.13414];

    //const textDesktop = <p style={{marginTop: tooltipMargin}}>Меняйте масштаб карты колесом мыши, удерживая Shift</p>;
    //const textMobile = <p style={{marginTop: tooltipMargin}}>Перемещайте карту, проводя по ней двумя пальцами</p>;

    /**Отследить ориентацию экрана */
    function changeOrientation() {
        if (typeof window === undefined) return;

        const oritentation = window.matchMedia('(orientation: landscape)');

        oritentation.addEventListener('change', throttleChangeHeight);

        return () => {
            mounted.current = false;

            oritentation.removeEventListener('change', throttleChangeHeight);
        }
    }

    /**Изменить высоту карты */
    function changeHeight() {
        if (!mounted.current) return;

        setMapHeight(mobileView ? calcHeight() : desktopMapHeight);
    }

    /**Высота компонента LeafletMap в зависимости от ориентации экрана*/
    function calcHeight() {
        if (document.documentElement.clientHeight > document.documentElement.clientWidth) {
            
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
                        <div className={feedback}>
                            <Feedback/>
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