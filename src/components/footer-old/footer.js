import React from 'react';
import useMediaQuery from '../../libs/react/react-hooks/use-media-query';
import config from '../../config/config-media-queries.json';
import GatsbySuspense from '../../libs/gatsby-components/gatsby-suspense';

function Footer() {
    const FooterMobile = React.lazy(() => import('./footer-mobile'));
    const FooterDesktop = React.lazy(() => import('./footer-desktop'));

    const mobileView = useMediaQuery(config.footer);

    if (mobileView === undefined) return null;
    
    return (
        <GatsbySuspense>
            {mobileView ? <FooterMobile/> : <FooterDesktop/>}
        </GatsbySuspense>
    );
}

export default Footer;