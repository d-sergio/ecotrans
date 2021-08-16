import config from '../config/send-forms.json';

async function postCallbackForm(form) {

    try{
        const response = await fetch(config.callback,
            {
                method: "POST",
                body: form
            }
        );

        const result = await response.json();
        console.log(`Отправка формы: ${result.status}`);

        return result;
        
    } catch(e) {
        console.log(`Ошибка при отправке формы: ${e}`);

        return false;
    }
}

export default postCallbackForm;