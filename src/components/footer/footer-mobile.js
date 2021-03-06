import React from 'react';
import {Link} from 'gatsby';
import {container} from './footer-mobile.module.css';
import config from '../../config/config.json';

function FooterMobile(props) {
    return(
        <div className={container}>
            <p style={{fontFamily: 'MontserratBold'}}>ООО “ЭКОТРАНС”</p>
            <p style={{marginTop: '0.75rem'}}>
                <a href={`tel:${config.phone}`}>
                    {config.phonePretty}
                </a>
            </p>
            <div
                onClick={props.openCopy}
                style={{
                    marginTop: '0.5rem',
                    marginBottom: '1.5rem',
                    cursor: 'pointer'
                }}
            >
                    {config.email}
            </div>

            <Link to='/clients'>Разрешительная документация</Link>

            <p
                onClick={props.openWeWrite}
                style={{marginTop: '1.5rem', cursor: 'pointer'}}
            >
                Сайт разработан we write
            </p>

            <p style={{marginTop: '0.75rem'}}>© ООО “Экотранс” 2021</p>
        </div>
    );
}

export default FooterMobile;