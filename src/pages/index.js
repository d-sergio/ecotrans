import React from 'react';
import Layout from '../components/layout/layout';
import BlockServicesMobile from '../components/block-services/block-services-mobile/block-services-mobile';
import Slider from '../components/slider/slider-mobile';

import BlockAdvantages from '../components/block-advantages/block-advantages';



function Index() {
    return (
        <Layout>
            <BlockServicesMobile/>
            {/*<div style={{height: '30px'}}></div>
                <div className={servicesStyle}>
                    <SliderMobile.Projects/>
    </div>*/}
            <div style={{height: '30px'}}></div>
            <Slider/>
            <BlockAdvantages/>
        </Layout>
    );
};

export default Index;