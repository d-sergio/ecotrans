/**Проверяет, что поле не пустое и не совпадает с именем.
 * 
 * Использование:
 * 
 * <Forms.Form validate={
 *     initialValue: (value) => Forms.Validate.notEmpty(value, initialValue)
 * }>...</Forms.Form>
*/
function notEmpty(value, initialValue) {
    if (value === initialValue || value === '') {
        return '*Обязательное поле';
    }
}

export default notEmpty;