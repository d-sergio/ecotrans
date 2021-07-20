import React, {useContext, useEffect} from 'react';
import PageName from '../components/root-layout/page-name-context';
import Layout from '../components/layout/layout';
import LeafletMap from '../components/leaflet-map/leaflet-map';

function Contact() {
    const pageName = useContext(PageName);

    useEffect(() => pageName.change('/contact'), []);

    return (
        <Layout>
            <LeafletMap height={800}/>
        </Layout>);
};

export default Contact;