import React from 'react';
import LeafletMap from '../../libs/react-components/leaflet-map/leaflet-map';
import {container, title, map, info, feedback, address} from './block-contact.module.css';

function BlockContact() {
    return(
        <div className={container}>
            <div className={title}>Мы всегда на связи!</div>
            
            <div className={map}>
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

                    </div>

                    <div className={address}>

                    </div>
            </div>
        </div>
    );
}

export default BlockContact;