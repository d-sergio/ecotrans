import React from 'react';
import {Link} from 'gatsby';
import {menu, link} from './menu-desktop.module.css';

function MenuDesktop() {
    return (
        <div className={menu}>
            <span className={link}><Link to='/'>Услуги</Link></span>
            <span className={link}><Link to='/'>Проекты</Link></span>
            <span className={link}><Link to='/'>Клиентам</Link></span>
            <span className={link}><Link to='/'>Контакты</Link></span>
        </div>
    );
}

export default MenuDesktop;