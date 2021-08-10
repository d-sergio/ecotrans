import React, { useEffect, useRef } from 'react';
import { Link } from 'gatsby';

/**
 * Props:
 * @param {String} linkTo - имя страницы. Например, '/home'.
 * @param {String | Node} children - внешнее отображение компонента.
 * Например, строка 'Главная'.
 * @param {Boolean} active - true, если компонент надо подсветить. Этот праметр
 * компонент получает из NavItem (libs/react-components/navigation-highlight)
 */
function HeaderItemTemp(props) {
    const itemRef = useRef(null);

    useEffect(initTransition, []);
    useEffect(changeHighlight, [props.active]);

    function initTransition() {
        if (!itemRef.current) return;

        itemRef.current.style.transition = 'all 0.1s';
    }

    function changeHighlight() {
        props.active ? highlightOn() : highlightOff();
    }

    function highlightOn() {
        if (!itemRef.current) return;

        itemRef.current.style.fontFamily = 'MontserratBold';
        itemRef.current.style.fontWeight = '700';
        itemRef.current.style.transform = 'scale(1.125, 1.125)';
    }

    function highlightOff() {
        if (!itemRef.current) return;

        itemRef.current.style.fontFamily = 'MontserratRegular';
        itemRef.current.style.fontWeight = '400';
        itemRef.current.style.transform = 'scale(1, 1)';  

    }

    return(
        <Link
            to={props.linkTo}
            ref={itemRef}
        >
            {props.children}
        </Link>
    );
}

export default HeaderItemTemp;

HeaderItemTemp.defaultProps = {
    active: false
}