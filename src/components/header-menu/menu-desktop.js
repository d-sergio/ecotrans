import React from 'react';
import {Link} from 'gatsby';
import {menu} from './menu-desktop.module.css';

function MenuDesktop() {
    return (
        <div className={menu}>
            <span style={{minWidth: '70px', textAlign: 'center'}}><Link to='/'>Услуги</Link></span>
            <span style={{minWidth: '90px', textAlign: 'center'}}><Link to='/'>Проекты</Link></span>
            <span style={{minWidth: '100px', textAlign: 'center'}}><Link to='/'>Клиентам</Link></span>
            <span style={{minWidth: '95px', textAlign: 'center'}}><Link to='/'>Контакты</Link></span>
        </div>
    );
}

export default MenuDesktop;