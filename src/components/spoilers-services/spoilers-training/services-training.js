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
                    Тема обучения сотрудников в сфере экологии является одной
                    из самых актуальных, так как затрагивает проблемы охраны
                    окружающей среды и уменьшения негативного воздействия на нее.
                    К ним относится обучение по обращению с опасными отходами и
                    экологической безопасности. Единственное, в чем остается
                    разобраться при выборе обучающей программы – какую категорию
                    сотрудников необходимо обучить.
                </p>

                <div className={greenDeskStyle}>
                    Требования по прохождению обучения направлены<br/>
                    не только наповышение уровня знаний специалистов, но и на<br/>
                    внедрение принципов устойчивого развития их организаций.
                </div>
            </div>

            <div className={greenMobStyle}>
                Требования по прохождению обучения направлены<br/>
                не только наповышение уровня знаний специалистов, но и на<br/>
                внедрение принципов устойчивого развития их организаций.
            </div>

            <p className={paragraphStyle}>
                Требования являются обязательными, так как при их нарушении
                предприятию могут грозить значительные штрафы. 
            </p>
            <p className={paragraphStyle}>
                У нас накоплен опыт сотрудничества по данным направлениям с
                коммерческими, государственными и муниципальными предприятиями
                различных субъектов РФ. Оставьте заявку на обучение на сайте прямо сейчас!
            </p>
        </>
    );

    return(
        <SpoilerServicesTemplate project={true} orderName='training' title={title} body={body}/>
    );
}

export default Training;