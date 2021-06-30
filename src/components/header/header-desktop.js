import React from 'react';
import {style, logo, phone} from "./header-desktop.module.css";
import MenuDesktop from '../header-menu/menu-desktop';

function HeaderDesktop(props) {
    const Logo = () => (
        <div className={logo}>
            <img src={props.logo} alt="logo_ecotrans"/>
            Экотранс
        </div>
    );

    const Phone = () => (
        <div className={phone}>
            <img src={props.phone} alt="phone"/>
            +7 (906)577-49-34
        </div>
    );

    return(
        <div className={style}>
            <Logo/>
            <MenuDesktop/>
            <Phone/>
        </div>
    );
}

export default HeaderDesktop;