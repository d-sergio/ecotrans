import React, {useContext} from 'react';
import GatsbySuspense from '../gatsby-suspense';
import MobileView from '../root-layout/view-context';

/**BlockStatistics
 * Props:
 * @param {Boolean} mobile - мобильный вид, если true
 */
function BlockStatistics() {
    const BlockStatisticsDesktop = React.lazy(() => import("./block-adv-desktop/block-adv-desktop"));
    const BlockStatisticsMobile = React.lazy(() => import("./block-adv-mobile/block-adv-mobile"));

    const mobileView = useContext(MobileView);

    return(
        <GatsbySuspense>
            {
                mobileView ?
                <BlockStatisticsMobile/>
                : <BlockStatisticsDesktop/>
            }
        </GatsbySuspense>
    );
}

export default BlockStatistics;