import React, {useContext, useEffect} from 'react';
import { navigate } from '@reach/router';
import PageName from '../components/root-layout/page-name-context';
import Layout from '../components/layout/layout';
import SpoilersProjects from '../components/spoilers-projects';
import {topPaddings} from '../common-styles/pages.module.css';
import MobilePageTitle from '../components/mobile-page-title';

function Services() {
    const pageName = useContext(PageName);

    useEffect(() => pageName.change('/projects'), []);

    return (
        <Layout>
            <div style={{paddingBottom: '10px'}} className={topPaddings}>
                <MobilePageTitle title={'Проекты'}/>
                <SpoilersProjects.Technopark/>
                <SpoilersProjects.GreenPhone/>
                <SpoilersProjects.Education/>
            </div>
        </Layout>);
};

export default Services;