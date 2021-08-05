import React from 'react'
import {container, text, docTextStyle, docCardStyle, files} from './block-docs.module.css';
import {mainContainer} from '../../common-styles/containers.module.css';
import {spoilerTitle} from '../../common-styles/title.module.css';
import {paragraph} from '../../common-styles/paragraph.module.css';
import PictureText from '../../libs/react-components/picture-and-text';
import docPic from '../../../static/images/page-clients/file.svg';

/**Наша документация (Страница Клиентам) */
function BlockDocs() {

    const containerStyle = [container, mainContainer].join(" ");
    const textStyle = [paragraph, text].join(" ");

    const docLicense = <p className={docTextStyle}>Лицензия</p>;
    const docZone = <p className={docTextStyle}>Санитарно - защитная зона</p>;
    const docLimits = <p className={docTextStyle}>Предельно - допустимые выбросы</p>;
    const docSert1 = <p className={docTextStyle}>Сертификат ИСО №1</p>;
    const docSert2 = <p className={docTextStyle}>Сертификат ИСО №2</p>;
    const docSert3 = <p className={docTextStyle}>Сертификат ИСО №3</p>;
    const docSert4 = <p className={docTextStyle}>Сертификат ИСО №4</p>;

    return(
        <section className={containerStyle}>
            <div className={spoilerTitle}>Наша документация</div>

            <p className={textStyle}>
                Наши лицензии и сертификаты - обязательная часть требований
                для вашей работы с утилизирующей и транспортирующей компанией. 
                Если компания не имеет представленных документов, то по закону
                с ней нельзя работать. Мы предоставляем полный спектр необходимой
                экологической документации.
            </p>

            <div className={files}>
                <div className={docCardStyle}>
                    <PictureText.Bottom image={docPic} text={docLicense}/>
                </div>

                <div className={docCardStyle}>
                    <PictureText.Bottom image={docPic} text={docZone}/>
                </div>

                <div className={docCardStyle}>
                    <PictureText.Bottom image={docPic} text={docLimits}/>
                </div>

                <div className={docCardStyle}>
                    <PictureText.Bottom image={docPic} text={docSert1}/>
                </div>

                <div className={docCardStyle}>
                    <PictureText.Bottom image={docPic} text={docSert2}/>
                </div>

                <div className={docCardStyle}>
                    <PictureText.Bottom image={docPic} text={docSert3}/>
                </div>
            </div>

            <p className={textStyle}>
                Природоохранное законодательство РФ предусматривает необходимость
                лицензирования любой деятельности, связанной с обращением опасных
                отходов. Регламентируется это требование в первую очередь ФЗ-99
                от 04.05.2011г. «О лицензируемых видах деятельности». Принятие
                решений о выдаче бессрочных лицензий на обращение с опасными
                отходами и контроль деятельности предприятий, получивших ранее
                лицензию, возлагается на органы Росприроднадзора РФ.
            </p>
        </section>
    );
}

export default BlockDocs;