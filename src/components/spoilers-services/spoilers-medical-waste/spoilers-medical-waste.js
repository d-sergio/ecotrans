import React from "react";
import SpoilerServicesTemplate from "../spoilers-services-temp";
import {green, greenDesktop, greenMobile, paragraph, image} from '../spoilers-services-common/spoilers-services-common.module.css';
import pic from '../../../../static/images/services-spoilers/medical-waste.png';
import {mainContainer} from '../../../common-styles/containers.module.css';
import {li} from './spoilers-medical-waste.module.css';

function MedicalWaste() {
    const paragraphStyle = [mainContainer, paragraph].join(" ");
    const greenDeskStyle = [green, greenDesktop].join(" ");
    const greenMobStyle = [green, greenMobile].join(" ");

    const title = (
        <>Сбор, транспортирование и обезвреживание медицинских отходов</>
    );

    const body = (
        <>
            <div className={paragraphStyle}>
                <img className={image} src={pic} alt="medical-waste"/>

                <p className={paragraph}>
                    Сбор, транспортировка, обезвреживание, утилизация медицинских отходов А,Б,В,Г классов:
                </p>

                <ul>
                    <li className={li}>Утилизация/обезвреживание органических отходов;</li>
                    <li className={li}>Утилизация/обезвреживание одноразовых шприцев и игл;</li>
                    <li className={li}>Утилизация/обезвреживание диализных систем;</li>
                    <li className={li}>Утилизация/обезвреживание дезинфицирующих средств;</li>
                    <li className={li}>Утилизация/обезвреживание люминесцентных ламп и ртутьсодержащих приборов;</li>
                    <li className={li}>Утилизация/обезвреживание лекарственных препаратов.</li>
                </ul>
                
                <br/>

                <div className={greenDeskStyle}>
                    ООО “Экотранс” все манипуляции осуществляет в соответствии<br/>
                    с требованиями действующего законодательства РФ!
                </div>
            </div>

            <div className={greenMobStyle}>
                ООО “Экотранс” все манипуляции осуществляет в соответствии<br/>
                с требованиями действующего законодательства РФ!
            </div>

            <p className={paragraphStyle}>
                Наша компания осуществляет сбор, вывоз и утилизацию фармацевтических
                отходов из различных медицинских учреждений, аптек и фармацевтических
                компаний.
            </p>
            <div style={{clear: 'both'}}></div>
        </>
    );

    return(
        <SpoilerServicesTemplate orderName='medical' title={title} body={body}/>
    );
}

export default MedicalWaste;