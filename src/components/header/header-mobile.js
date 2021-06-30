import React from 'react';
import {style, phone} from "./header-mobile.module.css";
import ButtonMenu from '../buttons/button-menu';

function HeaderMobile(props) {
    const Phone = () => (
        <div className={phone}>
            <img src={props.phone} alt="phone"/>
            +7 (906)577-49-34
        </div>
    );
    return(
        <div className={style}>
            <img src={props.logo} alt="logo_ecotrans"/>
            <Phone/>
            <ButtonMenu/>
        </div>
    );
}

export default HeaderMobile