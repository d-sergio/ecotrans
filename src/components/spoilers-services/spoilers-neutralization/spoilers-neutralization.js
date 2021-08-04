import React from "react";
import SpoilerServicesTemplate from "../spoilers-services-temp";
import {green, greenDesktop, greenMobile, paragraph, image} from '../spoilers-services-common/spoilers-services-common.module.css';
import pic from '../../../../static/images/services-spoilers/neutralization.png';
import {mainContainer} from '../../../common-styles/containers.module.css';

function Neutralization() {
    const paragraphStyle = [mainContainer, paragraph].join(" ");
    const greenDeskStyle = [green, greenDesktop].join(" ");
    const greenMobStyle = [green, greenMobile].join(" ");

    const title = (
        <>Утилизация и обезвреживание отходов 1-4 классов опасности</>
    );

    const body = (
        <>
            <div className={paragraphStyle}>
                <img className={image} src={pic} alt="neutralization"/>

                <p className={paragraph}>
                    Мы используем для обезвреживания современные установки и технологии,
                    сокращая и минимизируя негативное влияние на окружающую среду. На данный момент
                    нами применяется: инсинераторные установки, производящая термическое обезвреживание
                    опасных отходов 1 - 4 класса опасности,  и технологии, понижающие класс опасности.
                </p>

                <div className={greenDeskStyle}>
                    При появлении отходов 1 - 4 классов опасности,<br/>
                    важно обеспечить передачу в организацию,<br/>
                </div>
            </div>

            <div className={greenMobStyle}>
                    При появлении отходов 1 - 4 классов опасности,<br/>
                    важно обеспечить передачу в организацию,<br/>
                </div>

            <p className={paragraphStyle}>
                Утилизация отходов 1-4 классов опасности является неотъемлемой частью
                производственной сферы, связанной с изготовлением оборудования,
                хранением и переработкой различных материалов. При осуществлении
                такой деятельности часть вторичного сырья перерабатывается
                непосредственно на предприятии. 
            </p>
            <p className={paragraphStyle}>
                Другая часть вывозится на полигоны, где подвергается процессам,
                направленным на создание продуктов вторичного использования или
                полного уничтожения до образования безопасных веществ. Существуют
                разные подходы к утилизации промышленных и бытовых отходов. Критерии
                выбора зависят от той категории, к которой относятся побочные продукты.  
            </p>
        </>
    );

    return(
        <SpoilerServicesTemplate title={title} body={body}/>
    );
}

export default Neutralization;