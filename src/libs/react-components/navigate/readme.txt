Навигация с учётом якорей. То есть можно перейти с page1 к page2#anchor

Использование в Gatsby.js

1. Необходимо создать root-компонент всего приложения. Для этого в файле
gatsby-browser и gatsby-ssr.js надо добавить одинаковый код:

import React from 'react';
import RootLayout from '..путь к вашему root-компоненту';

export const wrapRootElement = ({ element }) => <RootLayout>{element}</RootLayout>;

2. В root-компоненте разместить NavRoot

import React, {useState} from 'react';
import {NavRoot} from '../../libs/react-components/navigate';

function RootLayout (props) {
    return (
        <NavRoot>
            {props.children}    //содержимое страниц сайта
        </NavRoot>
    );
}

export default RootLayout;

3. Установить якорь в нужном месте на странице, куда будет переход. И обернуть
её в NavPage. Или разместить между header и footer, чтобы, например, избежать
проблем со стилями для прижатия футера к низу страницы

import React from 'react';
import {NavPage} from '../libs/react-components/navigate';

function SomePage(props) {
    return(
        <Header/>
            <NavPage>
                ...
                <div id='anchor'></div>
                ...
            </NavPage>
        <Footer/>
    );
}

4. Обернуть элемент, содержащий ссылку на страницу, на которую будет переход,
в ToAnchor. И указать в пропс to имя якоря

import React from 'react';
import {ToAnchor} from '../../../libs/react-components/navigate';
import {Link} from 'gatsby';

function CurrentPage(props) {
    return(
        <ToAnchor to='#anchor'>
            <Link to='/somepage'>
                Нажми сюда
            </Link>
        </ToAnchor>
    );
}