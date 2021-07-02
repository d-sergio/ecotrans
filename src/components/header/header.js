import React, {Suspense, useEffect, useState} from 'react';
import logoImg from '../../../static/images/logo.png';
import phoneImg from '../../../static/images/phone.png';
import mediaQuery from '../root-layout/media-query';
import config from '../../config/config.json';

const queries = {
    mobile: config.headerQuery.mobile,
    desktop: config.headerQuery.desktop
};

/**Header
 * Props:
 * @param {Boolean} mobile - мобильный вид, если true
 */
function Header(props) {
    const HeaderDesktop = React.lazy(() => import("./header-desktop"));
    const HeaderMobile = React.lazy(() => import("./header-mobile"));

    const [mobileView, setMobileView] = useState(undefined);

    useEffect(() => mediaQuery(mobileView, setMobileView, queries));

    if (mobileView === undefined) return null;

    return(
        <Suspense fallback={'Загрузка...'}>
            {
                mobileView ?
                <HeaderMobile logo={logoImg} phone={phoneImg}/>
                : <HeaderDesktop logo={logoImg} phone={phoneImg}/>
            }
        </Suspense>

    );
}

export default Header;