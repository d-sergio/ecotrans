import React, {useContext} from 'react';
import ViewContext from '../components/root-layout/view-context';
import Header from '../components/header/header';

function Index() {
    const view = useContext(ViewContext);
    return (
        <>
            <Header/>
            <Header mobile={true}/>
        </>
    );
};

export default Index;