import React from 'react';
import Layout from '../components/layout/layout';
import BlockServices from '../components/block-services';
import BlockProjects from '../components/block-projects';
import Slider from '../components/slider/slider-mobile';
import BlockAdvantages from '../components/block-advantages/block-advantages';
import BlockInstagram from '../components/block-instagram';
import BlockStats from '../components/block-statistics';

function Index() {
    return (
        <Layout>
            <div style={{height: '30px'}}></div>
            <BlockServices/>
            <BlockStats/>
            <BlockProjects/>
            <div style={{height: '30px'}}></div>
            <Slider/>
            <div style={{height: '30px'}}></div>
            <BlockAdvantages/>
            <div style={{height: '30px'}}></div>
            <div style={{marginBottom: '87px'}}>
                <BlockInstagram/>
            </div>
        </Layout>
    );
};

export default Index;