/**Задать ширину слайда*/
function updateSlideWidth({carouselRef, props}) {
    try{
        //Рефы могли обнулиться, если компонент был перерисован
        if (!carouselRef.current) return;
        const viewportWidth = carouselRef.current.parentNode.offsetWidth;

        const slideWidth = viewportWidth / props.visible;

        Array.prototype.forEach.call(carouselRef.current.children, item => 
            item.style.width = slideWidth + 'px');
            
    } catch(e) {
        console.log('InfinitySlider Ошибка updateSlideWidth(): ' + e.name + ":" + e.message + "\n" + e.stack);
    }
}

export default updateSlideWidth;