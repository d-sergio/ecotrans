import React, {Suspense, useEffect, useState} from 'react';
import mediaQuery from '../root-layout/media-query';
import config from '../../config/config.json';

const queries = {
    mobile: config.advantagesQuery.mobile,
    desktop: config.advantagesQuery.desktop
};

/**Header
 * Props:
 * @param {Boolean} mobile - мобильный вид, если true
 */
function BlockAdvantages() {
    const BlockAdvDesktop = React.lazy(() => import("./header-desktop"));
    const BlockAdvMobile = React.lazy(() => import("./header-mobile"));

    const [mobileView, setMobileView] = useState(undefined);

    useEffect(() => mediaQuery(mobileView, setMobileView, queries), [mobileView]);

    if (mobileView === undefined) return null;

    return(
        <Suspense fallback={'Загрузка...'}>
            {
                mobileView ?
                <BlockAdvMobile/>
                : <BlockAdvDesktop/>
            }
        </Suspense>

    );
}

export default BlockAdvantages;