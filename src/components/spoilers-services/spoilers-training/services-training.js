import React from "react";
import SpoilerServicesTemplate from "../spoilers-services-temp";
import {green, paragraph, image} from '../spoilers-services-common/spoilers-services-common.module.css';
import pic from '../../../../static/images/services-spoilers/training.png';

function Training() {
    const title = (
        <>Обучение по обращению с отходами</>
    );

    const body = (
        <>
            <img className={image} src={pic} alt="training"/>

            <p className={paragraph}>
                Одной из актуальнейших тематик на данный момент являются
                темы обучения, затрагивающие охрану окружающей среды и уменьшения
                воздействия на нее. К ним относится обучение по обращению с
                опасными отходами и экологической безопасности. Единственное,
                в чем остается разобраться при выборе обучающей программы –
                какую категорию сотрудников необходимо обучить.
            </p>

            <div className={green}>
                Требования по прохождению обучения направлены<br/>
                не только на повышение уровня знаний специалистов. 
            </div>

            <p className={paragraph}>
            Они являются законодательным требованием, при нарушении которого
            предприятию могут грозить значительные штрафы. Оставьте заявку
            на обучение на сайте прямо сейчас!
            </p>
            <p className={paragraph}>
                У нас накоплен положительный опыт сотрудничества по данным
                направлениям с коммерческими, государственными и муниципальными
                предприятиями различных субъектов РФ.
            </p>
        </>


    );

    return(
        <SpoilerServicesTemplate title={title} body={body}/>
    );
}

export default Training;