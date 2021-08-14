import React, {useContext} from 'react';
import GatsbySuspense from '../../libs/gatsby-components/gatsby-suspense';
import MobileView from '../root-layout/view-context';

/**BlockAdvantages - Преимущества работы с нами */
function BlockAdvantages() {
    const BlockAdvDesktop = React.lazy(() => import("./block-adv-desktop/block-adv-desktop"));
    const BlockAdvMobile = React.lazy(() => import("./block-adv-mobile/block-adv-mobile"));

    const mobileView = useContext(MobileView);

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