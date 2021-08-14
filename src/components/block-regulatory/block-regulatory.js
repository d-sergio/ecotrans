import React from 'react';
import {text, listText, listItem} from './block-regulatory.module.css';
import {mainContainer} from '../../common-styles/containers.module.css';
import {spoilerTitle} from '../../common-styles/title.module.css';
import {paragraph} from '../../common-styles/paragraph.module.css';
import PictureAndText from '../../libs/react-components/picture-and-text';
import greenCircle from  '../../../static/images/page-clients/green-circle.svg';

function BlockRegulatory() {

    const textStyle = [paragraph, text].join(" ");

    const textLaw = <p className={listText}>Федеральный закон "Об охране окружающей среды"</p>;
    const textAct = <p className={listText}>Список опубликованных правовых актов Министерство
    природных ресурсов и экологии Российской Федерации</p>;

    const textWaste = <p className={listText}>Список законов по размещению, хранению и захоронению отходов</p>;
    const textExpertise = <p className={listText}>Список законов по экологической экспертизе</p>;

    return(
        <section className={mainContainer}>
            <div className={spoilerTitle}>Нормативно правовая база</div>

            <p className={textStyle}>
                Настоящие Федеральные законы регулируют отношения в сфере
                взаимодействия общества и природы, возникающие при осуществлении
                хозяйственной и иной деятельности, связанной с воздействием на
                природную среду как важнейшую составляющую окружающей среды,
                являющуюся основой жизни на Земле, в пределах территории
                Российской Федерации.
            </p>

            <div className={listItem}>
                <a href={`http://www.consultant.ru/document/cons_doc_LAW_34823/`} target='_blank'>
                    <PictureAndText.Right image={greenCircle} text={textLaw}/>
                </a>
            </div>

            <div className={listItem}>
                <a href={`http://publication.pravo.gov.ru/signatoryauthority/foiv090`} target='_blank'>
                    <PictureAndText.Right image={greenCircle} text={textAct}/>
                </a>
            </div>

            <div className={listItem}>
                <a href={`http://www.consultant.ru/document/cons_doc_LAW_19109/`} target='_blank'>
                    <PictureAndText.Right image={greenCircle} text={textWaste}/>
                </a>
            </div>

            <div className={listItem}>
                <a href={`http://www.consultant.ru/document/cons_doc_LAW_8515/`} target='_blank'>
                    <PictureAndText.Right image={greenCircle} text={textExpertise}/>
                </a>
            </div>

        </section>
    );
}

export default BlockRegulatory;