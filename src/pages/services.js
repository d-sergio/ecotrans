import React, {useContext, useEffect} from 'react';
import PageName from '../components/root-layout/page-name-context';
import Layout from '../components/layout/layout';
import Transportation from '../components/services-spoilers/services-transportation/services-transportation';
import {mainContainer} from '../common-styles/containers.module.css';

function Services() {
    const pageName = useContext(PageName);

    useEffect(() => pageName.change('/services'), []);

    return (
        <Layout>
            <div className={mainContainer}>
                <Transportation/>
            </div>
        </Layout>);
};

export default Services;