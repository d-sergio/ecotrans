import React, {useContext, useEffect} from 'react';
import PageName from '../components/root-layout/page-name-context';
import Layout from '../components/layout/layout';
import ServicesSpoilers from '../components/spoilers-services';
import {topPaddings} from '../common-styles/pages.module.css';
import MobilePageTitle from '../components/mobile-page-title';
import {AnchorPage} from '../libs/react-components/anchors';

function Services() {
    /*const pageName = useContext(PageName);

    useEffect(() => pageName.change('/services'), []);*/

    return (
        <AnchorPage>
            <Layout currentPage='/services'>
                <div style={{paddingBottom: '10px'}} className={topPaddings}>
                    <MobilePageTitle title={'Услуги'}/>
                    <span id='transportation'></span>
                    <ServicesSpoilers.Transportation/>
                    <span id='neutralization'></span>
                    <ServicesSpoilers.Neutralization/>
                    <span id='medicalwaste'></span>
                    <ServicesSpoilers.MedicalWaste/>
                    <span id='training'></span>
                    <ServicesSpoilers.Training/>
                    <span id='docs'></span>
                    <ServicesSpoilers.Docs/>
                </div>
            </Layout>
        </AnchorPage>
    );
};

export default Services;