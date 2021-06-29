> components

1. root-layout

Корневой компонент root-layout управляет контекстом ViewContext, в котором хранится
текущий режим отображения сайта mobile/desktop

2. buttons

Все кнопки:
Detailed - Подробнее
Look - Смотреть
Contact.Mobile Contact.Desktop - Связаться (с нами)
Choose.Mobile Choose.Desktop - Выбрать
Call.Mobile Call.Desktop - Позвонить
Send.Mobile Send.Desktop - Отправить
Subscribe.Mobile Subscribe.Desktop - Подписаться
Arrow.MobileLeft Arrow.DesktopLeft - Стрелка влево
Arrow.MobileRight Arrow.DesktopRight - Стрелка вправо

Доступны как свойство при импорте компонента Buttons:

    import Buttons from '../components/buttons';
    ...
    <Buttons.Contact.Mobile/>

3. cards-services

Карточки для слайдера Услуги: Transport, Docs, Training, Medical, Neutral

Доступны в трё вариантах: Mobile, Small, Large. Например: 

    import Cards from '../components/cards-services';
    ...
    <Cards.Training.Mobile/>

Папки service-template-large, service-template-small, service-template-mobile
содержат шаблоны для создания новых карточек