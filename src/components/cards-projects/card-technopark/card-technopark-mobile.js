import React from 'react';
import ProjectsTemplateMobile from '../projects-template-mobile';
import img from '../../../../static/images/cards-projects/technopark.svg';

function CardTechnoMobile() {
    const logo = <img src={img} alt='technopark_logo' style={{height: '65px'}}/>;
    const orderName = <div>Собственный<br/>экотехнопарк</div>
    
    return(
        <ProjectsTemplateMobile
            logo={logo}
            orderName={orderName}
            toAnchor='#technopark'
        />
    );
    
}

export default CardTechnoMobile;