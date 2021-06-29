import React from 'react';
import ProjectsTemplateDesktop from '../projects-template-desktop';
import img from '../../../../static/images/cards-projects/education.svg';

function CardEducationDesktop(props) {
    const smallMode = props.smallMode !== undefined ? props.smallMode : false;
    const logo = <img src={img} alt='education_logo' style={{height: '69px'}}/>;
    const nameSmall = <div>Центр<br/>дополнительного<br/>образования</div>;
    const nameLarge = <div>Центр дополнительного<br/>образования</div>;
    const description = <div>Переподготовка<br/>и повышение<br/>квалификации по экологии</div>;

    return(
        <ProjectsTemplateDesktop
            logo={logo}
            nameSmall={nameSmall}
            nameLarge={nameLarge}
            description={description}
            smallMode={smallMode}
            />
    );
    
}

export default CardEducationDesktop;