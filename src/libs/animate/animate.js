import changeStyleProperty from './draw-functions/change-style-property';
import linear from './time-functions/linear';

/**Объект для анимации
 * 
 * Принимаемые параметры:
 * @param {object} animationProps - объект, содержащий следующие значения (в скобках - по умолчанию):
 * 
 *      @param {function} timing - функция расчёта времени (linear.straight)
 *      @param {number} duration - длительность анимации (500)
 *      @param {function} draw - функция отрисовки (changeStyleProperty)
 *      @param {node} element - анимируемый элемент (document.body)
 *      @param {string} property - изменяемое анимацией свойство стиля ('opacity')
 *      @param {number} startValue - начальное значение, изменяемого свойства стиля (0)
 *      @param {number} finalValue - конечно значение, изменяемого свойства стиля (1)
 *      @param {string} units - единицы измерения (без единиц измерения)
 *      @param {function} callback - необязательный коллбэк, который выполнится
 *      как только завершится анимация
 * 
 * 
 * Как работает:
 * 1.   Создать объект анимации с параметрами по умолчанию:
 *      const obj = new CreateAnimation();
 * 
 *      или с заранее установленным параметрами:
 * 
 *      const obj = new CreateAnimation(animationProps);
 * 
 * 2.   Изменить параметры анимации можно через сеттер:
 *      obj.set(animationProps);
 * 
 * 3.   Запустить анимацию:
 *      obj.start();
 * 
 * 4.   Отмена анимации:
 *      obj.cancel();
 * 
*/
export class Animation{
    constructor(animationProps) { 
        //Принимаемые параметры по умолчанию
        const defaults = {
            timing: linear.straight,
            duration: 500,
            draw: changeStyleProperty,
            element: document.body,
            property: 'opacity',
            startValue: 0,
            finalValue: 1,
            units: '',
            callback: undefined
        }

        Object.assign(this, defaults, animationProps);

        if (this.duration < 0) {
            console.log(`Animation: время анимации duration не может быть отрицательным, поэтому ему будет присвоено значение 1.`);
            this.duration = 1;
        }

        //Внутренние параметры для анимации, которые можно отслеживать
        this.requestId = undefined;
        this.timeFraction = 0;
        this.progress = 0;
        this.actualValue = this.startValue;
        this.startTime = 0;
        this.completed = false; //завершена ли анимация

        //Методы
        this.set = this.set.bind(this);
        this.loop = this.loop.bind(this);
        this.continueLoop = this.continueLoop.bind(this);
        this.start = this.start.bind(this);
        this.cancel = this.cancel.bind(this);
    }

    set(animationProps) {
        Object.assign(this, animationProps);
    }

    loop() {
        this.requestId = undefined;

        let curentTime = performance.now();

        this.timeFraction = (curentTime - this.startTime) / this.duration;

        if (this.timeFraction > 1) this.timeFraction = 1;

        this.progress = this.timing(this.timeFraction);

        this.actualValue = this.startValue + Math.abs(this.finalValue - this.startValue) * this.progress;

        this.draw(this.element, this.property, this.actualValue, this.units);

        if (this.timeFraction < 1) {
            this.continueLoop();
        
        } else if (this.callback !== undefined && this.callback !== null) {
            this.callback();    //коллбэк после завершения анимации
            this.completed = true;
        }
    }

    continueLoop(){
        if (!this.requestId){
            this.requestId = requestAnimationFrame(this.loop);
        }
    }

    start() {
        this.startTime = performance.now();
        this.continueLoop();
    }

    cancel(){
        if (this.requestId) {
            cancelAnimationFrame(this.requestId);
            this.requestId = undefined;
            this.timeFraction = 0;
            this.progress = 0;
            this.actualValue = this.startValue;
        }
    }
}