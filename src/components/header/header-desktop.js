import React from 'react';
import {outer, style, logo, phone} from "./header-desktop.module.css";
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