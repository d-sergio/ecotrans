/**Функции расчёта времени для Spoiler*/

function straight(timeFraction) {
    return 1 - Math.pow(1 - timeFraction, 1.5);
}

function inverted(timeFraction) {
    return -(1 - Math.pow(1 - timeFraction, 1.5));
}

const spoilerTimeFunctions = {
    straight,
    inverted
};

export default spoilerTimeFunctions;