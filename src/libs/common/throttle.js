/** Обычный throttling-декоратор
 * Ограничивает вызовы функции func периодом времени ms. Из всех попавших
 * в период throttling вызовов, будет осуществлён только последний
 * 
 * @param {function} func 
 * @param {number} ms 
 * 
 * Использование:
 * 
 * function f(args) {
 *  ...
 * }
 * 
 * const fThrottle = throttle(f, 1000); //1000 - период, в который функция не выполняется
 * 
 * fThrottle(args);
 */

function throttle (func, ms) {
    let isThrottled = false;
    let savedArgs;
    let savedThis;

    function wrapper() {
        if (isThrottled) {
            savedArgs = arguments;
            savedThis = this;
            return;
        }

        func.apply(this, arguments);
        isThrottled = true;

        setTimeout(function(){
            isThrottled = false;

            if (savedArgs) {
                wrapper.apply(savedThis, savedArgs);
                savedArgs = savedThis = null;
            }
        }, ms);
    }
    return wrapper;
}

export default throttle;
