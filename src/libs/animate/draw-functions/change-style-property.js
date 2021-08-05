/** Функция отрисовки, изменяющая значения свойства стиля элемента
 * 
 * @param {node} element - элемент, прозрачность которого меняем
 * @param {string} property - изменяемое анимацией свойство стиля
 * @param {number} actualValue - рассчитанное значение, полученое из animate()
 * @param {string} units - единицы измерения
 */
function changeStyleProperty(element, property, actualValue, units) {
    try{
        element.style[property] = actualValue + units;
    } catch(e) {
        //console.log('animate.js: анимация прервана')
    }
}

export default changeStyleProperty;