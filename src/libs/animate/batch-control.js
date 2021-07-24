/**Управление запуском и остановкой множества анимаций
 * 
 * @param {Array} animations - массив с объектами анимации Animation (animate.js)
 * 
 * const batch = new BatchControl([animObj1, animObj2...])
*/
class BatchControl{
    constructor(animations) {
        this.animations = animations;
    }

    start() {
        this.animations.forEach( animation => animation.start() );
    }

    cancel() {
        this.animations.forEach( animation => animation.cancel() );
    }
}

export default BatchControl;