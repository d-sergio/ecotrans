import React from 'react';
import ProjectsTemplateDesktop from '../projects-template-desktop';
import img from '../../../../static/images/cards-projects/green-phone.svg';

function CardGreenDesktop(props) {
    const smallMode = props.smallMode !== undefined ? props.smallMode : false;
    const logo = <img src={img} alt='education_logo' style={{height: '69px'}}/>;
    const nameSmall = <div>Зелёный<br/>телефон</div>;
    const nameLarge = 'Зелёный телефон';
    const description = <div style={{marginTop: '-10px'}}>Телефонная приемная<br/>по вопросам<br/>экологии</div>;

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

export default CardGreenDesktop;