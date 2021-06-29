import React from 'react';
import ServicesTemplateMobile from '../service-template-mobile';
import img from '../../../../static/images/cards-services/training.svg';

function CardTrainingMobile() {
    const logo = <img src={img} alt='training_logo' style={{height: '60px'}}/>

    return(
        <ServicesTemplateMobile logo={logo} serviceName={'Обучение по обращению с отходами'}/>
    );
}

export default CardTrainingMobile;