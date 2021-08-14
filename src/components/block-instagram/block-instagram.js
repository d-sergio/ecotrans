import React from 'react';
import GatsbySuspense from '../../libs/gatsby-components/gatsby-suspense';
import useMediaQuery from '../../libs/react/react-hooks/use-media-query';
import config from '../../config/config-media-queries.json';

/**BlockInstagram - Будьте в курсе! (instagram) */
function BlockInstagram() {
    const mobileView = useMediaQuery(config.blockInstagram);

    const BlockInstagramDesktop = React.lazy(() => import('./block-instagram-max'));
    const BlockInstagramMobile = React.lazy(() => import('./block-instagram-compact'));

    if (mobileView === undefined) return null;

    return(
        <GatsbySuspense>
            {mobileView ? <BlockInstagramMobile/> : <BlockInstagramDesktop/>}
        </GatsbySuspense>
    );
}

export default BlockInstagram;