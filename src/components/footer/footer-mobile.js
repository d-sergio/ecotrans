import React from 'react';
import {Link} from 'gatsby';
import {container} from './footer-mobile.module.css';

function FooterMobile() {
    return(
        <div className={container}>
            <p style={{fontFamily: 'MontserratBold'}}>ООО “ЭКОТРАНС”</p>
            <p style={{marginTop: '0.75rem'}}>
                <a href="tel: +7 (906)577-49-34">
                    +7 (906)577-49-34
                </a>
            </p>
            <p style={{marginTop: '0.5rem', marginBottom: '1.5rem'}}>
                <a href="mailto: ecotranskursk@yandex.ru">
                    ecotranskursk@yandex.ru
                </a>
            </p>
            <Link to='/'>Разрешительная документация</Link>
            <p style={{marginTop: '1.5rem'}}>Сайт разработан we write</p>
            <p style={{marginTop: '0.75rem'}}>© ООО “Экотранс” 2021</p>
        </div>
    );
}

export default FooterMobile;