import React from 'react';
import ServicesTemplateMobile from '../service-template-large';
import img from '../images/training.svg';

function CardTrainingLarge() {
    const logo = <img src={img} alt='training_logo' style={{height: '80px'}}/>
    const serviceName = <div>Обучение по обращению<br/>с отходами</div>
    const description = <div>Повышение квалификации<br/>и переподготовка персонала</div>

    return(
        <ServicesTemplateMobile logo={logo} serviceName={serviceName} description={description}/>
    );
}

export default CardTrainingLarge;