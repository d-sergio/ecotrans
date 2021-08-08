import React from 'react';
import Feedback from '../contact-feedback';
import Address from '../contact-address';
import LeafletMap from '../../libs/react-components/leaflet-map';
import LeafletTooltip from '../../libs/react-components/leaflet-tooltip';
import useMediaQuery from '../../libs/react/react-hooks/use-media-query';
import {wrapper,
    container,
    title,
    feedback,
    address,
    info
} from './block-contact.module.css';

const queries = {
    small: 'screen and (max-width: 767px)',
    large: 'screen and (min-width: 768px)'
};

/**Контент страницы Контакты */
function BlockContact() {
    const mobileView = useMediaQuery(queries);
    
    if (mobileView === undefined) return null;

    const mapHeight = mobileView ? calcHeight() : 800;

    const tooltipMargin = mobileView ? 0 : '250px';

    const tooltipView = mobileView ?
        [51.662725, 36.134059]
        : [51.66849, 36.13414];

    const textDesktop = <p style={{marginTop: tooltipMargin}}>Меняйте масштаб карты колесом мыши, удерживая Shift<br/>(клик, чтобы скрыть подсказку)</p>;
    const textMobile = <p style={{marginTop: tooltipMargin}}>Перемещайте карту, проводя по ней двумя пальцами<br/>(коснитесь, чтобы скрыть подсказку)</p>;


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
                <div className={title}>Мы всегда на связи!</div>

                <div className={wrapper}>                
                    
                    <div>
                        <LeafletTooltip
                            textDesktop={textDesktop}
                            textMobile={textMobile}>

                            <LeafletMap
                                key={mobileView}
                                height={mapHeight}
                                view={tooltipView}
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

        </div>
    );
}

export default BlockContact;