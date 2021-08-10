import React, { useState } from 'react';
import Anchor from './anchor-context';

function AnchorRoot(props) {
    const [anchorState, setAnchor] = useState({
        anchor: '',
        changeAnchor: changeAnchor
    });

    function changeAnchor(newAnchor) {
        setAnchor({
            ...anchorState,
            anchor: newAnchor
        });
    }

    return(
        <Anchor.Provider value={anchorState}>
            {props.children}
        </Anchor.Provider>
    );
}

export default AnchorRoot;