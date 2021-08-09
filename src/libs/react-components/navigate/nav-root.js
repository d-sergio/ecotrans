import React, { useState } from 'react';
import Destination from './destination-context';

function NavRoot(props) {
    const [destinationPage, setDestinationPage] = useState({
        destination: '',
        changeDestination: changeDestination
    });

    function changeDestination(destination) {
        setDestinationPage({
            ...destinationPage,
            destination: destination
        });
    }

    return(
        <Destination.Provider value={destinationPage}>
            {props.children}
        </Destination.Provider>
    );
}

export default NavRoot;