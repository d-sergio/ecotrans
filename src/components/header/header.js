import React, {useEffect, useState} from 'react';
import GatsbySuspense from '../gatsby-suspense';
import logoImg from '../../../static/images/logo.png';
import phoneImg from '../../../static/images/phone.png';
import mediaQuery from '../../libs/react/media-query';
import config from '../../config/config-media-queries.json';

const queries = {
    mobile: config.header.mobile,
    desktop: config.header.desktop
};

/**Header
 * Props:
 * @param {Boolean} mobile - мобильный вид, если true
 */
function Header() {
    const HeaderDesktop = React.lazy(() => import("./header-desktop"));
    const HeaderMobile = React.lazy(() => import("./header-mobile"));

    const [mobileView, setMobileView] = useState(undefined);

    useEffect(() => mediaQuery(mobileView, setMobileView, queries), [mobileView]);

    if (mobileView === undefined) return null;

    return(
        <GatsbySuspense>
            {
                mobileView ?
                <HeaderMobile logo={logoImg} phone={phoneImg}/>
                : <HeaderDesktop logo={logoImg} phone={phoneImg}/>
            }
        </GatsbySuspense>
    );
}

export default Header;