> components

1. root-layout

Корневой компонент root-layout управляет контекстом ViewContext, в котором хранится
текущий режим отображения сайта mobile/desktop

2. buttons

Все кнопки: Contact, Choose, Call, Detailed, Send, Subscribe, ArrowLeft, ArrowRight

Доступны как свойство при импорте компонента Buttons:

    import Buttons from '../components/buttons';
    ...
    <Buttons.Contact/>

3. cards-services

Карточки для слайдера Услуги: Transport, Docs, Training, Medical, Neutral

Доступны в трё вариантах: Mobile, Small, Large. Например: 

    import Cards from '../components/cards-services';
    ...
    <Cards.Training.Mobile/>

Папки service-template-large, service-template-small, service-template-mobile
содержат шаблоны для создания новых карточек