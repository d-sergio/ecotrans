import React from 'react';
import ServiceTemplateSmall from '../service-template-small';
import img from '../../../../static/images/cards-services/medical-waste.svg';

function CardMedicalSmall() {
    const imgStyle = {
        height: '60px',
        marginLeft: '20px'
    };
    
    const logo = <img src={img} alt='medical_waste_logo' style={imgStyle}/>

    return(
        <ServiceTemplateSmall logo={logo} orderName={<div>Медицинские<br/>отходы</div>}/>
    );
}

export default CardMedicalSmall;