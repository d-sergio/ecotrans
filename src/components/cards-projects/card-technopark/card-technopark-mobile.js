import React from 'react';
import ProjectsTemplateMobile from '../projects-template-mobile';
import img from '../../../../static/images/cards-projects/technopark.svg';

function CardTechnoMobile() {
    const logo = <img src={img} alt='technopark_logo' style={{height: '65px'}}/>;
    const serviceName = <div>Собственный<br/>экотехнопарк</div>
    
    return(
        <ProjectsTemplateMobile logo={logo} serviceName={serviceName}/>
    );
    
}

export default CardTechnoMobile;