import React from 'react';
import ServicesTemplateLarge from '../service-template-large';
import img from '../images/medical-waste.svg';

function CardMedicalLarge() {
    const imgStyle = {
        height: '84px',
        marginLeft: '20px'
    };

    const logo = <img src={img} alt='medical_waste_logo' style={imgStyle}/>;
    const serviceName = 'Медицинские отходы';
    const description = <div style={{marginTop: '-16px'}}>Сбор, транспортирование<br/>и обезвреживание<br/>медицинских отходов</div>;

    return(
        <ServicesTemplateLarge logo={logo} serviceName={serviceName} description={description}/>
    );
}

export default CardMedicalLarge;