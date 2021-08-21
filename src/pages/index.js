import React, { useEffect, useState } from 'react';
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
import useMediaQuery from '../libs/react/react-hooks/use-media-query';
import config from '../config/config-media-queries.json';
import GatsbySuspense from '../libs/gatsby-components/gatsby-suspense';

function Index() {
    const mobileView = useMediaQuery(config.app);

    const BlockMap = React.lazy(() => import('../components/block-map'));
    
    const [params, setParams] = useState(0);

    useEffect(() => {
        setParams(window.innerWidth);
    }, []);

    return (
        <Layout currentPage='/'>
            <Title/>
            {params}
            <BlockServices/>
            <BlockStats/>
            {
                mobileView ?
                    <BlockCall/>
                    : null
            }
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