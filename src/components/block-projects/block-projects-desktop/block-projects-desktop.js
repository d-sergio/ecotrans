import React, { useEffect, useState } from 'react';
import Slider from '../../../libs/react-components/sliders/desktop-projects/slider';
import {container} from './block-projects-desktop.module.css';
import Cards from '../../cards-projects';
import Buttons from '../../buttons';
import mediaQuery from '../../../libs/react/media-query';

const cards = [
    <Cards.Technopark.Desktop/>,
    <Cards.Green.Desktop/>,
    <Cards.Education.Desktop/>
];

const ArrowLeft = () => (
    <Buttons.Arrow.DesktopLeft/>
);

const ArrowRight = () => (
    <Buttons.Arrow.DesktopRight/>
);

function BlockProjectsDesktop() {
    const queries = {
        small: "screen and (max-width: 1439px)",
        large: "screen and (min-width: 1440px)"
    };

    const [smallView, setSmallView] = useState();

    useEffect(() => mediaQuery(smallView, setSmallView, queries), []);

    if (smallView === undefined) return null; 

    return(
        <div className={smallView ? null : container}>
            <Slider
                key={smallView}
                visible={smallView ? 1 : 3}
                adjacent={smallView ? true : false}
                prev={<ArrowLeft/>}
                next={<ArrowRight/>}
                buttonShift={60}>

                {cards}

            </Slider>
            {smallView}
        </div>
);
}

export default BlockProjectsDesktop;