/**Линейная функция расчёта времени*/

function straight(timeFraction) {
    return timeFraction;
}

function inverted(timeFraction) {
    return -timeFraction;
}

const linear = {
    straight,
    inverted
};

export default linear;