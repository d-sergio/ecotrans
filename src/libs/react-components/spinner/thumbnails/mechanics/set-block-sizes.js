/**Размеры и позиция окружности circleRef и миниатюр thumbsRef*/
function setBlockSizes({circleRef, thumbsRef, props}) {
    if (!circleRef.current || !thumbsRef.current) return;

    const thumbs = thumbsRef.current.children;

    thumbsRef.current.style.width = 2 * props.radius + thumbs[0].offsetWidth + 'px';
    thumbsRef.current.style.height = 2 * props.radius + thumbs[0].offsetHeight + 'px';
    thumbsRef.current.style.top = props.thumbsTopCorrect + 'px';

    circleRef.current.style.top = thumbs[0].offsetWidth / 2 + props.thumbsTopCorrect + 'px';
    circleRef.current.style.width = 2 * props.radius + 'px';
    circleRef.current.style.height = 2 * props.radius + 'px';
}

export default setBlockSizes;