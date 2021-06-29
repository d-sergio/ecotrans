import React, {useContext} from 'react';
import ViewContext from '../components/root-layout/view-context';
import Buttons from '../components/buttons';
import CardsServices from '../components/cards-services';

function Index() {
    const view = useContext(ViewContext);
    return (<>
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
            <CardsServices.Transport.Mobile/>
            <CardsServices.Docs.Mobile/>
            <CardsServices.Training.Mobile/>
            <CardsServices.Medical.Mobile/>
            <CardsServices.Neutral.Mobile/>
            <CardsServices.Docs.Small/>
            <CardsServices.Medical.Small/>
            <CardsServices.Neutral.Small/>
            <CardsServices.Training.Small/>
            <CardsServices.Transport.Small/>
            <CardsServices.Docs.Large/>
            <CardsServices.Medical.Large/>
            <CardsServices.Neutral.Large/>
            <CardsServices.Training.Large/>
            <CardsServices.Transport.Large/>
        </div>
        <Buttons.Contact/>
        <p>.</p>
        <Buttons.Choose/>
        <p>.</p>
        <Buttons.Call/>
        <p>.</p>
        <Buttons.Detailed/>
        <p>.</p>
        <Buttons.Send/>
        <p>.</p>
        <Buttons.Subscribe/>
        <p>.</p>
        <Buttons.ArrowRight/>
        <p>.</p>
        <Buttons.ArrowLeft/>
        <p>.</p>
        {view}
    </>);
};

export default Index;