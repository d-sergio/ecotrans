import React, { useEffect, useState } from 'react';
import LeafletMap from '../../libs/react-components/leaflet-map';
import {title} from '../../common-styles/title.module.css';
import pin from '../../../static/images/address/map-pin.svg';
import {image, address, text} from './block-map.module.css';
import {mainContainer} from '../../common-styles/containers.module.css';
import LeafletTooltip from '../../libs/react-components/leaflet-tooltip/leaflet-tooltip';

/**Карта на главной странице (только для мобильных) */
function BlockMap() {
    const [height, setHeight] = useState(calcHeight());

    /**Высота компонента LeafletMap в зависимости от ориентации экрана*/
    function calcHeight() {
        if (document.documentElement.clientHeight >= document.documentElement.clientWidth) {

            return document.documentElement.clientWidth;
        } else {
            
            return document.documentElement.clientHeight;
        }
    }

    return (
        <>
            <div className={mainContainer}>
                <div className={title}>Наш адрес</div>

                <div className={address}>
                    <img className={image} src={pin} alt="map-pin"/>
                    <p className={text}>г. Курск, пр. Ленинского комсомола, д. 1Б</p>
                </div>
            </div>

            <div style={{position: 'relative'}}>
                <LeafletMap
                    height={height}
                    view={[51.662725, 36.134059]}
                    zoom={15}
                    marker={[51.662725, 36.134059]}
                    popup={"<b>этаж 2, комната 17</b>"}
                />

                <LeafletTooltip/>
            </div>

        </>
    );
}

export default BlockMap;