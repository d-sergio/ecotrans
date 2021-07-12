import React from 'react';
import {Link} from 'gatsby';
import {outer, style, logo, phone} from "./header-desktop.module.css";
import MenuDesktop from '../header-menu/menu-desktop';

function HeaderDesktop(props) {
    const Logo = () => (
        <div className={logo}>
            <Link to='/'>
                <img src={props.logo} alt="logo_ecotrans"/>
                Экотранс
            </Link>
        </div>
    );

    const Phone = () => (
            <a className={phone} href="tel:+7 (906)577-49-34">
                <img src={props.phone} alt="phone"/>
                +7 (906)577-49-34
            </a>
    );

    return(
        <div className={outer}>
            <div className={style}>
                <Logo/>
                <MenuDesktop/>
                <Phone/>
            </div>
        </div>
    );
}

export default HeaderDesktop;