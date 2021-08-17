import React from 'react';
import GatsbySuspense from '../../libs/gatsby-components/gatsby-suspense';
import useMediaQuery from '../../libs/react/react-hooks/use-media-query';
import config from '../../config/config-media-queries.json';

/**BlockAdvantages - Преимущества работы с нами */
function BlockAdvantages() {
    const BlockAdvDesktop = React.lazy(() => import("./block-adv-desktop/block-adv-desktop"));
    const BlockAdvMobile = React.lazy(() => import("./block-adv-mobile/block-adv-mobile"));

    const mobileView = useMediaQuery(config.app);

    if (mobileView === undefined) return null;

    return(
        <GatsbySuspense>
            {
                mobileView ?
                <BlockAdvMobile/>
                : <BlockAdvDesktop/>
            }
        </GatsbySuspense>
    );
}

export default BlockAdvantages;