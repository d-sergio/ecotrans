import React from 'react';
import Layout from '../components/layout/layout';
import BlockServices from '../components/block-services';
import BlockProjects from '../components/block-projects';
import BlockAdvantages from '../components/block-advantages/block-advantages';
import BlockInstagram from '../components/block-instagram';
import BlockStats from '../components/block-statistics';
import BlockPartners from '../components/block-partners/block-partners';

function Index() {
    return (
        <Layout>
            <div style={{height: '30px'}}></div>
            <BlockServices/>
            <BlockStats/>
            <div style={{height: '30px'}}></div>
            <BlockProjects/>
            <div style={{height: '30px'}}></div>
            <BlockAdvantages/>
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