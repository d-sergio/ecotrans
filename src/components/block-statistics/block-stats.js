import React, {useContext} from 'react';
import GatsbySuspense from '../../libs/gatsby/gatsby-suspense';
import MobileView from '../root-layout/view-context';

/**BlockStatistics
 * Props:
 * @param {Boolean} mobile - мобильный вид, если true
 */
function BlockStatistics() {
    const BlockStatsDesktop = React.lazy(() => import("./block-stats-desktop"));
    const BlockStatsMobile = React.lazy(() => import("./block-stats-mobile"));

    const mobileView = useContext(MobileView);

    return(
        <GatsbySuspense>
            {
                mobileView ?
                <BlockStatsMobile/>
                : <BlockStatsDesktop/>
            }
        </GatsbySuspense>
    );
}

export default BlockStatistics;