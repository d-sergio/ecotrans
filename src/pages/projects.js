import React from 'react';
import Layout from '../components/layout/layout';
import SpoilersProjects from '../components/spoilers-projects';
import {topPaddings} from '../common-styles/pages.module.css';
import MobilePageTitle from '../components/mobile-page-title';
import {AnchorPage} from '../libs/gatsby-components/anchors';

function Services() {

    return (
        
            <Layout currentPage='/projects'>
                <AnchorPage>
                    <div style={{paddingBottom: '10px'}} className={topPaddings}>
                        <MobilePageTitle title={'Проекты'}/>

                        <span id='technopark'></span>
                        <SpoilersProjects.Technopark/>

                        <span id='greenphone'></span>
                        <SpoilersProjects.GreenPhone/>

                        <span id='education'></span>
                        <SpoilersProjects.Education/>
                    </div>
                </AnchorPage>
            </Layout>
        
        );
};

export default Services;