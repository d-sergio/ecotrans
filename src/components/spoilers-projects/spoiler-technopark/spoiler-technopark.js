import React from 'react';
import SpoilerProjectsTemplate from '../spoilers-projects-temp';
import {paragraph, image} from '../spoilers-projects-common/spoilers-projects-common.module.css';
import {residentsDesktop, residentsMobile} from './spoiler-technopark.module.css';
import pic from '../../../../static/images/spoilers-projects/technopark.jpg';
import supportPic from '../../../../static/images/spoilers-projects/support.png';
import supplyPic from '../../../../static/images/spoilers-projects/supply.png';
import rentPic from '../../../../static/images/spoilers-projects/rent.png';

function Technopark() {
    const title = <>Экотехнопарк  Экотранс</>;

    const body = (
        <div className={paragraph}>
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
            <p>
                <span style={{fontFamily: 'MontserratBold'}}>Наши контакты</span><br/>
                Россия, Курская область, г. Курчатов
            </p>

            <img style={{
                display: 'block',
                marginRight: 'auto',
                marginLeft: 'auto'
                }} className={image} src={pic} alt="technopark"/>

            <p style={{fontFamily: 'MontserratBold', textAlign: 'center'}}>
                Резидентам экотехнопарка Экотранс мы предоставляем:
            </p>

            <div className={residentsDesktop}>
                    <div>
                        <img className={image} src={supportPic} alt="support"/>
                        <p>Экологическая<br/>и правовая поддержка</p>
                    </div>
                    
                    <div>
                        <img className={image} src={supplyPic} alt="supply"/>
                        <p>Снабжение вторичным<br/>сырьем и промышленными<br/>отходами</p>
                    </div>

                    <div>
                        <img className={image} src={rentPic} alt="rent"/>
                        <p>Аренда<br/>площадок</p>
                    </div>                    
            </div>

            <div className={residentsMobile}>
                    <div>
                        <img src={supportPic} alt="support"/>
                        <div>Экологическая и правовая поддержка</div>
                    </div>
                    <div>
                        <img src={supplyPic} alt="supply"/>
                        <div>Снабжение вторичным сырьем и промышленными отходами</div>
                    </div>
                    <div>
                        <img src={rentPic} alt="rent"/>
                        <div >Аренда площадок</div>
                    </div>
            </div>

            <p style={{fontFamily: 'MontserratBold'}}>Как стать резидентом экотехнопарка</p>

            <p>
                Напишите нам письмо, в котором укажите общую информацию о компании
                и необходимые координаты для связи. После этого сотрудники нашего
                экотехнопарка будут анализировать вашу  заявкуна предмет соответствия
                базовым критериям. 
            </p>
        </div>
    );

    return(
        <>
            <SpoilerProjectsTemplate title={title} body={body}/>
        </>
    );
}

export default Technopark;