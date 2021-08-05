/** Функция отрисовки, изменяющая значения js-свойства элемента по модулю
 * 
 * @param {node} element - элемент, свойство которого меняем
 * @param {string} property - изменяемое анимацией свойство
 * @param {number} actualValue - рассчитанное значение, полученое из animate()
 * @param {string} units - единицы измерения
 */
 function changeJsProperty(element, property, actualValue, units) {
    try{
        element[property] = actualValue + units;
    } catch(e) {
        //console.log('animate.js: анимация прервана')
    }
}

export default changeJsProperty;