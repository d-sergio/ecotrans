import React, {useContext, useEffect, useState} from 'react';
import MobileView from '../components/root-layout/view-context';
import Layout from '../components/layout/layout';
import BlockStatsDesktop from '../components/block-statistics/block-statistics-desktop/block-stats-desktop';

function Test() {
    const view = useContext(MobileView);

    const [active, setActive] = useState(false);

    /*useEffect(() => {
        const timer = setTimeout(() => {
            setActive(!active);
        }, 1000);

        return () => clearTimeout(timer);
    }, [active]);*/

    return (
        <Layout>
            <BlockStatsDesktop/>
            {view ? 'mobile' : 'desktop'}
        </Layout>);
};

export default Test;