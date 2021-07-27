import React, {useEffect, useState} from 'react';
import BlockContactDesktop from './block-contact-desktop';
import BlockContactMobile from './block-contact-mobile';
import mediaQuery from '../../libs/react/media-query';

const queries = {
    small: 'screen and (max-width: 767px)',
    large: 'screen and (min-width: 768px)'
};


/**Контент страницы Контакты */
function BlockContact() {
    const [mobileView, setMobileView] = useState(undefined);

    useEffect(() => mediaQuery(mobileView, setMobileView, queries), []);
    
    if (mobileView === undefined) return null;

    return(
        <>
            {mobileView ?
                <BlockContactMobile/>
                : <BlockContactDesktop/>}
        </>
    );
}

export default BlockContact;