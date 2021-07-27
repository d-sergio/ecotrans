import checkEmail from "../../../check-email";

/**Проверяет, что email введён корректно, поле не пустое и не совпадает
 * с именем.
 * 
 * Использование:
 * 
 * <Forms.Form validate={
 *     fieldName: (value) => Forms.Validate.email(value, fieldName)
 * }>...</Forms.Form>
*/
function validateEmail(email, fieldName) {
    if (email === '' || email === fieldName) {
        
        return '*Обязательное поле';

    } else if (!checkEmail(email))  {

        return 'Некорректный email';
    }
}

export default validateEmail;