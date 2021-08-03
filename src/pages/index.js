import React, { useContext, useEffect } from 'react';
import Layout from '../components/layout/layout';
import Title from '../components/block-title';
import BlockServices from '../components/block-services';
import BlockProjects from '../components/block-projects';
import BlockAdvantages from '../components/block-advantages/block-advantages';
import BlockInstagram from '../components/block-instagram';
import BlockStats from '../components/block-statistics';
import BlockPartners from '../components/block-partners/block-partners';
import BlockCall from '../components/block-call';
import BlockCost from '../components/block-cost/block-cost';
import PageName from '../components/root-layout/page-name-context';
import MobileView from '../components/root-layout/view-context';
import GatsbySuspense from '../libs/gatsby-components/gatsby-suspense';

function Index() {
    const pageName = useContext(PageName);
    const mobileView = useContext(MobileView);

    const BlockMap = React.lazy(() => import('../components/block-map'));

    useEffect(() => pageName.change('/'), []);

    return (
        <Layout>
            <Title/>
            <BlockServices/>
            <BlockStats/>
            <BlockCall/>
            <BlockProjects/>
            <BlockAdvantages/>
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

export default Index;