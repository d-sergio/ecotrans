import React from 'react';
import CardsStatisticTemp from "./cards-statistics-template";

function DangerClass(props) {
    const number = '155';
    const text = <div>Контрагентов<br/>БВ класса опасности</div>;

    return(
        <CardsStatisticTemp mobile={props.mobile} active={props.active} number={number} text={text}/>
    );
}

function TenYears(props) {
    const number = '10';
    const text = <div>Лет успешной<br/>работы</div>;

    return(
        <CardsStatisticTemp mobile={props.mobile} active={props.active} number={number} text={text}/>
    );
}

function Tko(props) {
    const number = '2396';
    const text = <div>Контрагентов<br/>ТКО</div>;

    return(
        <CardsStatisticTemp mobile={props.mobile} active={props.active} number={number} text={text}/>
    );
}

function WasteClass(props) {
    const number = '134';
    const text = <div>Контрагентов<br/>3 и 4 классов отходов</div>;

    return(
        <CardsStatisticTemp mobile={props.mobile} active={props.active} number={number} text={text}/>
    );
}

function MedicalWaste(props) {
    const number = '281';
    const text = <div>Контрагентов<br/>медотходов</div>;

    return(
        <CardsStatisticTemp mobile={props.mobile} active={props.active} number={number} text={text}/>
    );
}

export default {DangerClass, TenYears, Tko, WasteClass, MedicalWaste};