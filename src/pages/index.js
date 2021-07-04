import React from 'react';
import Layout from '../components/layout/layout';
import SliderMobile from '../components/slider-mobile/slider-mobile';
import Slider from '../components/slider/slider-mobile';
import {mobileContainer} from '../common-styles/containers.module.css';
import {servMobile} from './pages-styles/index.module.css';

const servicesStyle = [servMobile, mobileContainer].join(" ");

function Index() {
    return (
        <Layout>
            <div style={{height: '30px'}}></div>
            <div className={servicesStyle}>
                <SliderMobile/>
            </div>
            <div style={{height: '30px'}}></div>
            <Slider/>
        </Layout>
    );
};

export default Index;