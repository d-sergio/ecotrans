import React from 'react';
import ServicesTemplateMobile from '../service-template-mobile';
import img from '../../../../static/images/cards-services/training.svg';

function CardTrainingMobile() {
    const logo = <img src={img} alt='training_logo' style={{height: '60px'}}/>

    return(
        <ServicesTemplateMobile
            logo={logo}
            orderName={'Обучение по обращению с отходами'}
            toAnchor='#training'
        />
    );
}

export default CardTrainingMobile;