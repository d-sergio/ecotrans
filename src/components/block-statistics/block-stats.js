import React, {useContext} from 'react';
import GatsbySuspense from '../../libs/gatsby-components/gatsby-suspense';
import MobileView from '../root-layout/view-context';

/**BlockStatistics - статистика (2396 Контрагентов ТКО и т.д.) */
function BlockStatistics() {
    const BlockStatsDesktop = React.lazy(() => import("./block-stats-desktop"));
    const BlockStatsMobile = React.lazy(() => import("./block-stats-mobile"));

    const mobileView = useContext(MobileView);

    if (mobileView === undefined) return null;

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