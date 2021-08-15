import config from '../config/send-forms.json';

async function postCostForm(form) {
    try{
        const response = await fetch(config.cost,
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

export default postCostForm;