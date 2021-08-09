import React, { useContext } from 'react';
import Destination from './destination-context';

function DestinationAnchor(props) {

    const destination = useContext(Destination);

    function onClick() {
        destination.changeDestination(props.to);
    }

    return(
        <div onClick={onClick}>
            {props.children}
        </div>
    );
}

export default DestinationAnchor;

DestinationAnchor.defaultProps = {
    to: ''
};