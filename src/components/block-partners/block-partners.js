import React from 'react';
import GatsbySuspense from '../../libs/gatsby-components/gatsby-suspense';
import useMediaQuery from '../../libs/react/react-hooks/use-media-query';
import config from '../../config/config-media-queries.json';

/**BlockPartners - Наши партнеры */
function BlockPartners() {
    const BlockPartnersDesktop = React.lazy(() => import("./block-partners-desktop/block-partners-desktop"));
    const BlockPartnersMobile = React.lazy(() => import("./block-partners-mobile/block-partners-mobile"));

    const mobileView = useMediaQuery(config.app);

    if (mobileView === undefined) return null;

    return(
        <GatsbySuspense>
            {
                mobileView ?
                <BlockPartnersMobile/>
                : <BlockPartnersDesktop/>
            }
        </GatsbySuspense>
    );
}

export default BlockPartners;