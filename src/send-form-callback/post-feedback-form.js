import config from '../config/send-forms.json';

async function sendFeedbackForm(form) {
    try{
        const response = await fetch(config.feedback,
            {
                method: "POST",
                body: form
            }
        );

        const result = await response.json();
        console.log(`Отправка формы: ${result.status}`);

        return result;

    } catch(e) {
        console.log(`Ошибка при отправке формы: ${e.name}, ${e.message}, ${e.stack}`);

        return false;
    }
}

export default sendFeedbackForm;