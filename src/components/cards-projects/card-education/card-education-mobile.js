import React from 'react';
import ProjectsTemplateMobile from '../projects-template-mobile';
import img from '../../../../static/images/cards-projects/education.svg';

function CardEducationMobile() {
    const logo = <img src={img} alt='education_logo' style={{height: '65px'}}/>;
    const orderName = <div>Центр<br/>доп. образования</div>;
    
    return(
        <ProjectsTemplateMobile
            logo={logo}
            orderName={orderName}
            toAnchor='#education'
        />
    );
    
}

export default CardEducationMobile;