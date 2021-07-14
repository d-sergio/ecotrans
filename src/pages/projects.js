import React, {useContext, useEffect} from 'react';
import PageName from '../components/root-layout/page-name-context';
import Layout from '../components/layout/layout';
import SpoilersProjects from '../components/spoilers-projects';
import {mainContainer} from '../common-styles/containers.module.css';
import {topBottomPaddings} from '../common-styles/pages.module.css';

function Services() {
    const pageName = useContext(PageName);

    useEffect(() => pageName.change('/projects'), []);

    const pageStyle = [topBottomPaddings, mainContainer].join(" ");

    return (
        <Layout>
            <div className={pageStyle}>
                <SpoilersProjects.Technopark/>
                <SpoilersProjects.GreenPhone/>
                <SpoilersProjects.Education/>
            </div>
            <div style={{flex: '1 0 auto'}}></div>
        </Layout>);
};

export default Services;