import React, {useContext, useEffect} from 'react';
import PageName from '../components/root-layout/page-name-context';
import Layout from '../components/layout/layout';
import BlockDocs from '../components/block-docs';
import BlockRegulatory from '../components/block-regulatory';

function Clients() {
    const pageName = useContext(PageName);

    useEffect(() => pageName.change('/clients'), []);

    return (
        <Layout>
            <BlockDocs/>
            <BlockRegulatory/>
        </Layout>
    );
};

export default Clients;