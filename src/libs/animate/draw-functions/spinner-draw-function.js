/**Функция отрисовки, изменяющая transform: rotate(x).*/
function changeTransformRotate(element, property, actualValue, units) {
    try{
        //const angle = correctAngle(actualValue);
        element.style.transform = `rotate(${actualValue}deg)`;

    } catch(e) {
        //console.log('animate.js: анимация прервана')
    }
}
/*
function correctAngle(angle) {
    if (angle > 359) {
        //Сколько раз в этом угде помещается 360 градусов
        const ratio = Math.floor(angle / 360);

        const corrected = angle - 360 * (ratio);

        return corrected;

    } else if (angle < -359) {
            //Сколько раз в этом угде помещается 360 градусов
            const ratio = Math.abs(Math.floor(angle / 360));

            const corrected = angle + 360 * (ratio);
    
            return corrected;
    } else {
        return angle;
    }
}*/

export default changeTransformRotate;