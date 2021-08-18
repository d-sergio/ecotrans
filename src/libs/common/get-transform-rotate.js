/**Получить значение transform: rotate(deg) элемента
 * 
 * Значения всегда приводятся в пределы 0 - 360 градусов!
 */
function getTransformRotate(element) {
    if (typeof window === undefined || !element) return;

    const transform = window.getComputedStyle(element, null).getPropertyValue('transform');

    if (!transform.match(/\d/g)) return 0;   //transfrom не задан

    const values = transform.split('(')[1].split(')')[0].split(',');

    const cos = values[0];
    const sin = values[1];

    let radians = Math.atan2(sin, cos);

    if ( radians < 0 ) {
        radians += (2 * Math.PI);
    }

    const angle = Math.round( radians * (180 / Math.PI));

    return angle;
}

export default getTransformRotate;