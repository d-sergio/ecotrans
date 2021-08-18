import config from '../config/send-forms.json';

async function postServiceForm(form, projectName) {
    const defaultName = 'Не указано';

    const projects = {
        education: 'Центр дополнительного экологического образования',
        technopark: 'Экотехнопарк Экотранс',
        training: 'Обучение по обращению с отходами'
    };

    try{
        form.append('projectName', projects[projectName] || defaultName);

        const response = await fetch(config.project,
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