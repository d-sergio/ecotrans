import React, { useContext, useEffect, useRef, useState } from 'react';
import PageName from '../root-layout/page-name-context';
import {Link} from 'gatsby';
import {menu, link} from './menu-desktop.module.css';

/**Имя текущей страницы берётся из контекста.
 * Смотри README.txt в корне проекта раздел "1.2 Контекст PageName" */
function MenuDesktop() {
    const services = useRef(null);
    const projects = useRef(null);
    const clients = useRef(null);
    const contact = useRef(null);

    const pageName = useContext(PageName);

    const initPage = null;
    
    const [currentPage, setPageName] = useState(initPage);

    highlightPageOn();  //Подсветка названия текущей страницы

    useEffect(() => {
            setPageName(pageName.name)
    }, []);

    useEffect(() => {
        /*Анимация элементов меню включается только, когда меню
        уже отрисовано. Иначе после перехода на текущую страницу
        будет лишняя анимация на имени этой страницы в меню. То есть
        после клика на "Услуги" элемент уменьшится и снова увеличится.
        А этого быть не должно*/
        if (currentPage === null) return;
        
        setTransition();
    }, [currentPage]);

    function setTransition() {
        const resExist = checkRef('highlightPageOn');
        if (!resExist) return;

        services.current.style.transition = 'all 0.1s';
        projects.current.style.transition = 'all 0.1s';
        clients.current.style.transition = 'all 0.1s';
        contact.current.style.transition = 'all 0.1s';
    }

    /*Подсветка названия текущей страницы*/
    function highlightPageOn() {
        if (currentPage === undefined) return;

        const resExist = checkRef('highlightPageOn');
        if (!resExist) return;

        const currentElement = getRef(currentPage);
        if (currentElement === '/') return;
        
        currentElement.current.style.fontFamily = 'MontserratBold';
        currentElement.current.style.fontWeight = '700';
        currentElement.current.style.transform = 'scale(1.125, 1.125)';
    }
    
    /*Отключить подсветку названия текущей страницы*/
    function highlightPageOff(element) {
        if (element === currentPage) return;

        const resExist = checkRef('highlightPageOff');
        if (!resExist) return;

        const currentElement = getRef(currentPage);
        if (currentElement === '/') return;

        currentElement.current.style.fontFamily = 'MontserratRegular';
        currentElement.current.style.fontWeight = '400';
        currentElement.current.style.transform = 'scale(1, 1)';  
    }

    /**Получить реф */
    function getRef(element) {
        let ref;

        switch(element) {
            case '/services':
                ref = services;
                break;
            case '/projects':
                ref = projects;
                break;
            case '/clients':
                ref = clients;
                break;
            case '/contact':
                ref = contact;
                break;
            default:
                ref = '/';
        }

        return ref;
    }

    /**Проверить существуют ли рефы */
    function checkRef(consumer) {
        if (services.current === null
            || projects.current === null
            || clients.current === null
            || contact.current === null) {

                console.log(`MenuDesktop. ${consumer} остановлен. Refs:
                services.current is ${services.current},
                projects.current is ${projects.current},
                clients.current is ${clients.current},
                contact.current is ${contact.current}`);

                return false;
        } else {

            return true;
        }
    }

    return (
        <nav className={menu}>
            <div ref={services} className={link}
                onMouseEnter={() => highlightPageOff('/services')}
                onMouseLeave={highlightPageOn}>

                    <Link to='/services'>Услуги</Link>
            </div>

            <div ref={projects} className={link}
                onMouseEnter={() => highlightPageOff('/projects')}
                onMouseLeave={highlightPageOn}>

                    <Link to='/projects'>Проекты</Link>
            </div>

            <div ref={clients} className={link}
                onMouseEnter={() => highlightPageOff('/clients')}
                onMouseLeave={highlightPageOn}>

                    <Link to='/clients'>Клиентам</Link>
            </div>

            <div ref={contact} className={link}
                onMouseEnter={() => highlightPageOff('/contact')}
                onMouseLeave={highlightPageOn}>

                    <Link to='/contact'>Контакты</Link>
            </div>
        </nav>
    );
}

export default MenuDesktop;