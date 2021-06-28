import React from 'react';
import ServicesTemplateMobile from '../service-template-mobile';
import img from '../logo/transportation.svg';

function CardTransportMobile() {
    const logo = <img src={img} alt='transportation_logo' style={{height: '60px'}}/>

    return(
        <ServicesTemplateMobile logo={logo} serviceName={'Транспортирование'}/>
    );
}

export default CardTransportMobile;