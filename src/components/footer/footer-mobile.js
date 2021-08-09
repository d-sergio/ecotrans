import React from 'react';
import {Link} from 'gatsby';
import {container} from './footer-mobile.module.css';
import CopyToClipboard from '../copy-to-clipboard';
import config from '../../config/config.json';

function FooterMobile() {
    return(
        <div className={container}>
            <p style={{fontFamily: 'MontserratBold'}}>ООО “ЭКОТРАНС”</p>
            <p style={{marginTop: '0.75rem'}}>
                <a href={`tel: ${config.phone}`}>
                    {config.phonePretty}
                </a>
            </p>
            <p style={{marginTop: '0.5rem', marginBottom: '1.5rem'}}>
                <CopyToClipboard>
                    {config.email}
                </CopyToClipboard>
            </p>
            <Link to='/clients'>Разрешительная документация</Link>
            <p style={{marginTop: '1.5rem'}}>Сайт разработан we write</p>
            <p style={{marginTop: '0.75rem'}}>© ООО “Экотранс” 2021</p>
        </div>
    );
}

export default FooterMobile;