import React, {useContext} from 'react';
import Header from '../header';
import Footer from '../footer';
import MobileView from '../root-layout/view-context';

function Layout(props) {
    const view = useContext(MobileView);

    return(
        <>
            <Header mobile={view}/>
                {props.children}
            <Footer mobile={view}/>
        </>
    );
}

export default Layout;