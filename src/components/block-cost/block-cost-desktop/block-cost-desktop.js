import React from 'react';
import {text, main} from './block-cost-desktop.module.css';
import {title} from '../../../common-styles/title.module.css';
import CostForm from '../cost-form';

function BlockCostDesktop() {
    return(
        <>
            <div className={title}>
                Узнайте стоимость необходимой услуги
            </div>

            <p className={text}>
                Отправьте запрос и наш менеджер свяжется с вами для уточнения деталей и составляения договора.
            </p>

            <div className={main}>
                <CostForm/>
            </div>
            
            <div style={{clear: 'both'}}></div>
        </>
    );
}

export default BlockCostDesktop;