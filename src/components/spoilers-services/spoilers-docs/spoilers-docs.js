import React from "react";
import SpoilerServicesTemplate from "../spoilers-services-temp";
import {green, paragraph, image} from '../spoilers-services-common/spoilers-services-common.module.css';
import pic from '../../../../static/images/services-spoilers/docs.png';

function Docs() {
    const title = (
        <>Экологическая документация</>
    );

    const body = (
        <>
            <img className={image} src={pic} alt="docs"/>
            <p className={paragraph}>
                Мы занимаемся разработкой и согласованием нормативной природоохранной
                документации для организаций, учреждений и предприятий по всей России.
                Мы знаем, что экология заслуживает большего внимания, поэтому выполняем
                свою работу качественно и в срок.
            </p>
            <div className={green}>
                Мы поможем Вам разработать экологические проекты любого уровня сложности<br/>
                и подготовим отчетную документацию в установленные законом сроки.
            </div>
            <p className={paragraph}>
                Оказываем любую помощь в области разработки экологической документации,
                ее согласования и утверждения.
        </p>
        </>
    );

    return(
        <SpoilerServicesTemplate title={title} body={body}/>
    );
}

export default Docs;