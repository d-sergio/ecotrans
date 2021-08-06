import React, {useState, useContext, useEffect} from 'react';
import Header from '../header';
import Footer from '../footer';
import {wrapper, content} from './layout.module.css';
import mediaQuery from '../../libs/react/media-query';
import MobileView from '../root-layout/view-context';
import config from '../../config/config-media-queries.json';
import ScrollUp from '../../libs/react-components/scroll-up';
import Buttons from '../buttons';
import {mainContainer} from '../../common-styles/containers.module.css';

function Layout(props) {
    const queries = {
        small: config.footer.small,
        large: config.footer.large
    };


    const mobileView = useContext(MobileView);

    const [footerView, setFooterView] = useState(undefined);

    useEffect(() => mediaQuery(footerView, setFooterView, queries), []);

    if (footerView === undefined) return null;  

    return(
        <div className={wrapper}>

            <div className={content}>

                <header><Header mobile={mobileView}/></header>

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

/*
<ScrollUp
    key={mobileView}
    button={<Buttons.ScrollUp/>}
    left={mobileView ? '80%' : '90%'}
    top='90%'
    end={mobileView ? 0 : 78}
>
    {props.children}
</ScrollUp>
*/

export default Layout;