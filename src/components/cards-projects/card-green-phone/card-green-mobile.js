import React from 'react';
import ProjectsTemplateMobile from '../projects-template-mobile';
import img from '../../../../static/images/cards-projects/green-phone.svg';

function CardGreenMobile() {
    const logo = <img src={img} alt='green_phone_logo' style={{height: '60px'}}/>;

    return(
        <ProjectsTemplateMobile logo={logo} serviceName={'Зелёный телефон'}/>
    );
    
}

export default CardGreenMobile;