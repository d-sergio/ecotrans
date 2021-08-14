import React, { useEffect, useState } from 'react';
import GatsbySuspense from '../../libs/gatsby-components/gatsby-suspense';
import useMediaQuery from '../../libs/react/react-hooks/use-media-query';
import config from '../../config/config-media-queries.json';

/**BlockCall - Позвоните нам прямо сейчас! */
function BlockCall() {
    const compactView = useMediaQuery(config.blockCall);

    const BlockCallMax = React.lazy(() => import('./block-call-max'));
    const BlockCallCompact = React.lazy(() => import('./block-call-compact'));

    return (
        <>
            <GatsbySuspense>
                {
                    compactView ? <BlockCallCompact/> : <BlockCallMax/>
                }
            </GatsbySuspense>
        </>
    );
}

export default BlockCall;