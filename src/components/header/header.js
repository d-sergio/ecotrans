import React from 'react';
import GatsbySuspense from '../../libs/gatsby-components/gatsby-suspense';
import logoImg from '../../../static/images/logo.png';
import phoneImg from '../../../static/images/phone.png';
import config from '../../config/config-media-queries.json';
import useMediaQuery from '../../libs/react/react-hooks/use-media-query';

/**Header
 * Props:
 * @param {Boolean} mobile - мобильный вид, если true
 */
function Header() {
    const queries = {
        small: config.header.small,
        large: config.header.large
    };

    const HeaderDesktop = React.lazy(() => import("./header-desktop"));
    const HeaderMobile = React.lazy(() => import("./header-mobile"));

    const mobileView = useMediaQuery(queries);

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