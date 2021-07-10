import React from 'react';
import ProjectsTemplateDesktop from '../projects-template-desktop';
import img from '../../../../static/images/cards-projects/education.svg';

function CardEducationDesktop(props) {
    const active = props.active !== undefined ? props.active : false;
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
            active={active}
            />
    );
    
}

export default CardEducationDesktop;