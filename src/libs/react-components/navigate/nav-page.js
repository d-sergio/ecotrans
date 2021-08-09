import React, { useContext, useEffect } from 'react';
import Destination from './destination-context';
import { navigate } from '@reach/router';

function NavPage(props) {
    const destination = useContext(Destination);

    useEffect(navigateTo, []);

    function navigateTo() {
        navigate(destination.destination);
        destination.changeDestination('');
    }

    return <div>{props.children}</div>;
}

export default NavPage;