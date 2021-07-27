/**Проверяет, что поле не пустое и не совпадает с именем.
 * 
 * Использование:
 * 
 * <Forms.Form validate={
 *     fieldName: (value) => Forms.Validate.notEmpty(value, fieldName)
 * }>...</Forms.Form>
*/
function notEmpty(value, fieldName) {
    if (value === fieldName || value === '') {
        return '*Обязательное поле';
    }
}

export default notEmpty;