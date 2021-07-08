import React, {Suspense, useContext} from 'react';
import MobileView from '../root-layout/view-context';

/**BlockStatistics
 * Props:
 * @param {Boolean} mobile - мобильный вид, если true
 */
function BlockStatistics() {
    const BlockStatisticsDesktop = React.lazy(() => import("./block-adv-desktop/block-adv-desktop"));
    const BlockStatisticsMobile = React.lazy(() => import("./block-adv-mobile/block-adv-mobile"));

    const mobileView = useContext(MobileView);

    //Защита для build, так как React.lazy и Suspense не совместимы с SSR
    const isSSR = typeof window === "undefined";

    return(
        <>
            {!isSSR && (
                <Suspense fallback={'Загрузка...'}>
                    {
                        mobileView ?
                        <BlockStatisticsMobile/>
                        : <BlockStatisticsDesktop/>
                    }
                </Suspense>
            )}
        </>
    );
}

export default BlockStatistics;