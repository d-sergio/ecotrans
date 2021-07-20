import React from 'react';
import LeafletMap from '../../../libs/react-components/leaflet-map/leaflet-map';
import {container, title, address, feedback} from './block-contact-mobile.module.css';
import Feedback from '../../contact-feedback';
import Address from '../../contact-address';
import {mainContainer} from '../../../common-styles/containers.module.css';

const titleStyle = [mainContainer, title].join(" ");

/**Контент страницы Контакты (десктопный)*/
function BlockContactMobile() {    
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
                <LeafletMap
                height={document.documentElement.clientWidth}
                view={[51.662725, 36.134059]}
                zoom={15}
                marker={[51.662725, 36.134059]}
                popup={"<b>этаж 2, комната 17</b>"}
                />
            </div>
        </div>
    );
}

export default BlockContactMobile;