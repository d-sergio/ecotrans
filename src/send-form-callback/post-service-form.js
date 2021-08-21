import config from '../config/send-forms.json';

async function postServiceForm(form, serviceName) {
    const defaultName = 'Не указано';

    const orders = {
        docs: 'Экологическая документация',
        medical: 'Сбор медицинских отходов',
        neutralization: 'Утилизация и обезвреживание отходов',
        training: 'Обучение по обращению с отходами',
        transportation: 'Транспортирование отходов',
        price: 'Уточнение стоимости'
    };

    try{
        form.append('serviceName', orders[serviceName] || defaultName);

        const response = await fetch(config.service,
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

export default postServiceForm;