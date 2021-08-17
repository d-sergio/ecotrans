import React from 'react';
import GatsbySuspense from '../../libs/gatsby-components/gatsby-suspense';
import {mainContainer} from '../../common-styles/containers.module.css';
import useMediaQuery from '../../libs/react/react-hooks/use-media-query';
import config from '../../config/config-media-queries.json';
import CostForm from '../form-cost';
import {formMobile, formDesktop, marginBottom} from './block-cost.module.css';

function BlockCost() {
    const mobileView = useMediaQuery(config.app);

    const formStyle = mobileView ? formMobile : formDesktop;

    const BlockCostDesktop = React.lazy(() => import('./block-cost-desktop'));
    const BlockCostMobile = React.lazy(() => import('./block-cost-mobile'));

    const containerStyle = [mainContainer, marginBottom].join(" ");

    if (mobileView === undefined) return null;

    return(
        <section className={containerStyle}>
            <GatsbySuspense>
                {
                    mobileView ? <BlockCostMobile/> : <BlockCostDesktop/>
                }
            </GatsbySuspense>

            <div className={formStyle}>
                <CostForm/>
            </div>
                        
        </section>
    );
}

export default BlockCost;