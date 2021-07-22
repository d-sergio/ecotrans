import React from "react";
import SpoilerServicesTemplate from "../spoilers-services-temp";
import {green, paragraph, image} from '../spoilers-services-common/spoilers-services-common.module.css';
import pic from '../../../../static/images/services-spoilers/transportation.png';

function Transportation() {
    const title = (
        <>Транспортирование отходов 1-4 классов опасности</>
    );

    const body = (
        <>
            <img className={image} src={pic} alt="transportation"/>

            <p className={paragraph}>
                Транспортировка опасных отходов - это процесс перемещения отходов от образователя к месту
                их утилизации, размещения или обезвреживания, используя автомобильный или ж/д транспорт.
                В штате ООО “ЭКОТРАНС” водители с многолетним опытом работы транспортирования опасных грузов и опасных отходов.
            </p>

            <div className={green}>
                Все водители и грузчики ООО “Экотранс” прошли обучение<br/>
                в сфере обращения с отходами!
            </div>

            <p className={paragraph}>
                Отсутствие обучения является грубым нарушением лицензионных требований, мы всегда требуем
                с контрагента паспорт отхода. Мы же в свою очередь предоставляем обучение на лиц, которые
                будут работать с данными отходами.
            </p>
            <p className={paragraph}>
                Мы бережно относимся к нашему транспорту и на постоянной основе проводим профилактические
                работы. Все машины и водители имеют ДОПОГ, что позволяет нам перевозить грузы практически
                любого класса опасн ости и любых габаритов. 
            </p>
        </>
    );

    return(
        <SpoilerServicesTemplate title={title} body={body}/>
    );
}

export default Transportation;