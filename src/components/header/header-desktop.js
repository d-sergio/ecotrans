import React from 'react';
import {Link} from 'gatsby';
import {style, logo, phone} from "./header-desktop.module.css";
import HeaderMenu from '../header-menu';
import config from '../../config/config.json';
import { Ecotrans } from '../header-menu-items';

function HeaderDesktop(props) {
    const Logo = () => (
        <div className={logo}>
            <Link to='/'>
                <img src={props.logo} alt="logo_ecotrans"/>
            </Link>
            <Ecotrans/>
        </div>
    );

    const Phone = () => (
            <a className={phone} href={`tel: ${config.phone}`}>
                <img src={props.phone} alt="phone"/>
                {config.phonePretty}
            </a>
    );

    return(
        <div className={style}>
            <Logo/>
            <HeaderMenu mobile={false}/>
            <Phone/>
        </div>
    );
}

export default HeaderDesktop;