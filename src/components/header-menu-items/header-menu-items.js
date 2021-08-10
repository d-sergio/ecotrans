import React from 'react';
import HeaderItemTemp from './header-item-temp';
import { NavItem } from '../../libs/react-components/navigation-highlight';
import { link, main } from './header-menu-items.module.css';

export function Main() {
    return (
        <NavItem itemName='/' className={main}>
            <HeaderItemTemp linkTo='/'>
                Главная
            </HeaderItemTemp>
        </NavItem>
    );
}

export function Ecotrans() {
    return (
        <NavItem itemName='/' className={link}>
            <HeaderItemTemp linkTo='/'>
                Экотранс
            </HeaderItemTemp>
        </NavItem>
    );
}

export function Services() {
    return (
        <NavItem itemName='/services' className={link}>
            <HeaderItemTemp linkTo='/services'>
                Услуги
            </HeaderItemTemp>
        </NavItem>
    );
}

export function Projects() {
    return (
        <NavItem itemName='/projects' className={link}>
            <HeaderItemTemp linkTo='/projects'>
                Проекты
            </HeaderItemTemp>
        </NavItem>
    );
}

export function Clients() {
    return (
        <NavItem itemName='/clients' className={link}>
            <HeaderItemTemp linkTo='/clients'>
                Клиентам
            </HeaderItemTemp>
        </NavItem>
    );
}

export function Contact() {
    return (
        <NavItem itemName='/contact' className={link}>
            <HeaderItemTemp linkTo='/contact'>
                Контакты
            </HeaderItemTemp>
        </NavItem>
    );
}

const items = {
    Main,
    Ecotrans,
    Services,
    Projects,
    Clients,
    Contact
};

export default items;