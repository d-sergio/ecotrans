import React from 'react';
import Layout from '../components/layout/layout';
import Title from '../components/block-title';
import BlockServices from '../components/block-services';
import BlockProjects from '../components/block-projects';
import BlockInstagram from '../components/block-instagram';
import BlockStats from '../components/block-statistics';
import BlockPartners from '../components/block-partners/block-partners';
import BlockCall from '../components/block-call';
import BlockCost from '../components/block-cost/block-cost';
import useMediaQuery from '../libs/react/react-hooks/use-media-query';
import config from '../config/config-media-queries.json';
import GatsbySuspense from '../libs/gatsby-components/gatsby-suspense';

import InfinitySlider from '../libs/react-components/infinity-slider';
import {mainContainer} from '../common-styles/containers.module.css';
import Cards from '../components/cards-advantages';

function TestPage() {
    const mobileView = useMediaQuery(config.app);

    const BlockMap = React.lazy(() => import('../components/block-map'));

    return (
        <Layout currentPage='test-page'>
            <Title/>
            <BlockServices/>
            <BlockStats/>
            {
                mobileView ?
                    <BlockCall/>
                    : null
            }
            <BlockProjects/>
            <div className={mainContainer}>
                <InfinitySlider>
                    <Cards.Ecologist mobile={mobileView}/>
                    <Cards.License mobile={mobileView}/>
                    <Cards.Technologies mobile={mobileView}/>
                    <Cards.Training mobile={mobileView}/>
                </InfinitySlider>
            </div>
            <BlockCost/>
            <BlockPartners/>
            <BlockInstagram/>
            <GatsbySuspense>
                {
                    mobileView ? <BlockMap/> : null
                }
            </GatsbySuspense>
        </Layout>
    );
};

export default TestPage;