import React from 'react';
import {spoilerTitle} from '../../../common-styles/title.module.css';
import {button, margin, titleStyle} from './spoilers-services-temp.module.css';
import useMediaQuery from '../../../libs/react/react-hooks/use-media-query';
import config from '../../../config/config-media-queries.json';
import arrowPic from '../../../../static/images/spoiler/spoiler.svg';
import {mainContainer} from '../../../common-styles/containers.module.css';
import SpoilerFloat from '../../../libs/react-components/spoiler-float-icon';
import ButtonOrder from '../../buttons/button-order/button-order';
import ButtonOrderProject from '../../buttons/button-order/button-order-project';

/**
 * @param {String} orderName - из какого блока сделан заказ:
 * docs, medical, neutralization, training, transportation
 */
function SpoilerServicesTemplate(props) {

    const deskShift = 16;
    const mobileShift = 28;

    const mobileView = useMediaQuery(config.app);

    const titleSpoiler = <div style={{display: 'inline'}}>{props.title}</div>;

    const open =
        <img
            src={arrowPic}
            alt="spoiler arrow"
        />;

    const close =
        <img
            style={{transform: 'rotate(180deg'}}
            src={arrowPic}
            alt="spoiler arrow"
        />;

    const buttonStyle = [mainContainer, button].join(" ");
    const titleClass = [mainContainer, spoilerTitle, titleStyle].join(" ");

    const bodySpoiler = (
        <div>
            {props.body}
            <div className={buttonStyle}>
                {
                    props.project ?
                    <ButtonOrderProject orderName={props.orderName} mobile={mobileView}/>
                    : <ButtonOrder  mobile={mobileView} orderName={props.orderName}/>
                }
            </div>
        </div>
    );

    return (
        <div className={margin}>
            <SpoilerFloat
                iconShiftX={mobileView ? mobileShift : deskShift}
                title={titleSpoiler}
                titleClass={titleClass}
                body={bodySpoiler}
                open={open}
                close={close}
            />
        </div>
    );
}

export default SpoilerServicesTemplate;