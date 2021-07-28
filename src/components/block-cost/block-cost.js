import React, { useContext } from 'react';
import GatsbySuspense from '../../libs/gatsby-components/gatsby-suspense';
import {mainContainer} from '../../common-styles/containers.module.css';
import MobileView from '../root-layout/view-context';
import CostForm from './cost-form';
import {formMobile, formDesktop} from './block-cost.module.css';

function BlockCost() {
    const mobileView = useContext(MobileView);

    const formStyle = mobileView ? formMobile : formDesktop;

    const BlockCostDesktop = React.lazy(() => import('./block-cost-desktop'));
    const BlockCostMobile = React.lazy(() => import('./block-cost-mobile'));

    return(
        <div className={mainContainer}>
            <GatsbySuspense>
                {
                    mobileView ? <BlockCostMobile/> : <BlockCostDesktop/>
                }
            </GatsbySuspense>

            <div className={formStyle}>
                <CostForm/>
            </div>
                        
        </div>
    );
}

export default BlockCost;