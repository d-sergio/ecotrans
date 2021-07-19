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

function Index() {
    const pageName = useContext(PageName);

    useEffect(() => pageName.change('/'), []);

    return (
        <Layout>
            <Title/>
            <div style={{height: '30px'}}></div>
            <BlockServices/>
            <BlockStats/>
            <div style={{height: '60px'}}></div>
            <BlockCall/>
            <div style={{height: '80px'}}></div>
            <BlockProjects/>
            <div style={{height: '30px'}}></div>
            <BlockAdvantages/>
            <div style={{height: '30px'}}></div>
            <BlockCost/>
            <div style={{height: '30px'}}></div>
            <BlockPartners/>
            <div style={{height: '30px'}}></div>
            <div style={{marginBottom: '87px'}}>
                <BlockInstagram/>
            </div>
        </Layout>
    );
};

export default Index;