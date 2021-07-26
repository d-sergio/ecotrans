/**Функция отрисовки, изменяющая transform: scale(x, x). При этом два аргумента,
 * получаемые scale равны друг другу, для пропорционального масштабирования */
function changeTransformScale(element, property, actualValue, units) {
    try{
        element.style.transform = `scale(${actualValue}, ${actualValue})`;
    } catch(e) {
        //console.log('animate.js: анимация прервана')
    }
}

export default changeTransformScale;