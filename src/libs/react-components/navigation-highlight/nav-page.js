import React, { useState } from 'react';
import ActiveItemContext from './active-item-context';

/**
 * Props:
 * @param {String} currentPage - имя текущей страницы - единственное, что
 * должен знать NavPage
 * 
 * <NavPage currentPage={'/home'}>
 */
function NavPage(props) {

    const [activeItemState, setActiveItem] = useState(
        {
            currentPage: props.currentPage,
            currentActive: props.currentPage,
            selectItem: selectItemFunction
        }
    );

    function selectItemFunction(itemName) {
        setActiveItem({
            ...activeItemState,
            currentActive: itemName
        });
    }

    return (
        <ActiveItemContext.Provider value={activeItemState}>
            {props.children}
        </ActiveItemContext.Provider>
    );
}

export default NavPage;