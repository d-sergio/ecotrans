import React from 'react';
import ServicesTemplateLarge from '../service-template-large';
import img from '../logo/neutralization.svg';

function CardNeutralLarge() {
    const logo = <div style={{marginTop: '-19px'}}><img src={img} alt='neutralization_logo' style={{height: '67px'}}/></div>;
    const serviceName = <div>Обезвреживание<br/>и утилизация</div>;
    const description = <div>Обезвреживание и утилизация<br/>отходов 1–4 класса опасности</div>
    
    return(
        <ServicesTemplateLarge logo={logo} serviceName={serviceName} description={description}/>
    );
}

export default CardNeutralLarge;