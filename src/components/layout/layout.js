import React, {useContext} from 'react';
import Header from '../header';
import Footer from '../footer';
import {wrapper, content} from './layout.module.css';
import MobileView from '../root-layout/view-context';
import config from '../../config/config-media-queries.json';
import ScrollUp from '../../libs/react-components/scroll-up';
import Buttons from '../buttons';
import useMediaQuery from '../../libs/react/react-hooks/use-media-query';
import { NavPage } from '../../libs/react-components/navigation-highlight';

/**
 * Props:
 * @param {String} currentPage - текущая страница. Например, '/home'
*/
function Layout(props) {

    const mobileView = useContext(MobileView);

    const footerView = useMediaQuery(config.footer);

    return(
        <div className={wrapper}>

            <div className={content}>

                <header>
                    <NavPage currentPage={props.currentPage}>
                        <Header mobile={mobileView}/>
                    </NavPage>
                </header>

                <main>
                    <ScrollUp
                        key={mobileView}
                        button={<Buttons.ScrollUp/>}
                        contentWidth={1440}
                        shiftX={mobileView ? 20 : 88}
                        bottom='30px'
                    />

                    {props.children}
                </main>

            </div>

            <footer><Footer mobile={footerView}/></footer>
            
        </div>
    );
}

export default Layout;