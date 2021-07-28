import React from 'react';
import {text} from './block-cost-desktop.module.css';
import {title} from '../../../common-styles/title.module.css';

function BlockCostDesktop() {
    return(
        <>
            <div className={title}>
                Узнайте стоимость необходимой услуги
            </div>

            <p className={text}>
                Отправьте запрос и наш менеджер свяжется с вами для уточнения деталей и составляения договора.
            </p>
        </>
    );
}

export default BlockCostDesktop;