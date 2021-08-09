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
                <PictureAndText.Right image={greenCircle} text={textLaw}/>
            </div>

            <div className={listItem}>
                <PictureAndText.Right image={greenCircle} text={textAct}/>
            </div>

            <div className={listItem}>
                <PictureAndText.Right image={greenCircle} text={textWaste}/>
            </div>

            <div className={listItem}>
                <PictureAndText.Right image={greenCircle} text={textExpertise}/>
            </div>

        </section>
    );
}

export default BlockRegulatory;