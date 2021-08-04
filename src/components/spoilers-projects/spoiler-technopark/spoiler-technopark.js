import React from 'react';
import SpoilerProjectsTemplate from '../spoilers-projects-temp';
import {paragraph, image} from '../spoilers-projects-common/spoilers-projects-common.module.css';
import {residentsItems, residentsTitle, residentsImage} from './spoiler-technopark.module.css';
import pic from '../../../../static/images/spoilers-projects/technopark.jpg';
import supportPic from '../../../../static/images/spoilers-projects/support.png';
import supplyPic from '../../../../static/images/spoilers-projects/supply.png';
import rentPic from '../../../../static/images/spoilers-projects/rent.png';
import PictureText from '../../../libs/react-components/picture-text';
import {mainContainer} from '../../../common-styles/containers.module.css';

function Technopark() {

    const resTitleStyle = [residentsTitle, mainContainer].join(" ");
    const resItemsStyle = [residentsItems, mainContainer].join(" ");

    const title = <div>Экотехнопарк  Экотранс</div>;

    const body = (
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
                        Резидентами экотехнопарков могут стать юридические лица и индивидуальные
                        предприниматели, деятельность которых может быть или уже связана с
                        переработкой и утилизацией промышленных и бытовых отходов.
                    </p>
                </span>
            </div>
            <p className={mainContainer}>
                <span style={{fontFamily: 'MontserratBold'}}>Наши контакты</span><br/>
                Россия, Курская область, г. Курчатов
            </p>

            <img style={{
                display: 'block',
                marginRight: 'auto',
                marginLeft: 'auto'
                }} className={image} src={pic} alt="technopark"/>

            <p className={resTitleStyle}>
                Резидентам экотехнопарка Экотранс мы предоставляем:
            </p>

            <div className={resItemsStyle}>
                <PictureText.Bottom
                    className={residentsImage}
                    image={supportPic}
                    text={<>Экологическая<br/>и правовая поддержка</>}
                />

                <PictureText.Bottom
                    className={residentsImage}
                    image={supplyPic}
                    text={<>Снабжение вторичным<br/>сырьем и промышленными<br/>отходами</>}
                />

                <PictureText.Bottom
                    className={residentsImage}
                    image={rentPic}
                    text={<>Аренда<br/>площадок</>}
                 />
            </div>

            <p className={mainContainer} style={{fontFamily: 'MontserratBold'}}>Как стать резидентом экотехнопарка</p>

            <p className={mainContainer}>
                Напишите нам письмо, в котором укажите общую информацию о компании
                и необходимые координаты для связи. После этого сотрудники нашего
                экотехнопарка будут анализировать вашу  заявкуна предмет соответствия
                базовым критериям. 
            </p>
        </div>
    );

    return <SpoilerProjectsTemplate title={title} body={body}/>;
}

export default Technopark;