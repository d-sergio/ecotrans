import React, { useState } from 'react';
import {Link} from 'gatsby';
import {style, phone, logo} from "./header-mobile.module.css";
import ButtonMenu from '../buttons/button-menu';
import HeaderMenu from '../header-menu';

function HeaderMobile(props) {
    const Logo = () => (
        <div className={logo}>
            <Link to='/'>
                <img src={props.logo} alt="logo_ecotrans"/>
            </Link>
        </div>
    );

    const Phone = () => (
        <a className={phone} href="tel:+7 (906)577-49-34">
            <div className={phone}>
                <img src={props.phone} alt="phone"/>
                +7 (906)577-49-34
            </div>
        </a>
    );

    const [isOpen, setState] = useState(false);

    function onClick() {
        setState(!isOpen);
    }

    return(
        <div className={style}>
            <Logo/>
            <Phone/>
            <div onClick={onClick}>
                <ButtonMenu open={isOpen}/>
                {isOpen ? <HeaderMenu.Mobile/> : null}
            </div>
        </div>
    );
}

export default HeaderMobile