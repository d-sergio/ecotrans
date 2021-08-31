import React, { useContext } from 'react';
import Destination from './anchor-context';

function ToAnchor(props) {

    const anchor = useContext(Destination);

    function onClick() {
        anchor.changeAnchor(props.to);
    }

    return(
        <div onClick={onClick}>
            {props.children}
        </div>
    );
}

export default ToAnchor;

ToAnchor.defaultProps = {
    to: ''
};