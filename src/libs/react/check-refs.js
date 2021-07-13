/**Существуют ли рефы?
 * ref- проверяемый реф
 * consumer - имя запрашивающей функции или другая информация
*/

export default function checkRef(ref, consumer) {
    if (!ref.current) {
        console.log(`Остановлен ${consumer}: ref is ${ref.current}`);
        return false;
    } else {
        return true;
    }
}