import React, {useContext} from 'react';
import GatsbySuspense from '../../libs/gatsby-components/gatsby-suspense';
import MobileView from '../root-layout/view-context';

function BlockInstagram() {
    const BlockInstagramDesktop = React.lazy(() => import('./block-instagram-desktop'));
    const BlockInstagramMobile = React.lazy(() => import('./block-instagram-mobile'));

    const mobileView = useContext(MobileView);

    //Защита для build, так как React.lazy и Suspense не совместимы с SSR
    const isSSR = typeof window === "undefined";

    return(
        <GatsbySuspense>
            {mobileView ? <BlockInstagramMobile/> : <BlockInstagramDesktop/>}
        </GatsbySuspense>
    );
}

export default BlockInstagram;