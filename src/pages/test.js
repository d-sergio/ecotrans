import React, {useContext, useEffect, useState} from 'react';
import MobileView from '../components/root-layout/view-context';
import CardsStatistics from '../components/cards-statistics/cards-statistics';
import Layout from '../components/layout/layout';
import SliderStatistics from '../components/slider-statistics/slider';

function Test() {
    const view = useContext(MobileView);

    const [active, setActive] = useState(false);

    /*useEffect(() => {
        const timer = setTimeout(() => {
            setActive(!active);
        }, 1000);

        return () => clearTimeout(timer);
    }, [active]);*/

    return (
        <Layout>
            <div style={{display: 'flex'}}>
                <SliderStatistics visible={5} autoMove={true} cancelAutoMove={true}>
                    <CardsStatistics.DangerClass/>
                    <CardsStatistics.TenYears/>
                    <CardsStatistics.Tko/>
                    <CardsStatistics.WasteClass/>
                    <CardsStatistics.MedicalWaste/>
                </SliderStatistics>
            </div>
            {view ? 'mobile' : 'desktop'}
        </Layout>);
};

export default Test;