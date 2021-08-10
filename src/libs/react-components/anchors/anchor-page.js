import React, { useContext, useEffect } from 'react';
import Anchor from './anchor-context';
import { navigate } from '@reach/router';

function AnchorPage(props) {
    const anchor = useContext(Anchor);

    useEffect(navigateTo, []);

    function navigateTo() {
        navigate(anchor.anchor);
        anchor.changeAnchor('');
    }

    return <div>{props.children}</div>;
}

export default AnchorPage;