import React, {useContext} from 'react';
import GatsbySuspense from '../../libs/gatsby-components/gatsby-suspense';
import MobileView from '../root-layout/view-context';

/**BlockPartners
 * Props:
 * @param {Boolean} mobile - мобильный вид, если true
 */
function BlockPartners() {
    const BlockPartnersDesktop = React.lazy(() => import("./block-partners-desktop/block-partners-desktop"));
    const BlockPartnersMobile = React.lazy(() => import("./block-partners-mobile/block-partners-mobile"));

    const mobileView = useContext(MobileView);

    return(
        <GatsbySuspense>
            {
                mobileView ?
                <BlockPartnersMobile/>
                : <BlockPartnersDesktop/>
            }
        </GatsbySuspense>
    );
}

export default BlockPartners;