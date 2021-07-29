import config from '../config/send-forms.json';

async function sendCostForm(form) {
    try{
        const response = await fetch(config.cost,
            {
                method: "POST",
                body: form
            }
        );

        const result = await response.json();

        console.log(`Ответ сервера: ${result.message}`);
    } catch(e) {
        console.log('Ошибка при отправке формы');
    }
}

export default sendCostForm;