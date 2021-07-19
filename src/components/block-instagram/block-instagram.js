import React, {useContext} from 'react';
import GatsbySuspense from '../../libs/gatsby-components/gatsby-suspense';
import MobileView from '../root-layout/view-context';

/**BlockInstagram - Будьте в курсе! (instagram) */
function BlockInstagram() {
    const BlockInstagramDesktop = React.lazy(() => import('./block-instagram-desktop'));
    const BlockInstagramMobile = React.lazy(() => import('./block-instagram-mobile'));

    const mobileView = useContext(MobileView);

    return(
        <GatsbySuspense>
            {mobileView ? <BlockInstagramMobile/> : <BlockInstagramDesktop/>}
        </GatsbySuspense>
    );
}

export default BlockInstagram;