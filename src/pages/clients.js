import React, {useContext, useEffect} from 'react';
import PageName from '../components/root-layout/page-name-context';
import Layout from '../components/layout/layout';

function Clients() {
    const pageName = useContext(PageName);

    useEffect(() => pageName.change('/clients'), []);

    return (
        <Layout>
        </Layout>);
};

export default Clients;