import React, {useContext, useEffect} from 'react';
import PageName from '../components/root-layout/page-name-context';
import Layout from '../components/layout/layout';
import BlockContact from '../components/block-contact/block-contact';

function Contact() {
    const pageName = useContext(PageName);

    useEffect(() => pageName.change('/contact'), []);

    return (
        <Layout>
            <BlockContact/>
        </Layout>);
};

export default Contact;