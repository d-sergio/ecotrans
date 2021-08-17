import React from 'react';
import useMediaQuery from '../../libs/react/react-hooks/use-media-query';
import config from '../../config/config-media-queries.json';
import GatsbySuspense from '../../libs/gatsby-components/gatsby-suspense';

/**BlockServices - Услуги */
function BlockServices() {
    const BlockServicesMobile = React.lazy(() => import('./block-services-mobile'));
    const BlockServicesDesktop = React.lazy(() => import('./block-services-desktop'));

    const mobileView = useMediaQuery(config.app);

    if (mobileView === undefined) return null;

    return(
        <GatsbySuspense>
            {mobileView ? <BlockServicesMobile/> : <BlockServicesDesktop/>}
        </GatsbySuspense>
    );
}

export default BlockServices;