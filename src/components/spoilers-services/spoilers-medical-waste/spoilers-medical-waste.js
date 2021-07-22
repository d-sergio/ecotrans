import React from "react";
import SpoilerServicesTemplate from "../spoilers-services-temp";
import {green, paragraph, image} from '../spoilers-services-common/spoilers-services-common.module.css';
import pic from '../../../../static/images/services-spoilers/medical-waste.png';

function MedicalWaste() {
    const title = (
        <>Сбор транспортирование и обезвреживание медицинских отходов</>
    );

    const body = (
        <>
            <img className={image} src={pic} alt="medical-waste"/>

            <p className={paragraph}>
                Если необеззараженные медицинские отходы попадают на свалку,
                переносчиками опасных инфекций автоматически становятся птицы
                и крысы: остановить этот процесс невозможно. Именно 
                поэтому мы должны следить за тем, чтобы сбор транспортирование
                и обезвреживание медицинских отходов происходили четко по всем
                необходимым правилам. Ведь от этого зависит здоровье нас и наших детей. 
            </p>

            <div className={green}>
                ООО “Экотранс” все манипуляции осуществляет в соответствии<br/>
                с требованиями правил работы с радиоактивными веществами!
            </div>
            <p className={paragraph}>
                А также другими источниками ионизирующих излучений, нормами
                радиационной безопасности, и других действующих нормативных
                документов, которые регламентируют обращение с радиоактивными веществами.
            </p>
            <p className={paragraph}>
                Сбор, хранение цитостатиков, относящихся к отходам 1-2 классов
                токсичности, осуществляют в соответствии с классификатором токсичных
                промышленных отходов и другими действующими нормативными документами.
            </p>
        </>
    );

    return(
        <SpoilerServicesTemplate title={title} body={body}/>
    );
}

export default MedicalWaste;