import React, {Suspense} from 'react';

/**Защита для build, так как React.lazy и Suspense не совместимы с SSR в Gatsby.
 * Достаточно просто применить вместо обычного Suspense этот компонент.
 * 
 * Проп fallback по умолчанию: строка 'Загрузка...'
*/
function GatsbySuspense(props) {
    const isSSR = typeof window === "undefined";

    return(
        <>
            {!isSSR && (
                <Suspense fallback={props.fallback}>
                    {props.children}
                </Suspense>
            )}
        </>
    );
}

GatsbySuspense.defaultProps = {
    fallback: 'Загрузка...'
};

export default GatsbySuspense;