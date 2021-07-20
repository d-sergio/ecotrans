import React, { useEffect, useRef, useState } from 'react';
import {Link} from 'gatsby';
import {style, phone, logo} from "./header-mobile.module.css";
import ButtonMenu from '../buttons/button-menu';
import HeaderMenu from '../header-menu';
import { Animation, linear, invertedLinear, changeStyleProperty } from '../../libs/animate/animate';

/**HeaderMobile
 * 
 * Анимация появления/скрытия меню осуществляется здесь
*/
function HeaderMobile(props) {
    const [isOpen, setState] = useState(false);
    const [init, setInit] = useState(false);
    const headerMenu = useRef(null);
    const animate = useRef(undefined);  //Здесь будет объект анимации

    //Инициализация
    useEffect(() => {
        if (!headerMenu.current) return;

        headerMenu.current.style.display = 'none';
        headerMenu.current.style.opacity = '0';

        setInit(true);
    }, []);

    useEffect(() => {
        //До инициализации меню пропускаем анимацию
        if (!init) return; 
        
        if (isOpen) {
            animateOpen();
        } else {
            animateClose();
        }        
    }, [isOpen]);

    function onClick() {
        setState(!isOpen);
    }

    function animateOpen() {
        if (!headerMenu.current) return;

        headerMenu.current.style.display = 'block';
        headerMenu.current.style.opacity = '0';

        if (animate.current) animate.current.cancel();

        const animationProps = {
            timing: linear,
            duration: 300,
            draw: changeStyleProperty,
            element: headerMenu.current,
            property: 'opacity',
            startValue: 0,
            finalValue: 1
        };

        animate.current = new Animation(animationProps);
        animate.current.start();
    }

    function animateClose() {
        if (!headerMenu.current) return;

        headerMenu.current.style.display = 'block';
        headerMenu.current.style.opacity = '0';

        const callback = () => {
            if (!headerMenu.current) return;

            headerMenu.current.style.display = 'none';
        };

        if (animate.current) animate.current.cancel();

        const animationProps = {
            timing: invertedLinear,
            duration: 300,
            draw: changeStyleProperty,
            element: headerMenu.current,
            property: 'opacity',
            startValue: 1,
            finalValue: 0,
            callback: callback
        };

        animate.current = new Animation(animationProps);
        animate.current.start();
    }

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

    return(
        <div className={style}>
            <Logo/>
            <Phone/>
            <div onClick={onClick}>
                <ButtonMenu open={isOpen}/>
                <div ref={headerMenu}>
                   <HeaderMenu mobile={true}/>
                </div>
            </div>
        </div>
    );
}

export default HeaderMobile