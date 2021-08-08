import React from 'react';
import LeafletMap from '../../../libs/react-components/leaflet-map/leaflet-map';
import {container, title, info, address, feedback} from './block-contact-desktop.module.css';
import Feedback from '../../contact-feedback';
import Address from '../../contact-address';
import LeafletTooltip from '../../../libs/react-components/leaflet-tooltip';

const textDesktop = <p style={{marginTop: '250px'}}>Меняйте масштаб карты колесом мыши, удерживая Shift<br/>(клик, чтобы скрыть подсказку)</p>;
const textMobile = <p style={{marginTop: '250px'}}>Перемещайте карту, проводя по ней двумя пальцами<br/>(коснитесь, чтобы скрыть подсказку)</p>;

/**Контент страницы Контакты (десктопный)*/
function BlockContactDesktop() {    
    return(
        <div className={container}>
            <div className={title}>Мы всегда на связи!</div>
            
            <div>
                <LeafletTooltip
                textDesktop={textDesktop}
                textMobile={textMobile}>

                    <LeafletMap
                    height={800}
                    view={[51.66849, 36.13414]}
                    zoom={15}
                    marker={[51.662725, 36.134059]}
                    modal={"<b>этаж 2, комната 17</b>"}
                    />
                    
                </LeafletTooltip>
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