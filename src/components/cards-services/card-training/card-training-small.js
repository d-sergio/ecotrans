import React from 'react';
import ServiceTemplateSmall from '../service-template-small';
import img from '../images/training.svg';

function CardTrainingSmall() {
    const logo = <img src={img} alt='training_logo' style={{height: '48px'}}/>

    return(
        <ServiceTemplateSmall logo={logo} serviceName={<div>Обучение<br/>по обращению<br/>с отходами</div>}/>
    );
}

export default CardTrainingSmall;