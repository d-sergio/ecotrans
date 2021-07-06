import React, {useContext, Suspense} from 'react';
import MobileView from '../root-layout/view-context';

function BlockInstagram() {
    const BlockInstagramDesktop = React.lazy(() => import('./block-instagram-desktop'));
    const BlockInstagramMobile = React.lazy(() => import('./block-instagram-mobile'));

    const mobileView = useContext(MobileView);

    //Защита для build, так как React.lazy и Suspense не совместимы с SSR
    const isSSR = typeof window === "undefined";

    return(
        <>
            {!isSSR && (
            <Suspense fallback={'Загрузка...'}>
                {mobileView ? <BlockInstagramMobile/> : <BlockInstagramDesktop/>}
            </Suspense>
            )}
        </>
    );
}

export default BlockInstagram;