import React from 'react';
import SpoilerProjectsTemplate from '../spoilers-projects-temp';
import {greenDesktop, greenMobile, green, paragraph, imageLeft, button} from '../spoilers-projects-common/spoilers-projects-common.module.css';
import pic from '../../../../static/images/spoilers-projects/education.png';
import {mainContainer} from '../../../common-styles/containers.module.css';
import useMediaQuery from '../../../libs/react/react-hooks/use-media-query';
import config from '../../../config/config-media-queries.json';
import ButtonContact from '../../buttons/button-contact/button-contact-form';

function Education() {
    const mobileView = useMediaQuery(config.app);

    const paragraphStyle = [paragraph, mainContainer].join(" ");
    const greenDeskStyle = [green, greenDesktop].join(" ");
    const greenMobStyle = [green, greenMobile].join(" ");
    const buttonStyle = [button, mainContainer].join(" ");

    const title = <>Центр дополнительного экологического образования</>;

    const body = (
        <div>
            <div className={paragraphStyle}>
                <p>
                    В нашем центре работают опытные педагоги, в совершенстве
                    владеющие тонкостями работы в сфере экологической безопасности.
                    В процессе обучения мы познакомим Вас с последними изменениями
                    нормативно-законодательной базы, требованиями государства к
                    проведению работ и способами решения множества проблем,
                    возникающих на пути руководителей и сотрудников.
                </p>
                
                <div className={greenDeskStyle}>
                    После окончания курсов по экологии, все слушатели получают
                    удостоверение о повышении квалификации,<br/>
                    которое предъявляется при проверках органов госконтроля.
                </div>
            </div>

            <div className={greenMobStyle}>
                После окончания курсов по экологии, все слушатели получают
                удостоверение о повышении квалификации,<br/>
                которое предъявляется при проверках органов госконтроля.
            </div>

            <div className={paragraphStyle}><img className={imageLeft} src={pic} alt="education"/></div>

            <div className={paragraphStyle}>
                <span>
                    <p>
                        Удостоверение подтверждает факт прохождения курсов
                        по программам, требования к содержанию которых утверждены
                        Министерством образования и науки. Обучение по этим трём
                        программам эко безопасности является прямым (обязательным)
                        требованием федерального законодательства России (ст. 73 Ф-З №7
                        «Об охране окружающей среды» и ст. 15 Ф-З № 89 «Об отходах
                        производства и потребления») и как следствие - обязательным
                        условием для назначения ответственного специалиста за обеспечение
                        экологической безопасности или обращение с отходами, независимо
                        от вида деятельности, прав собственности и подчинённости организации.
                    </p>
                    <p>
                        Цель повышения квалификации — научиться говорить языком
                        законодательства с контрагентами и надзорными органами. 
                    </p>
                    <p>
                        Приглашаем для записи!
                    </p>
                </span>
            </div>
            <div style={{clear: 'both'}}></div>

            <div className={buttonStyle}>
                <ButtonContact mobile={mobileView} projectName='education'/>
            </div>
        </div>
    );

    return <SpoilerProjectsTemplate title={title} body={body}/>;
}

export default Education;