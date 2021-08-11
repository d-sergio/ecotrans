import React from 'react';
import Layout from '../components/layout/layout';
import BlockDocs from '../components/block-docs';
import BlockRegulatory from '../components/block-regulatory';
import BlockCalendar from '../components/block-calendar';
import MobilePageTitle from '../components/mobile-page-title';

function Clients() {

    return (
        <Layout currentPage='/clients'>
            <MobilePageTitle title={'Клиентам'}/>
            <BlockDocs/>
            <BlockRegulatory/>
            <BlockCalendar/>
        </Layout>
    );
};

export default Clients;