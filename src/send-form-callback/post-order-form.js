import config from '../config/send-forms.json';

async function postOrderForm(form, serviceName) {
    const defaultName = 'Не указана';

    const orders = {
        docs: 'Экологическая документация',
        medical: 'Сбор транспортирование и обезвреживание медицинских отходов',
        neutralization: 'Утилизация и обезвреживание отходов 1-4 классов опасности',
        training: 'Обучение по обращению с отходами',
        transportation: 'Транспортирование отходов 1-4 классов опасности'
    };

    try{
        form.append('serviceName', orders[serviceName] || defaultName);

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

export default postOrderForm;