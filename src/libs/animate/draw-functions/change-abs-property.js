/** Функция отрисовки, изменяющая значения свойства стиля элемента по модулю
 * 
 * @param {node} element - элемент, прозрачность которого меняем
 * @param {string} property - изменяемое анимацией свойство стиля
 * @param {number} actualValue - рассчитанное значение, полученое из animate()
 * @param {string} units - единицы измерения
 * 
 * Например, в animate можно передать
 * property = 'opacity', startValue = -1, finalValue = 1.
 * 
 * Тогда анимируемый элемент сначала исчезнет (opacity от 1 до 0),
 * а затем снова появится (opacity от 0 до 1)
 */
function changeStylePropertyAbs(element, property, actualValue, units) {
    try{
        element.style[property] = Math.abs(actualValue) + units;
    } catch(e) {
        //console.log('animate.js: анимация прервана')
    }
}

export default changeStylePropertyAbs;