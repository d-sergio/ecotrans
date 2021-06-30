import React, {useContext} from 'react';
import Header from '../header';
import Footer from '../footer';
import ViewContext from '../root-layout/view-context';

function Layout(props) {
    const view = useContext(ViewContext);
    const mobileView = view === 'mobile' ? true : false;

    return(
        <>
            <Header mobile={mobileView}/>
                {props.children}
            <Footer mobile={mobileView}/>
        </>
    );
}

export default Layout;