import React from 'react';
import {AnchorRoot} from '../../libs/gatsby-components/anchors';
import { Helmet } from 'react-helmet';

function RootLayout (props) {

    return (
        <>
            <Helmet>
                <title>Экотранс - траспортировка, утилизация и обезвреживание отходов</title>
                <meta name="description" content="Компания Экотранс предоставляет услуги по траспортировке, утилизации и обезвреживанию отходов, а также сбор, транспортировку, обезвреживание, утилизацию медицинских отходов А,Б,В,Г классов, обучение по обращению с отходами и другие услуги экологической направленности"/>
                <meta name="keywords" content="траспортировка отходов, утилизация отходов, обезвреживание отходов, Экотранс Курск"/>
            </Helmet>
            <AnchorRoot>
                {props.children}
            </AnchorRoot>
        </>
    );
}

export default RootLayout;