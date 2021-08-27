import React from "react";
import SpoilerServicesTemplate from "../spoilers-services-temp";
import {green, greenDesktop, greenMobile, paragraph, image} from '../spoilers-services-common/spoilers-services-common.module.css';
import pic from '../../../../static/images/services-spoilers/docs.png';
import {mainContainer} from '../../../common-styles/containers.module.css';

function Docs() {
    const paragraphStyle = [mainContainer, paragraph].join(" ");
    const greenDeskStyle = [green, greenDesktop].join(" ");
    const greenMobStyle = [green, greenMobile].join(" ");

    const title = (
        <>Эколог на предприятии</>
    );

    const body = (
        <>
            <div className={paragraphStyle}>
                <img className={image} src={pic} alt="docs"/>
                <p className={paragraph}>
                    Нормы природоохранного законодательства относятся ко всем без
                    исключения юридическим лицам и индивидуальным предпринимателям.
                    Несоблюдение их может привести к большими штрафами или даже
                    приостановлению деятельности предприятия.
                </p>
                <div className={greenDeskStyle}>
                    Предлагаем услугу<br/>
                    "Эколог на предприятии"
                </div>
            </div>

            <div className={greenMobStyle}>
                Предлагаем услугу<br/>
                "Эколог на предприятии"
            </div>

            <p className={paragraphStyle}>
                Экологический контроль на Вашем предприятии будет осуществлять организация 
                с многолетним опытом и командой квалифицированных специалистов-экологов. 
                В понятие "комплексное экологическое обслуживание" мы включили максимально
                широкий комплекс услуг, который сегментируется в зависимости 
                от категории предприятия.
        </p>
        </>
    );

    return(
        <SpoilerServicesTemplate project='true' orderName='docs' title={title} body={body}/>
    );
}

export default Docs;