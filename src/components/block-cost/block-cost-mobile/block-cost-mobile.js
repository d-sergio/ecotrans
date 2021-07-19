import React from 'react';
import {main} from './block-cost-mobile.module.css';
import {title} from '../../../common-styles/title.module.css';
import CostForm from '../cost-form';

function BlockCostMobile() {
    return(
        <>
            <div className={title}>
                Узнайте стоимость услуги
            </div>

            <div className={main}>
                <CostForm/>
            </div>
            
            <div style={{clear: 'both'}}></div>
        </>
    );
}

export default BlockCostMobile;