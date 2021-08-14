import React from 'react';
import Slider from '../../../libs/react-components/sliders/slider';
import Cards from '../../cards-advantages';
import {mainContainer} from '../../../common-styles/containers.module.css';
import {title} from '../../../common-styles/title.module.css';

const advCards = [
    <Cards.Ecologist mobile={true} key='CardAdvMobEcologist'/>,
    <Cards.License mobile={true} key='CardAdvMobLicense'/>,
    <Cards.Technologies mobile={true} key='CardAdvMobTechnologies'/>,
    <Cards.Training mobile={true} key='CardAdvMobTraining'/>
];

const titleStyle = [title, mainContainer].join(" "); 

function BlockAdvMobile() {
    return(
        <section style={{marginBottom: '12px'}}>
            <div className={titleStyle}>Наши преимущества</div>
            <Slider
            visible={0}
            adjacent={true}>

                {advCards}
                
            </Slider>
        </section>
    );
}

export default BlockAdvMobile;