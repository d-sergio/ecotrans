/**Функции расчёта времени для Slider*/

function straight(timeFraction) {
    return 1 - Math.pow(1 - timeFraction, 4);
}

function inverted(timeFraction) {
    return -(1 - Math.pow(1 - timeFraction, 4));
}

const sliderTimeFunction = {
    straight,
    inverted
};

export default sliderTimeFunction;