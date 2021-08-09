import React from 'react';
import ServicesTemplateMobile from '../service-template-mobile';
import img from '../../../../static/images/cards-services/medical-waste.svg';

function CardMedicalMobile() {
    const imgStyle = {
        height: '60px',
        marginLeft: '20px'
    };

    const logo = <img src={img} alt='medical_waste_logo' style={imgStyle}/>

    return(
        <ServicesTemplateMobile
            logo={logo}
            serviceName={'Медицинские отходы'}
            toAnchor='#medicalwaste'
        />
    );
}

export default CardMedicalMobile;