/** Простая функция анимации
 * 
 * Принимаемые параметры:
 * @param {function} timing - функция расчёта времени
 * @param {number} duration - длительность анимации
 * @param {function} draw - функция отрисовки
 * @param {node} element - анимируемый элемент
 * @param {string} property - изменяемое анимацией свойство стиля
 * @param {number} startValue - начальное значение, изменяемого свойства стиля
 * @param {number} finalValue - конечно значение, изменяемого свойства стиля
 * @param {string} units - единицы измерения
 */

 export function animate(timing, duration, draw, element, property, startValue, finalValue, units = ''){
    let start = performance.now();
    let actualValue = startValue;

    requestAnimationFrame(function animate(time){
        let timeFraction = (time - start) / duration;

        if (timeFraction > 1) timeFraction = 1;

        let progress = timing(timeFraction);

        actualValue = startValue + Math.abs(finalValue - startValue) * progress;

        draw(element, property, actualValue, units);

        if (timeFraction < 1) {
            requestAnimationFrame(animate);
        }
    });
}