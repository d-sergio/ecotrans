import React from 'react';
import ServiceTemplateSmall from '../service-template-small';
import img from '../../../../static/images/cards-services/transportation.svg';

function CardTransportSmall() {
    const logo = <img src={img} alt='transportation_logo' style={{height: '60px'}}/>

    return(
        <ServiceTemplateSmall logo={logo} orderName={'Транспортирование'}/>
    );
}

export default CardTransportSmall;