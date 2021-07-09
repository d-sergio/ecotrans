/**Вернуть число видимых слайдов
 * Используется в:
 * set-new-position.js
 * update-slide-width.js
 * 
 * в альтернативных:
 * create-visible-slides.js
 * set-new-position-alternative.js
*/
function getVisible({visible, viewport, carousel}) {
    if (visible === 0) { //режим автоматического расчёта числа видимых слайдов

        return getAutoVisible(viewport, carousel);

    } else if (typeof(visible) === 'object') {

        return getVisibleFromObject(visible);
        
    }

    return Number(visible);
}

export default getVisible;

function getAutoVisible(viewport, carousel) {
    try{
        if (viewport !== null && carousel !== null){    

            const viewportWidth = viewport.offsetWidth;
            
            //Берём ширину вложенного содержимого, а не обёртки frame
            const slideWidth = carousel.children[0].firstChild.offsetWidth;
            
            return Math.floor(viewportWidth/slideWidth);
        } else {
            console.log(`Slider. getAutoVisible() остановлен. refs: viewport is ${viewport}, carousel is ${carousel}`);
        }

    } catch(e) {
        console.log('Slider Ошибка getAutoVisible(): ' + e.name + ":" + e.message + "\n" + e.stack);
    }
}

function getVisibleFromObject(visible) {
    const mutations = Object.entries(visible);
    const screen = window.innerWidth;

    for ( let i = mutations.length - 1; i >= 0; i-- ) {
        let [screenSize, visible] = mutations[i];

        if ( screen >= screenSize ) {
            return visible;
        }
    }
}
