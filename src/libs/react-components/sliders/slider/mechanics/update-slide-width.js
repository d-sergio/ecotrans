import getVisible from "./get-visible";

/**Задать ширину слайда*/
function updateSlideWidth({viewport, carousel, visible, adjacentCorrect}) {
    try{
        //Рефы могли обнулиться, если компонент был перерисован
        if (!viewport || !carousel) return;
        
        const visibleArgs = {
            visible: visible,
            viewport: viewport,
            carousel: carousel
        };

        const numberOfVisible = getVisible(visibleArgs);
        const viewportWidth = viewport.offsetWidth;

        const slideWidth = ( viewportWidth - adjacentCorrect * 2) / numberOfVisible;

        for (let i of carousel.children){
            i.style.width = slideWidth + 'px';
        }
    } catch(e) {
        console.log('Slider Ошибка updateSlideWidth(): ' + e.name + ":" + e.message + "\n" + e.stack);
    }
}

export default updateSlideWidth;