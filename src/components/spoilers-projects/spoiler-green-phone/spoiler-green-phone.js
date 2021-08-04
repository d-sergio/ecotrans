import React from 'react';
import SpoilerProjectsTemplate from '../spoilers-projects-temp';
import {green, greenDesktop, greenMobile, paragraph, imageRight} from '../spoilers-projects-common/spoilers-projects-common.module.css';
import pic from '../../../../static/images/spoilers-projects/green-phone.png';
import {mainContainer} from '../../../common-styles/containers.module.css';

function GreenPhone() {
    const paragraphStyle = [mainContainer, paragraph].join(" ");
    const greenDeskStyle = [green, greenDesktop].join(" ");
    const greenMobStyle = [green, greenMobile].join(" ");

    const title = <>Зеленый телефон</>;

    const body = (
        <div>
            <div className={paragraphStyle}>
                <span>
                    <p>
                        «Зелёный телефон» — телефонная линия для тех, кто хочет
                        решить проблемные вопросы в сфере экологии.  Возникли
                        проблемы связанные с экологией или вопросы, на которые
                        никто не может ответить? Звоните нам! 
                    </p>
                    <p>
                        «Зелёный телефон» — замечательный инструмент, который
                        поможет решить именно вашу проблему.  Позвонив нам сейчас
                        вы узнаете о действиях, необходимых для решения именно
                        вашей проблемы
                    </p>
                </span>
                <img className={imageRight} src={pic} alt="green-phone"/>
                <p>
                    Вам кажется, что деревья вырубают незаконно?
                </p>
                <p>
                    Вы обнаружили несанкционированную свалку?
                </p>
                <p>
                    Зелёные зоны заставлены автомобилями?
                </p>
                <p>
                    Вы чувствуете неприятный запах в своём районе?
                </p>
                <p>
                    Возле вас начинается новая стройка, и вы не знаете,<br/>
                    законна ли она, и хотели бы получить больше информации?
                </p>
                <p>
                    Мы поможем с этими и многими другими вопросами!
                </p>

                <div className={greenDeskStyle}>
                    Наш телефон работает каждые понедельник, среду и пятницу<br/>
                    с 10.00 до 18.00 по номеру 89606948939
                </div>
            </div>

            <div className={greenMobStyle}>
                Наш телефон работает каждые понедельник, среду и пятницу<br/>
                с 10.00 до 18.00 по номеру 89606948939
            </div>

            <div className={paragraphStyle}>
                <p>
                    «Зелёный телефон» фиксирует каждое поступившее обращение.
                    Наши операторы собирают контактную информацию, которая
                    необходима для обратной связи и консультируют, какие
                    действия вам нужно предпринять по решению конкретной
                    проблемы. На основе каждой из проблем составляется алгоритм
                    её решения, который впоследствии может использоваться в
                    похожих ситуациях.
                </p>
                <p>
                    Если кто-то причиняет вред окружающей среде, не оставайтесь
                    равнодушными! Наши специалисты всегда поддержат вас!
                </p>
            </div>

            <div style={{clear: 'both'}}></div>
        </div>
    );

    return(
        <>
            <SpoilerProjectsTemplate title={title} body={body}/>
        </>
    );
}

export default GreenPhone;