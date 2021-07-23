import React from 'react';
import {container} from './block-services-desktop.module.css';
import {mainContainer} from '../../../common-styles/containers.module.css';
import Cards from '../../cards-services';
import Spinner from '../../../libs/react-components/spinner';
import Buttons from '../../buttons';

function BlockServicesDesktop() {
    const cards = [
        [<Cards.Docs.Small/>, <Cards.Docs.Large/>],
        [<Cards.Neutral.Small/>, <Cards.Neutral.Large/>],
        [<Cards.Transport.Small/>, <Cards.Training.Large/>],
        [<Cards.Medical.Small/>, <Cards.Medical.Large/>],
        [<Cards.Training.Small/>, <Cards.Training.Large/>]
    ];

    const next = <Buttons.Arrow.DesktopLeft/>;
    const prev = <Buttons.Arrow.DesktopRight/>;

    return(
        <div className={mainContainer}>
            <div className={container}>
                <Spinner
                    prev={prev}
                    next={next}>

                    {cards}

                </Spinner>
            </div>
        </div>
    );
}

export default BlockServicesDesktop;