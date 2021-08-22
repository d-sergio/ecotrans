import React from 'react';
import ServiceTemplateSmall from '../service-template-small';
import img from '../../../../static/images/cards-services/neutralization.svg';

function CardNeutralSmall() {
    const logo = <img src={img} alt='neutralization_logo' style={{height: '64px'}}/>

    return(
        <ServiceTemplateSmall logo={logo} orderName={'Обезвреживание и утилизация'}/>
    );
}

export default CardNeutralSmall;