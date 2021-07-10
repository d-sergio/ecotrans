import React from 'react';
import ProjectsTemplateDesktop from '../projects-template-desktop';
import img from '../../../../static/images/cards-projects/technopark.svg';

function CardTechnoDesktop(props) {
    const active = props.active !== undefined ? props.active : false;
    const logo = <img src={img} alt='technopark_logo' style={{height: '69px'}}/>;
    const nameSmall = <div>Собственный<br/>Экотехнопарк</div>;
    const nameLarge = nameSmall;
    const description = <div>Кластер<br/>обеспечивающий весь<br/>цикл переработки  </div>;

    return(
        <ProjectsTemplateDesktop
            logo={logo}
            nameSmall={nameSmall}
            nameLarge={nameLarge}
            description={description}
            active={active}
            />
    );
    
}

export default CardTechnoDesktop;