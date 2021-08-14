import React, { useContext, useEffect, useRef } from 'react';
import Anchor from './anchor-context';
import { navigate } from '@reach/router';

function AnchorPage(props) {
    const mounted = useRef(true);

    const anchor = useContext(Anchor);

    useEffect(navigateTo, []);

    function navigateTo() {
        document.fonts.ready.then(() => {
            if (!mounted.current) return;

            navigate(anchor.anchor);
            
            anchor.changeAnchor('');
        });

        return () => mounted.current = false;
    }

    return <div>{props.children}</div>;
}

export default AnchorPage;