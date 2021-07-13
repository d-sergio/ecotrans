import React, {useContext, useEffect} from 'react';
import PageName from '../components/root-layout/page-name-context';
import Layout from '../components/layout/layout';
import ServicesSpoilers from '../components/spoilers-services';
import {mainContainer} from '../common-styles/containers.module.css';
import {topBottomPaddings} from '../common-styles/pages.module.css';

function Services() {
    const pageName = useContext(PageName);

    useEffect(() => pageName.change('/services'), []);

    const pageStyle = [topBottomPaddings, mainContainer].join(" ");

    return (
        <Layout>
            <div className={pageStyle}>
                <ServicesSpoilers.Transportation/>
                <ServicesSpoilers.Neutralization/>
                <ServicesSpoilers.MedicalWaste/>
                <ServicesSpoilers.Training/>
                <ServicesSpoilers.Docs/>
                <div style={{display: 'flex', flex: '1'}}></div>
            </div>
        </Layout>);
};

export default Services;