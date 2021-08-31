import React from 'react';
import {AnchorRoot} from '../../libs/gatsby-components/anchors';

function RootLayout (props) {

    return (
        <AnchorRoot>
            {props.children}
        </AnchorRoot>
    );
}

export default RootLayout;