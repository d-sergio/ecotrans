import config from '../config/send-forms.json';
import orders from '../config/orders.json';

async function postServiceForm(form, orderName) {
    const defaultName = 'Не указано';

    try{
        form.append('orderName', orders[orderName] || defaultName);

        const response = await fetch(config.service,
            {
                method: "POST",
                body: form
            }
        );

        const result = await response.json();
        console.log(`Отправка формы: ${response.status}`);

        return result;
        
    } catch(e) {
        console.log(`Ошибка при отправке формы: ${e}`);

        return false;
    }
}

export default postServiceForm;