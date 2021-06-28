import React from 'react';
import ServicesTemplateMobile from '../service-template-mobile';
import img from '../logo/docs.svg';

function CardDocsMobile() {
    const logo = <img src={img} alt='docs_logo' style={{height: '66px'}}/>;

    return(
        <ServicesTemplateMobile logo={logo} serviceName={'Экологическая документация'}/>
    );
    
}

export default CardDocsMobile;