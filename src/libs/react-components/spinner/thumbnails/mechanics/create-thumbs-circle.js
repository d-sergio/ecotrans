/**Координаты миниатюр задаются относительно самого блока*/
function createThumbsCircle({thumbsRef, props}) {
    if (!thumbsRef.current) return;        

    /*
        radius - радиус окружности
        fi - угол между соседними миниатюрами
    */
    const radius = props.radius;
    const fi = Math.PI * 2 / props.children.length;

    const thumbs = thumbsRef.current.children;

    /*Задаём координаты по окружности */
    for (let i = 0; i < thumbs.length; i++) {
        const angle = props.defaultAngle * fi + fi * i;

        thumbs[i].style.left = radius * Math.cos(angle) + radius + 'px';
        thumbs[i].style.top = radius * Math.sin(angle) + radius + 'px';
    }

}

export default createThumbsCircle;