import React, {useContext, useEffect, useRef, useState} from 'react';
import MobileView from '../components/root-layout/view-context';
import Layout from '../components/layout/layout';
import Card from '../components/cards-projects';

function Test() {
    const view = useContext(MobileView);

    return (
        <Layout>
            <div style={{height: '50px'}}></div>
            <div style={{display: 'flex'}}>
                <div style={
                    {
                        width: '490px',
                        height: '490px',
                        overflow: 'hidden',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <Card.Education.Desktop smallMode={false}/>
                </div>
                <div style={
                    {
                        width: '490px',
                        height: '490px',
                        overflow: 'hidden',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <Card.Education.Desktop smallMode={true}/>
                </div>
            </div>
            <div style={{height: '50px'}}></div>
            
            {view ? 'mobile' : 'desktop'}
        </Layout>);
};

export default Test;