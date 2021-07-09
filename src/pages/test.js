import React, {useContext, useEffect, useRef, useState} from 'react';
import MobileView from '../components/root-layout/view-context';
import Layout from '../components/layout/layout';

function Test() {
    const view = useContext(MobileView);

    return (
        <Layout>
            {view ? 'mobile' : 'desktop'}
        </Layout>);
};

export default Test;