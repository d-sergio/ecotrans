import React from "react";
import ServicesSpoilerTemplate from "../services-spoilers-temp";
import pic from '../../../../static/images/services-spoilers/docs.png';

function Docs() {
    const title = (
        <>Экологическая документация</>
    );

    const image = <img src={pic} alt="docs"/>;

    const green = (
        <>
            Мы поможем Вам разработать экологические проекты любого уровня сложности<br/>
            и подготовим отчетную документацию в установленные законом сроки.
        </>
    );

    const paragraphs = [
        <p>
            Мы занимаемся разработкой и согласованием нормативной природоохранной
            документации для организаций, учреждений и предприятий по всей России.
            Мы знаем, что экология заслуживает большего внимания, поэтому выполняем
            свою работу качественно и в срок.
        </p>,
        <p>
            Оказываем любую помощь в области разработки экологической документации,
            ее согласования и утверждения.
        </p>
    ];

    return(
        <ServicesSpoilerTemplate green={green} title={title} paragraphs={paragraphs} image={image}/>
    );
}

export default Docs;