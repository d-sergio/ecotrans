import React, { useContext } from 'react';
import MobileView from '../root-layout/view-context';
import GatsbySuspense from '../../libs/gatsby-components/gatsby-suspense';

/**BlockCall - Позвоните нам прямо сейчас! */
function BlockCall() {
    const mobileView = useContext(MobileView);

    const BlockCallDesktop = React.lazy(() => import('./block-call-desktop'));
    const BlockCallMobile = React.lazy(() => import('./block-call-mobile'));

    return (
        <>
            <GatsbySuspense>
                {
                    mobileView ? <BlockCallMobile/> : <BlockCallDesktop/>
                }
            </GatsbySuspense>
        </>
    );
}

export default BlockCall;