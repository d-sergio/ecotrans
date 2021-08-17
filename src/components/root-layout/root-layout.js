import React from 'react';
import {AnchorRoot} from '../../libs/react-components/anchors';

function RootLayout (props) {

    return (
        <AnchorRoot>
            {props.children}
        </AnchorRoot>
    );
}

export default RootLayout;