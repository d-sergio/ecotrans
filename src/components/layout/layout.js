import React, { useEffect } from 'react';
import Header from '../header';
import Footer from '../footer';
import {wrapper, content} from './layout.module.css';
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

    const mobileView = useMediaQuery(config.app);

    useEffect(createObserver, []);

    /*Чтобы реклама от ростелекома, встраиваемая в HTTP-трафик не ломала функционал
    модальных окон. В global.css также скрыты все iframe*/
    function createObserver() {
        const observer = new MutationObserver(observerCallback);
        observer.observe(document.documentElement, {attributes: true});

        function observerCallback(mutations) {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'style') {
                    document.documentElement.style = '';
                }
            });
        }

        return () => observer.disconnect();
    }

    if (mobileView === undefined) return null;

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

            <footer><Footer/></footer>
            
        </div>
    );
}

export default Layout;