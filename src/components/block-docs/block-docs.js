import React from 'react'
import {container, text, docTextStyle, docCardStyle, files} from './block-docs.module.css';
import {mainContainer} from '../../common-styles/containers.module.css';
import {spoilerTitle} from '../../common-styles/title.module.css';
import {paragraph} from '../../common-styles/paragraph.module.css';
import PictureAndText from '../../libs/react-components/picture-and-text';
import docPic from '../../../static/images/page-clients/file.svg';

/*              
    <a
        target='_blank'
        href='/docs/сертификат эксперта с 05.07.21 по 04.07.24.pdf'
        className={docCardStyle}>
        <PictureAndText.Bottom image={docPic} text={expert}/>
    </a>
*/

/**Наша документация (Страница Клиентам) */
function BlockDocs() {

    const containerStyle = [container, mainContainer].join(" ");
    const textStyle = [paragraph, text].join(" ");

    const conclusion291118_2 =
        <div className={docTextStyle}>
            Санитарно-эпидем.<br/>заключение от 29.11.18-2
        </div>;

    const sert50001 = 
        <div className={docTextStyle}>
            Сертификат исо 50001 (05.07.21)<br/>с приложением-2
        </div>

    const license = 
    <div className={docTextStyle}>
        Лицензия
    </div>

    const resolution050721 = 
        <div className={docTextStyle}>
            Разрешение<br/>к сертификату (05.07.21)
        </div>

    const resolution170621 = 
        <div className={docTextStyle}>
            Разрешение<br/>к сертификату (17.06.21)
        </div>

    const conclusion13112018 = 
        <div className={docTextStyle}>
            Cанитарно-эпидем.<br/>заключение от 13.11.2018
        </div>

    const sert9001 = 
        <div className={docTextStyle}>
            Сертифиакат исо9001<br/>исо14001 исо45001 (17.06.21).pdf
        </div>

    const expert = 
        <div className={docTextStyle}>
            Сертификат эксперта<br/>с 05.07.21 по 04.07.24
        </div>

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
                <a
                    target='_blank'
                    href='/docs/Лицензия на сбор отходов III IV классов опасности, транспортирование I - VI классов опасности обезвреживание отходов III IV классов опасности.pdf'
                    className={docCardStyle}>
                    <PictureAndText.Bottom image={docPic} text={license}/>
                </a>

                <a
                    target='_blank'
                    href='/docs/Сертификат исо 50001 (05.07.21) с приложением-2 (стр 1).pdf'
                    className={docCardStyle}>
                    <PictureAndText.Bottom image={docPic} text={sert50001}/>
                </a>

                <a
                    target='_blank'
                    href='/docs/санитарно-эпидем. заключение от 29.11.18-2 (стр1).pdf'
                    className={docCardStyle}>
                    <PictureAndText.Bottom image={docPic} text={conclusion291118_2}/>
                </a>

                <a
                    target='_blank'
                    href='/docs/разрешение к сертификату (05.07.21).pdf'
                    className={docCardStyle}>
                    <PictureAndText.Bottom image={docPic} text={resolution050721}/>
                </a>

                <a
                    target='_blank'
                    href='/docs/разрешение к сертификату (17.06.21).pdf'
                    className={docCardStyle}>
                    <PictureAndText.Bottom image={docPic} text={resolution170621}/>
                </a>

                <a
                    target='_blank'
                    href='/docs/санитарно-эпидем. заключение от 13.11.2018.pdf'
                    className={docCardStyle}>
                    <PictureAndText.Bottom image={docPic} text={conclusion13112018}/>
                </a>

                <a
                    target='_blank'
                    href='/docs/сертифиакат исо9001исо14001 исо45001 (17.06.21).pdf'
                    className={docCardStyle}>
                    <PictureAndText.Bottom image={docPic} text={sert9001}/>
                </a>

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