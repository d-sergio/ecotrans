import React from 'react';
import Slider from '../../../libs/react-components/sliders/slider';
import Cards from '../../cards-advantages';
import config from '../../../config/config-media-queries.json';
import {mainContainer} from '../../../common-styles/containers.module.css';
import {freezeContainer, container} from './block-adv-desktop.module.css';
import {title} from '../../../common-styles/title.module.css';
import useMediaQuery from '../../../libs/react/react-hooks/use-media-query';

/**Блок "Преимущества работы с нами" (десктопный)*/
function BlockAdvDesktop() {
    const advCards = [
        <Cards.Ecologist key='Ecologist'/>,
        <Cards.License key='License'/>,
        <Cards.Technologies key='Technologies'/>,
        <Cards.Training key='Training'/>
    ];
    
    const titleStyle = [title, mainContainer].join(" ");
    
    const queries = {
        small: config.blockAdvDesktop.small,
        large: config.blockAdvDesktop.large
    };

    const active = useMediaQuery(queries);

    if (active === undefined) return null;

    return(
        <section className={container}>
            <div className={titleStyle}>Преимущества работы с нами</div>
            <div className={active ? null : freezeContainer}>
                <Slider
                    key={active}
                    visible={active ? 0 : 4}
                    adjacent={active ? true : false}
                    freeze={active ? false : true}>

                    {advCards}
                    
                </Slider>
            </div>
        </section>
    );
}

export default BlockAdvDesktop;