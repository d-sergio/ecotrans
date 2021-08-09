import React from 'react';
import ProjectsTemplateMobile from '../projects-template-mobile';
import img from '../../../../static/images/cards-projects/education.svg';

function CardEducationMobile() {
    const logo = <img src={img} alt='education_logo' style={{height: '65px'}}/>;
    const serviceName = <div>Центр<br/>доп. образования</div>;
    
    return(
        <ProjectsTemplateMobile
            logo={logo}
            serviceName={serviceName}
            toAnchor='#education'
        />
    );
    
}

export default CardEducationMobile;