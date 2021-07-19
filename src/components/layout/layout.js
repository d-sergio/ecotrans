import React, {useState, useContext, useEffect} from 'react';
import Header from '../header';
import Footer from '../footer';
import {wrapper, content} from './layout.module.css';
import mediaQuery from '../../libs/react/media-query';
import MobileView from '../root-layout/view-context';
import config from '../../config/config-media-queries.json';

function Layout(props) {
    const queries = {
        small: config.footer.small,
        large: config.footer.large
    };

    const headerView = useContext(MobileView);

    const [footerView, setFooterView] = useState(undefined);

    useEffect(() => mediaQuery(footerView, setFooterView, queries), []);
    
    if (footerView === undefined) return null;  

    return(
        <div className={wrapper}>

            <div className={content}>

                <header><Header mobile={headerView}/></header>

                <main>
                    {props.children}
                </main>

            </div>

            <footer><Footer mobile={footerView}/></footer>
            
        </div>
    );
}

export default Layout;