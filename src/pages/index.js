import React, {useContext} from 'react';
import Buttons from '../components/buttons';
import ViewContext from '../components/root-layout/view-context';

function Index() {
    const view = useContext(ViewContext);
    return (<>
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
        <Buttons.ArrowLeft/>
        <p>.</p>
        <Buttons.ArrowRight/>
        <p>.</p>
        {view}
    </>);
};

export default Index;