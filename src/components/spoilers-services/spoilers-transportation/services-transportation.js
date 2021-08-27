import React from "react";
import SpoilerServicesTemplate from "../spoilers-services-temp";
import {green, greenDesktop, greenMobile, paragraph, image} from '../spoilers-services-common/spoilers-services-common.module.css';
import pic from '../../../../static/images/services-spoilers/transportation.png';
import {mainContainer} from '../../../common-styles/containers.module.css';

function Transportation() {
    const paragraphStyle = [mainContainer, paragraph].join(" ");
    const greenDeskStyle = [green, greenDesktop].join(" ");
    const greenMobStyle = [green, greenMobile].join(" ");

    const title = <>Транспортирование отходов 1-4 классов опасности</>;

    const body = (
        <>
            <div className={paragraphStyle}>
                <img className={image} src={pic} alt="transportation"/>

                <p className={paragraph}>
                    Транспортировка опасных отходов - это процесс перемещения
                    отходов от образователя к месту их утилизации, размещения
                    или обезвреживания, используя автомобильный или ж/д транспорт.
                    В штате ООО “ЭКОТРАНС” водители с многолетним опытом работы
                    транспортирования опасных грузов и опасных отходов.
                </p>

                <div className={greenDeskStyle}>
                    Все водители и грузчики ООО “Экотранс” прошли обучение<br/>
                    в сфере обращения с отходами!
                </div>
            </div>

            <div className={greenMobStyle}>
                Все водители и грузчики ООО “Экотранс” прошли обучение<br/>
                в сфере обращения с отходами!
            </div>

            <p className={paragraphStyle}>
                Отсутствие обучения является грубым нарушением лицензионных
                требований. Мы же в свою очередь предоставляем обучение
                для лиц, которые будут работать с теми или иными отходами.
                Стоит отметить, что  мы всегда требуем с контрагента копию
                паспорта отходов.
            </p>
            <p className={paragraphStyle}>
                Мы бережно относимся к нашему транспорту и на постоянной
                основе проводим профилактические работы. Все машины и водители
                имеют ДОПОГ, что позволяет нам перевозить грузы практически
                любого класса опасности и любых габаритов.
            </p>
        </>
    );

    return(
        <SpoilerServicesTemplate orderName='transportation' title={title} body={body}/>
    );
}

export default Transportation;