import React from 'react';
import {menuDesktop, menuMobile, mobileContainer} from './header-menu.module.css';
import { Services, Projects, Clients, Contact, Main} from '../header-menu-items';

/**Имя текущей страницы берётся из контекста.
 * Смотри README.txt в корне проекта раздел "1.2 Контекст PageName"
 * 
 * Анимация появления/скрытия меню осуществляется в header-mobile.js
 * 
 * Props:
 * mobile - мобильный вид, если true*/
function HeaderMenu(props) {

    const menuStyle = props.mobile ? menuMobile : menuDesktop;

    const menu = (
        <nav className={menuStyle}>
            <Main/>
            <Services/>
            <Projects/>
            <Clients/>
            <Contact/>
        </nav>
    );

    return props.mobile ?
            <div className={mobileContainer}>{menu}</div>   //Дополнительная обёртка для мобильного
            : menu;
}

export default HeaderMenu;