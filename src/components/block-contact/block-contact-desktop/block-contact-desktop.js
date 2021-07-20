import React from 'react';
import LeafletMap from '../../../libs/react-components/leaflet-map/leaflet-map';
import {container, title, info, address, feedback} from './block-contact-desktop.module.css';
import Feedback from '../../contact-feedback';
import Address from '../../contact-address';

/**Контент страницы Контакты (десктопный)*/
function BlockContactDesktop() {    
    return(
        <div className={container}>
            <div className={title}>Мы всегда на связи!</div>
            
            <div>
                <LeafletMap
                height={800}
                view={[51.66849, 36.13414]}
                zoom={15}
                marker={[51.662725, 36.134059]}
                popup={"<b>этаж 2, комната 17</b>"}
                />
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
    );
}

export default BlockContactDesktop;