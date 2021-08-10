import React, { useContext, useEffect, useState } from 'react';
import ActiveItemContext from './active-item-context';

/**
 * Props:
 * @param {String} itemName - подсвечиваемая страница. Например:
 * 
 * <NavItem itemName={'/home'}>
 */
function NavItem(props) {
    const activeItem = useContext(ActiveItemContext);

    const [isActive, setActive] = useState(false);

    useEffect(changeActiveMode, [activeItem.currentActive, activeItem.currentPage, isActive]);

    /**Выбрать соответствующее состояние */
    function changeActiveMode() {
        activeItem.currentActive === props.itemName ?
            setActive(true)
            : setActive(false);

    }

    /**Подсветить элемент, на который наведён курсор мыши */
    function highlightOn() {
        activeItem.selectItem(props.itemName)
    }

    /**Убрать подсветку этого элемента и подсветить соответствующий странице */
    function highlightOff() {
        activeItem.selectItem(activeItem.currentPage);
    }

    return(
        <div
            className={props.className}
            onMouseEnter={highlightOn}
            onMouseLeave={highlightOff}
        >
            {React.cloneElement(
                React.Children.only(props.children),
                {active: isActive})}
        </div>
    );
}

export default NavItem;