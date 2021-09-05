function updateCarouselCoords({carouselRef, slideShift}) {
    if (!carouselRef.current) return;
    if (!carouselRef.current.firstChild) return;

    const slideWidth = carouselRef.current.firstChild.offsetWidth;
    carouselRef.current.style.marginLeft = - slideWidth * slideShift + 'px';
}

export default updateCarouselCoords;