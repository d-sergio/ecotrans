import React, {useContext, useEffect} from 'react';
import PageName from '../components/root-layout/page-name-context';
import Layout from '../components/layout/layout';
import ServicesSpoilers from '../components/spoilers-services';
import {topPaddings} from '../common-styles/pages.module.css';
import MobilePageTitle from '../components/mobile-page-title';

function Services() {
    const pageName = useContext(PageName);

    useEffect(() => pageName.change('/services'), []);

    return (
        <Layout>
            <div style={{paddingBottom: '10px'}} className={topPaddings}>
                <MobilePageTitle title={'Услуги'}/>
                <ServicesSpoilers.Transportation/>
                <ServicesSpoilers.Neutralization/>
                <ServicesSpoilers.MedicalWaste/>
                <ServicesSpoilers.Training/>
                <ServicesSpoilers.Docs/>
            </div>
        </Layout>);
};

export default Services;