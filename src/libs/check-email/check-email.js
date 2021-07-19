/**Соответствует ли строка формату записи адреса email
 * @returns {boolean} - true/false
 */

function checkEmail(email) {
    const regexp = /[-.\w]+@([\w-]+\.)+[\w-]+/g;

    return regexp.test(email) ? true : false;
}

export default checkEmail;