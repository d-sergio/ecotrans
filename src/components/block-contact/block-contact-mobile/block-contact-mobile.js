import React, { useState, useEffect } from 'react';
import LeafletMap from '../../../libs/react-components/leaflet-map';
import {container, title, address, feedback} from './block-contact-mobile.module.css';
import Feedback from '../../contact-feedback';
import Address from '../../contact-address';
import {mainContainer} from '../../../common-styles/containers.module.css';
import LeafletTooltip from '../../../libs/react-components/leaflet-tooltip';

const titleStyle = [mainContainer, title].join(" ");

/**Контент страницы Контакты (десктопный)*/
function BlockContactMobile() {
    const [height, setHeight] = useState(calcHeight());

    /**Высота компонента LeafletMap в зависимости от ориентации экрана*/
    function calcHeight() {
        if (document.documentElement.clientHeight >= document.documentElement.clientWidth) {

            return document.documentElement.clientWidth;
        } else {
            
            return document.documentElement.clientHeight;
        }
    }

    return(
        <div className={container}>
            <div className={titleStyle}>Мы всегда на связи!</div>

            <div className={feedback}>
                <Feedback/>
            </div>                    

            <div className={address}>
                <Address/>
            </div>


            <div>
                <LeafletTooltip>
                    <LeafletMap
                        height={height}
                        view={[51.662725, 36.134059]}
                        zoom={15}
                        marker={[51.662725, 36.134059]}
                        popup={"<b>этаж 2, комната 17</b>"}
                    />
                </LeafletTooltip>
            </div>
        </div>
    );
}

export default BlockContactMobile;