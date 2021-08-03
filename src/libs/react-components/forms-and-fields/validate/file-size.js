/**Валидация по размеру загружаемого файла
 * 
 * @param {string} formName - имя формы
 * @param {string} fieldName - имя поля с файлом
 * @param {number} maxSize - максимальный размер файла в байтах
 */

function fileSize(formName, fieldName, maxSize) {
    const file = document.forms[formName][fieldName].files[0];

    if (file === undefined) {
        return '*Обязательное поле';
    } else if (file.size > maxSize) {
        return `Размер файла превышает ${maxSize} байт`;
    }
}

export default fileSize;