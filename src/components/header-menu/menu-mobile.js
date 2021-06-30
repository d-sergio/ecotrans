import React from 'react';
import {Link} from 'gatsby';
import {menu} from './menu-desktop.module.css';

function MenuMobile() {
    return (
        <div className={menu}>
            <Link to='/'>Услуги</Link>
            <Link to='/'>Проекты</Link>
            <Link to='/'>Клиентам</Link>
            <Link to='/'>Контакты</Link>
        </div>
    );
}

export default MenuMobile;