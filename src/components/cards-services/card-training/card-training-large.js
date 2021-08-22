import React from 'react';
import ServicesTemplateMobile from '../service-template-large';
import img from '../../../../static/images/cards-services/training.svg';

function CardTrainingLarge() {
    const logo = <img src={img} alt='training_logo' style={{height: '80px'}}/>
    const orderName = <div>Обучение по обращению<br/>с отходами</div>
    const description = <div>Повышение квалификации<br/>и переподготовка персонала</div>

    return(
        <ServicesTemplateMobile
            logo={logo}
            orderName={orderName}
            description={description}
            toAnchor='#training'
        />
    );
}

export default CardTrainingLarge;