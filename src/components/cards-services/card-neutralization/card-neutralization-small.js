import React from 'react';
import ServiceTemplateSmall from '../service-template-small';
import img from '../logo/neutralization.svg';

function CardNeutralSmall() {
    const logo = <img src={img} alt='neutralization_logo' style={{height: '64px'}}/>

    return(
        <ServiceTemplateSmall logo={logo} serviceName={'Обезвреживание и утилизация'}/>
    );
}

export default CardNeutralSmall;