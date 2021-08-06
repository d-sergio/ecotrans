import React, {useContext, useEffect} from 'react';
import PageName from '../components/root-layout/page-name-context';
import Layout from '../components/layout/layout';
import BlockDocs from '../components/block-docs';
import BlockRegulatory from '../components/block-regulatory';
import BlockCalendar from '../components/block-calendar';
import MobilePageTitle from '../components/mobile-page-title';

function Clients() {
    const pageName = useContext(PageName);


    useEffect(() => pageName.change('/clients'), []);


    return (
        <Layout>
            <MobilePageTitle title={'Клиентам'}/>
            <BlockDocs/>
            <BlockRegulatory/>
            <BlockCalendar/>
        </Layout>
    );
};

export default Clients;