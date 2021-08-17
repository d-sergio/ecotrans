import React, { useEffect, useRef, useState } from 'react';
import LeafletMap from '../../libs/react-components/leaflet-map';
import {title} from '../../common-styles/title.module.css';
import pin from '../../../static/images/address/map-pin.svg';
import {image, address, text} from './block-map.module.css';
import {mainContainer} from '../../common-styles/containers.module.css';
import LeafletTooltip from '../../libs/react-components/leaflet-tooltip';
import throttle from '../../libs/common/throttle';

/**Карта на главной странице (только для мобильных) */
function BlockMap() {
    const throttleChangeHeight = throttle(changeHeight, 300);

    const mounted = useRef(true);

    /*Какую высоту занимает карта относительно окна при горизонтальной ориентации */
    const landscapeFactor = 0.7;

    const [height, setHeight] = useState(calcHeight());

    useEffect(changeWindowSizes, []);

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

        setHeight(calcHeight());
    }

    /**Высота компонента LeafletMap в зависимости от ориентации экрана*/
    function calcHeight() {
        
        if (document.documentElement.clientHeight >= document.documentElement.clientWidth) {

            return document.documentElement.clientWidth;
        } else {
            
            return document.documentElement.clientHeight * landscapeFactor;
        }
    }

    return (
        <section>
            <div className={mainContainer}>
                <div className={title}>Наш адрес</div>

                <div className={address}>
                    <img className={image} src={pin} alt="map-pin"/>
                    <p className={text}>г. Курск, пр. Ленинского комсомола, д. 1Б</p>
                </div>
            </div>

            {/*<LeafletTooltip>*/}
                <LeafletMap
                    height={height}
                    view={[51.662725, 36.134059]}
                    zoom={15}
                    marker={[51.662725, 36.134059]}
                    modal={"<b>этаж 2, комната 17</b>"}
                />
            {/*</LeafletTooltip>*/}
        </section>
    );
}

export default BlockMap;