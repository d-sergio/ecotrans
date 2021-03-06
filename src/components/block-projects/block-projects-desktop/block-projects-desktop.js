import React from 'react';
import Slider from '../../../libs/react-components/sliders/desktop-projects/slider';
import {container, marginBottom} from './block-projects-desktop.module.css';
import Cards from '../../cards-projects';
import Buttons from '../../buttons';
import useMediaQuery from '../../../libs/react/react-hooks/use-media-query';
import config from '../../../config/config-media-queries.json';

const cards = [
    <Cards.Technopark.Desktop key='ProjectsDeskTechnopark'/>,
    <Cards.Green.Desktop key='ProjectsDeskGreen'/>,
    <Cards.Education.Desktop key='ProjectsDeskEducation'/>
];

const ArrowLeft = () => (
    <Buttons.Arrow.DesktopLeft/>
);

const ArrowRight = () => (
    <Buttons.Arrow.DesktopRight/>
);

function BlockProjectsDesktop() {

    const smallView = useMediaQuery(config.blockProjectsDesktop.smallView);
    const buttonShift = useMediaQuery(config.blockProjectsDesktop.buttonShift);

    const containerStyle = [marginBottom, container].join(" ");

    return(
        <section className={smallView ? marginBottom : containerStyle}>
            <Slider
                key={smallView + buttonShift}
                visible={smallView ? 1 : 3}
                adjacent={smallView ? true : false}
                prev={<ArrowLeft/>}
                next={<ArrowRight/>}
                buttonShift={buttonShift ? 30 : 60}>

                {cards}

            </Slider>
            {smallView}
        </section>
);
}

export default BlockProjectsDesktop;