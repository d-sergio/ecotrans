import React, { useContext } from 'react';
import GatsbySuspense from '../../libs/gatsby-components/gatsby-suspense';
import {mainContainer} from '../../common-styles/containers.module.css';
import MobileView from '../root-layout/view-context';

function BlockCost() {
    const mobileView = useContext(MobileView);

    const BlockCostDesktop = React.lazy(() => import('./block-cost-desktop'));
    const BlockCostMobile = React.lazy(() => import('./block-cost-mobile'));

    return(
        <div className={mainContainer}>
            <GatsbySuspense>
                {
                    mobileView ? <BlockCostMobile/> : <BlockCostDesktop/>
                }
            </GatsbySuspense>
        </div>
    );
}

export default BlockCost;