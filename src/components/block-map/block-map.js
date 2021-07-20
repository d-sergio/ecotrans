import React, { useEffect, useState } from 'react';
import LeafletMap from '../leaflet-map/leaflet-map';
import {title} from '../../common-styles/title.module.css';
import pin from '../../../static/images/address/map-pin.svg';
import {image, address, text} from './block-map.module.css';
import {mainContainer} from '../../common-styles/containers.module.css';

/**Карта на главной странице (только для мобильных) */
function BlockMap() {
    const [height, setHeight] = useState(document.documentElement.clientWidth);

    useEffect(() => {
        if (typeof window === undefined) return;

        window.addEventListener('resize', setHeight(document.documentElement.clientWidth));

        return () => window.removeEventListener('resize', setHeight(document.documentElement.clientWidth));
    });

    return (
        <>
            <div className={mainContainer}>
                <div className={title}>Наш адрес</div>

                <div className={address}>
                    <img className={image} src={pin} alt="map-pin"/>
                    <p className={text}>г. Курск, пр. Ленинского комсомола, д. 1Б</p>
                </div>
            </div>
            <LeafletMap height={height}/>
        </>
    );
}

export default BlockMap;