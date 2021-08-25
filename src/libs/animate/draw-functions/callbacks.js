/** Функция отрисовки, изменяющая значения js-свойства элемента по модулю
 * 
 * @param {node} element - в качестве element здесь выступает колбэк, который
 * получит текущее значение
 * @param {string} property - здесь не используется
 * @param {number} actualValue - рассчитанное значение, полученое из animate()
 * @param {string} units - единицы измерения
 */
 function callbacks(element, property, actualValue, units) {
    try{
        element(actualValue + units);
    } catch(e) {
        //console.log('animate.js: анимация прервана')
    }
}

export default callbacks;