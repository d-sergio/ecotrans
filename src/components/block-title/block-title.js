import React, { useContext } from 'react';
import MobileView from '../root-layout/view-context';
import GatsbySuspense from '../../libs/gatsby-components/gatsby-suspense';

/**BlockTitle - титульный блок */
function BlockTitle() {
    const mobileView = useContext(MobileView);

    const TitleDesktop = React.lazy(() => import('./block-title-desktop'));
    const TitleMobile = React.lazy(() => import('./block-title-mobile'));

    return(
        <GatsbySuspense>
            {
                mobileView ? <TitleMobile/> : <TitleDesktop/>
            }
        </GatsbySuspense>
    );
}

export default BlockTitle;