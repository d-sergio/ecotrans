import React, {useContext} from 'react';
import ViewContext from '../components/root-layout/view-context';
import Buttons from '../components/buttons';
import CardsServices from '../components/cards-services';
import CardsProjects from '../components/cards-projects';
import Layout from '../components/layout/layout';

function Test() {
    const view = useContext(ViewContext);
    return (
        <Layout>
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
                <CardsProjects.Green.Mobile/>
                <CardsProjects.Technopark.Mobile/>
                <CardsProjects.Education.Mobile/>  
                <CardsProjects.Green.Desktop smallMode={true}/>
                <CardsProjects.Education.Desktop smallMode={true}/>
                <CardsProjects.Technopark.Desktop smallMode={true}/>
                <CardsProjects.Education.Desktop/>
                <CardsProjects.Green.Desktop/>
                <CardsProjects.Technopark.Desktop/> 
            </div>
            <Buttons.Contact.Mobile/>
            <p>.</p>
            <Buttons.Contact.Desktop/>
            <p>.</p>
            <Buttons.Choose.Mobile/>
            <p>.</p>
            <Buttons.Choose.Desktop/>
            <p>.</p>
            <Buttons.Call.Mobile/>
            <p>.</p>
            <Buttons.Call.Desktop/>
            <p>.</p>
            <Buttons.Detailed/>
            <p>.</p>
            <Buttons.Send.Mobile/>
            <p>.</p>
            <Buttons.Send.Desktop/>
            <p>.</p>
            <Buttons.Subscribe.Mobile/>
            <p>.</p>
            <Buttons.Subscribe.Desktop/>
            <p>.</p>
            <Buttons.Arrow.MobileLeft/>
            <p>.</p>
            <Buttons.Arrow.MobileRight/>
            <p>.</p>
            <Buttons.Arrow.DesktopLeft/>
            <p>.</p>
            <Buttons.Arrow.DesktopRight/>
            <Buttons.Menu/>
            {view}
        </Layout>);
};

export default Test;