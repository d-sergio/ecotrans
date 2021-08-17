import React from 'react';
import GatsbySuspense from '../../libs/gatsby-components/gatsby-suspense';
import useMediaQuery from '../../libs/react/react-hooks/use-media-query';
import config from '../../config/config-media-queries.json';

/**BlockStatistics - статистика (2396 Контрагентов ТКО и т.д.) */
function BlockStatistics() {
    const BlockStatsDesktop = React.lazy(() => import("./block-stats-desktop"));
    const BlockStatsMobile = React.lazy(() => import("./block-stats-mobile"));

    const mobileView = useMediaQuery(config.app);

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