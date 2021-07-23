import React, { useContext } from 'react';
import MobileView from '../root-layout/view-context';
import GatsbySuspense from '../../libs/gatsby-components/gatsby-suspense';

/**BlockServices - Услуги */
function BlockServices() {
    const BlockServicesMobile = React.lazy(() => import('./block-services-mobile'));
    const BlockServicesDesktop = React.lazy(() => import('./block-services-desktop'));

    const mobileView = useContext(MobileView);

    return(
        <GatsbySuspense>
            {mobileView ? <BlockServicesMobile/> : <BlockServicesDesktop/>}
        </GatsbySuspense>
    );
}

export default BlockServices;