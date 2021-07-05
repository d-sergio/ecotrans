import React, {Suspense, useContext} from 'react';
import MobileView from '../root-layout/view-context';

/**Header
 * Props:
 * @param {Boolean} mobile - мобильный вид, если true
 */
function BlockAdvantages() {
    const BlockAdvDesktop = React.lazy(() => import("./block-adv-desktop/block-adv-desktop"));
    const BlockAdvMobile = React.lazy(() => import("./block-adv-mobile/block-adv-mobile"));

    const mobileView = useContext(MobileView);

    return(
        <Suspense fallback={'Загрузка...'}>
            {
                mobileView ?
                <BlockAdvMobile/>
                : <BlockAdvDesktop/>
            }
        </Suspense>

    );
}

export default BlockAdvantages;