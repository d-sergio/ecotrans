import React from 'react';
import Slider from '../../../libs/react-components/sliders/slider';
import Cards from '../../cards-advantages';
import {mobileContainerWhite} from '../../../common-styles/containers.module.css';
import {titleMobile} from '../../../common-styles/title.module.css';


const advCards = [
    <Cards.Ecologist mobile={true}/>,
    <Cards.License mobile={true}/>,
    <Cards.Technologies mobile={true}/>,
    <Cards.Training mobile={true}/>
];

const titleStyle = [titleMobile, mobileContainerWhite].join(" "); 

function BlockAdvMobile() {
    return(
        <>
            <div className={titleStyle}>Наши преимущества</div>
            <Slider visible={0} adjacent={true}>{advCards}</Slider>
        </>
    );
}

export default BlockAdvMobile;