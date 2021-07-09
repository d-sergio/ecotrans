import React, {useContext} from 'react';
import GatsbySuspense from '../../libs/gatsby/gatsby-suspense';
import MobileView from '../root-layout/view-context';

/**BlockAdvantages
 * Props:
 * @param {Boolean} mobile - мобильный вид, если true
 */
function BlockAdvantages() {
    const BlockAdvDesktop = React.lazy(() => import("./block-adv-desktop/block-adv-desktop"));
    const BlockAdvMobile = React.lazy(() => import("./block-adv-mobile/block-adv-mobile"));

    const mobileView = useContext(MobileView);

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