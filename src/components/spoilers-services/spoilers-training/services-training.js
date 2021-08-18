import React from "react";
import SpoilerServicesTemplate from "../spoilers-services-temp";
import {green, greenDesktop, greenMobile, paragraph, image} from '../spoilers-services-common/spoilers-services-common.module.css';
import pic from '../../../../static/images/services-spoilers/training.png';
import {mainContainer} from '../../../common-styles/containers.module.css';

function Training() {
    const paragraphStyle = [mainContainer, paragraph].join(" ");
    const greenDeskStyle = [green, greenDesktop].join(" ");
    const greenMobStyle = [green, greenMobile].join(" ");

    const title = (
        <>Обучение по обращению с отходами</>
    );

    const body = (
        <>
            <div className={paragraphStyle}>
                <img className={image} src={pic} alt="training"/>

                <p className={paragraph}>
                    Одной из актуальнейших тематик на данный момент являются
                    темы обучения, затрагивающие охрану окружающей среды и уменьшения
                    воздействия на нее. К ним относится обучение по обращению с
                    опасными отходами и экологической безопасности. Единственное,
                    в чем остается разобраться при выборе обучающей программы –
                    какую категорию сотрудников необходимо обучить.
                </p>

                <div className={greenDeskStyle}>
                    Требования по прохождению обучения направлены<br/>
                    не только на повышение уровня знаний специалистов. 
                </div>
            </div>

            <div className={greenMobStyle}>
                Требования по прохождению обучения направлены<br/>
                не только на повышение уровня знаний специалистов. 
            </div>

            <p className={paragraphStyle}>
            Они являются законодательным требованием, при нарушении которого
            предприятию могут грозить значительные штрафы. Оставьте заявку
            на обучение на сайте прямо сейчас!
            </p>
            <p className={paragraphStyle}>
                У нас накоплен положительный опыт сотрудничества по данным
                направлениям с коммерческими, государственными и муниципальными
                предприятиями различных субъектов РФ.
            </p>
        </>
    );

    return(
        <SpoilerServicesTemplate training={true} title={title} body={body}/>
    );
}

export default Training;