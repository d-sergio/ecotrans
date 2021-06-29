import React from 'react';
import ServicesTemplateLarge from '../service-template-large';
import img from '../../../../static/images/cards-services/docs.svg';

function CardDocsLarge() {
    const logo = <img src={img} alt='docs_logo' style={{height: '83px'}}/>;
    const serviceName = <div>Экологическая<br/>документация</div>;
    const description = <div style={{marginTop: '6px'}}>Комплект документов по экологии<br/>на предприятии</div>;

    return(
        <ServicesTemplateLarge logo={logo} serviceName={serviceName} description={description}/>
    );
    
}

export default CardDocsLarge;