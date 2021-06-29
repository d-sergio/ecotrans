import React from 'react';
import ServicesTemplateLarge from '../service-template-large';
import img from '../../../../static/images/cards-services/transportation.svg';

function CardTransportLarge() {
    const logo = <img src={img} alt='transportation_logo' style={{width: '93px'}}/>
    const serviceName = <div style={{marginTop: '-15px'}}>Транспортирование</div>
    const description = <div style={{marginTop: '-15px'}}>Транспортирование<br/>отходов 1-4 классов<br/>опасности </div>

    return(
        <ServicesTemplateLarge logo={logo} serviceName={serviceName} description={description}/>
    );
}

export default CardTransportLarge;