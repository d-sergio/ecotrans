import React from 'react';
import useMediaQuery from '../../libs/react/react-hooks/use-media-query';
import config from '../../config/config-media-queries.json';
import GatsbySuspense from '../../libs/gatsby-components/gatsby-suspense';

/**BlockTitle - титульный блок */
function BlockTitle() {
    const mobileView = useMediaQuery(config.app);

    const TitleDesktop = React.lazy(() => import('./block-title-desktop'));
    const TitleMobile = React.lazy(() => import('./block-title-mobile'));
    
    if (mobileView === undefined) return null;

    return(
        <GatsbySuspense>
            {
                mobileView ? <TitleMobile/> : <TitleDesktop/>
            }
        </GatsbySuspense>
    );
}

export default BlockTitle;