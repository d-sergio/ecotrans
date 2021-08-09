import React, {useContext, useEffect} from 'react';
import PageName from '../components/root-layout/page-name-context';
import Layout from '../components/layout/layout';
import SpoilersProjects from '../components/spoilers-projects';
import {topPaddings} from '../common-styles/pages.module.css';
import MobilePageTitle from '../components/mobile-page-title';
import {NavPage} from '../libs/react-components/navigate';

function Services() {
    const pageName = useContext(PageName);

    useEffect(() => pageName.change('/projects'), []);

    return (
        <NavPage>
            <Layout>
                <div style={{paddingBottom: '10px'}} className={topPaddings}>
                    <MobilePageTitle title={'Проекты'}/>
                    <span id='technopark'></span>
                    <SpoilersProjects.Technopark/>
                    <span id='greenphone'></span>
                    <SpoilersProjects.GreenPhone/>
                    <span id='education'></span>
                    <SpoilersProjects.Education/>
                </div>
            </Layout>
        </NavPage>
        );
};

export default Services;