import React from 'react';
import SpoilerProjectsTemplate from '../spoilers-projects-temp';
import {paragraph, image, button} from '../spoilers-projects-common/spoilers-projects-common.module.css';
import {residentsItems, residentsTitle, residentsImage, residentText} from './spoiler-technopark.module.css';
import pic from '../../../../static/images/spoilers-projects/technopark.jpg';
import supportPic from '../../../../static/images/spoilers-projects/support.png';
import supplyPic from '../../../../static/images/spoilers-projects/supply.png';
import rentPic from '../../../../static/images/spoilers-projects/rent.png';
import PictureAndText from '../../../libs/react-components/picture-and-text';
import {mainContainer} from '../../../common-styles/containers.module.css';
import useMediaQuery from '../../../libs/react/react-hooks/use-media-query';
import config from '../../../config/config-media-queries.json';
import ButtonContact from '../../buttons/button-contact/button-contact-form';

function Technopark() {
    const mobileView = useMediaQuery(config.app);

    const resTitleStyle = [residentsTitle, mainContainer].join(" ");
    const resItemsStyle = [residentsItems, mainContainer].join(" ");
    const buttonStyle = [button, mainContainer].join(" ");

    const title = <>Экотехнопарк  Экотранс</>;

    const body = (
        <div>
            <div className={paragraph}>
                <div className={mainContainer}>
                    <span>
                        <p>
                            Экотехнопарк Экотранс  объединяет комплексные объекты
                            по обращению с отходами. Мы находимся в центральной части
                            России, на территории Курской области, что является наиболее
                            выгодным местоположением Экотехнопарка для всех наших резидентов! 
                        </p>
                        <p>
                            Экотехнопарк Экотранс приглашает к сотрудничеству партнеров для
                            совместного развития перерабатывающих производств. 
                        </p>
                        <p>
                            Резидентами Экотехнопарка могут стать юридические лица и индивидуальные
                            предприниматели, деятельность которых может быть или уже связана с
                            переработкой и утилизацией промышленных отходов.
                        </p>
                    </span>
                </div>
                <p className={mainContainer}>
                    <span style={{fontFamily: 'MontserratBold'}}>Наши контакты</span><br/>
                    Россия, Курская область, Курчатовский район, рабочий посёлок имени Карла Либкнехта
                </p>

                <img style={{
                    display: 'block',
                    marginRight: 'auto',
                    marginLeft: 'auto'
                    }} className={image} src={pic} alt="technopark"
                />

            </div>

            <p className={resTitleStyle}>
                Резидентам экотехнопарка Экотранс мы предоставляем:
            </p>
            

            <div className={resItemsStyle}>
                <PictureAndText.Bottom
                    className={residentsImage}
                    image={supportPic}
                    text={<p className={residentText}>Экологическая<br/>и правовая поддержка</p>}
                />

                <PictureAndText.Bottom
                    className={residentsImage}
                    image={supplyPic}
                    text={<p className={residentText}>Снабжение вторичным<br/>сырьем и промышленными<br/>отходами</p>}
                />

                <PictureAndText.Bottom
                    className={residentsImage}
                    image={rentPic}
                    text={<p className={residentText}>Аренда<br/>площадок</p>}
                 />
            </div>

            <div className={paragraph}>

                <p className={mainContainer} style={{fontFamily: 'MontserratBold'}}>Как стать резидентом экотехнопарка</p>

                <p className={mainContainer}>
                    Напишите нам письмо, в котором укажите общую информацию о компании
                    и необходимые координаты для связи. После этого сотрудники нашего
                    экотехнопарка будут анализировать вашу  заявку на предмет соответствия
                    базовым критериям. 
                </p>
            </div>

            <div className={buttonStyle}>
                <ButtonContact mobile={mobileView} orderName='technopark'/>
            </div>

        </div>
    );

    return <SpoilerProjectsTemplate title={title} body={body}/>;
}

export default Technopark;