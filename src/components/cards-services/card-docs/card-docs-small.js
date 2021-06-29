import React from 'react';
import ServiceTemplateSmall from '../service-template-small';
import img from '../../../../static/images/cards-services/docs.svg';

function CardDocsSmall() {
    const logo = <img src={img} alt='docs_logo' style={{height: '59px'}}/>;

    return(
        <ServiceTemplateSmall logo={logo} serviceName={'Экологическая документация'}/>
    );
    
}

export default CardDocsSmall;