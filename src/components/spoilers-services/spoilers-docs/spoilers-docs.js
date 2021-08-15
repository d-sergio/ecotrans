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
        <>Экологическая документация</>
    );

    const body = (
        <>
            <div className={paragraphStyle}>
                <img className={image} src={pic} alt="docs"/>
                <p className={paragraph}>
                    Мы занимаемся разработкой и согласованием нормативной природоохранной
                    документации для организаций, учреждений и предприятий по всей России.
                    Мы знаем, что экология заслуживает большего внимания, поэтому выполняем
                    свою работу качественно и в срок.
                </p>
                <div className={greenDeskStyle}>
                    Мы поможем Вам разработать экологические проекты любого уровня сложности<br/>
                    и подготовим отчетную документацию в установленные законом сроки.
                </div>
            </div>

            <div className={greenMobStyle}>
                Мы поможем Вам разработать экологические проекты любого уровня сложности<br/>
                и подготовим отчетную документацию в установленные законом сроки.
            </div>

            <p className={paragraphStyle}>
                Оказываем любую помощь в области разработки экологической документации,
                ее согласования и утверждения.
        </p>
        </>
    );

    return(
        <SpoilerServicesTemplate serviceName='docs' title={title} body={body}/>
    );
}

export default Docs;