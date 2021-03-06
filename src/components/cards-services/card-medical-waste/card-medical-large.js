import React from 'react';
import ServicesTemplateLarge from '../service-template-large';
import img from '../../../../static/images/cards-services/medical-waste.svg';

function CardMedicalLarge() {
    const imgStyle = {
        height: '84px',
        marginLeft: '20px'
    };

    const logo = <img src={img} alt='medical_waste_logo' style={imgStyle}/>;
    const orderName = 'Медицинские отходы';
    const description = <div style={{marginTop: '-16px'}}>Сбор, транспортирование<br/>и обезвреживание<br/>медицинских отходов</div>;

    return(
        <ServicesTemplateLarge
            logo={logo}
            orderName={orderName}
            description={description}
            toAnchor='#medicalwaste'
        />
    );
}

export default CardMedicalLarge;