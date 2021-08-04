import React, {useContext, useEffect} from 'react';
import PageName from '../components/root-layout/page-name-context';
import Layout from '../components/layout/layout';
import ServicesSpoilers from '../components/spoilers-services';
import {topBottomPaddings} from '../common-styles/pages.module.css';

function Services() {
    const pageName = useContext(PageName);

    useEffect(() => pageName.change('/services'), []);

    return (
        <Layout>
            <div className={topBottomPaddings}>
                <ServicesSpoilers.Transportation/>
                <ServicesSpoilers.Neutralization/>
                <ServicesSpoilers.MedicalWaste/>
                <ServicesSpoilers.Training/>
                <ServicesSpoilers.Docs/>
            </div>
        </Layout>);
};

export default Services;