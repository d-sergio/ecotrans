/**Задать ширину слайда*/
function updateSlideWidth(carousel, visible) {
    try{
        //Рефы могли обнулиться, если компонент был перерисован
        if (!carousel) return;
        const viewportWidth = carousel.parentNode.offsetWidth;

        const slideWidth = viewportWidth / visible;

        Array.prototype.forEach.call(carousel.children, item => 
            item.style.width = slideWidth + 'px');
            
    } catch(e) {
        console.log('InfinitySlider Ошибка updateSlideWidth(): ' + e.name + ":" + e.message + "\n" + e.stack);
    }
}

export default updateSlideWidth;