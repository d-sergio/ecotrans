import getVisible from "./get-visible";

/**Задать ширину слайда*/
function updateSlideWidth(viewport, carousel, visible) {
    try{
        //Рефы могли обнулиться, если компонент был перерисован
        if (viewport !== null && carousel !== null) {
            const numberOfVisible = getVisible(visible, viewport, carousel);
            const viewportWidth = viewport.offsetWidth;

            const slideWidth = viewportWidth/numberOfVisible;

            for (let i of carousel.children){
                i.style.width = slideWidth + 'px';
            }
        }else {
            console.log(`Slider. updateSlideWidth() остановлен. Refs: viewport is ${viewport}, carousel is ${carousel}.`);
        }
    } catch(e) {
        console.log('Slider Ошибка updateSlideWidth(): ' + e.name + ":" + e.message + "\n" + e.stack);
    }
}

export default updateSlideWidth;