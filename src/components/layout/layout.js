import React, {useContext} from 'react';
import Header from '../header';
import Footer from '../footer';
import MobileView from '../root-layout/view-context';
import {wrapper, content} from './layout.module.css';

function Layout(props) {
    const view = useContext(MobileView);

    return(
        <div className={wrapper}>

            <div className={content}>

                <header><Header mobile={view}/></header>

                <main>
                    {props.children}
                </main>

            </div>

            <footer><Footer mobile={view}/></footer>
            
        </div>
    );
}

export default Layout;