import React, { useContext } from 'react';
import Buttons from '../../buttons';
import {spoilerTitle} from '../../../common-styles/title.module.css';
import {button, margin, titleStyle} from './spoilers-services-temp.module.css';
import MobileView from '../../root-layout/view-context';
import arrowPic from '../../../../static/images/spoiler/spoiler.svg';
import {mainContainer} from '../../../common-styles/containers.module.css';
import SpoilerFloat from '../../../libs/react-components/spoiler-float-icon';

/**
 * @param {String} serviceName - из какого блока сделан заказ:
 * docs, medical, neutralization, training, transportation
 */
function SpoilerServicesTemplate(props) {

    const deskShift = 16;
    const mobileShift = 28;

    const mobileView = useContext(MobileView);

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
                    mobileView ?
                        <Buttons.Order.Mobile serviceName={props.serviceName}/>
                        : <Buttons.Order.Desktop serviceName={props.serviceName}/>
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