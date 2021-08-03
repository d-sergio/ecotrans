import checkEmail from "../../../check-email";

/**Проверяет, что email введён корректно, поле не пустое и не совпадает
 * с именем.
 * 
 * Использование:
 * 
 * <Forms.Form validate={
 *     initialValue: (value) => Forms.Validate.email(value, initialValue)
 * }>...</Forms.Form>
*/
function validateEmail(email, initialValue) {
    if (email === '' || email === initialValue) {
        
        return '*Обязательное поле';

    } else if (!checkEmail(email))  {

        return 'Некорректный email';
    }
}

export default validateEmail;