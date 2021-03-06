import React from 'react';
import ServicesTemplateMobile from '../service-template-mobile';
import img from '../../../../static/images/cards-services/neutralization.svg';

function CardNeutralMobile() {
    const logo = <img src={img} alt='neutralization_logo' style={{height: '64px'}}/>

    return(
        <ServicesTemplateMobile
            logo={logo}
            orderName={'Обезвреживание и утилизация'}
            toAnchor='#neutralization'
        />
    );
}

export default CardNeutralMobile;