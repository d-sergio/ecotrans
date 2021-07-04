> components

1. root-layout

Корневой компонент root-layout управляет контекстом MobileView, принимающим
значения true/false. Параметры медиа-запросов, по которым может определяться
мобильный/десктопный режим сайта, задаются в файле config/config.json

Кроме того, в некоторых случаях компоненты сами могут совершать медиа-запросы
через media-query.js (смотри подробнее components/root-layout/media-query-readme.txt)

2. buttons

Доступны как свойство при импорте компонента Buttons:

    import Buttons from '../components/buttons';
    ...
    <Buttons.Contact.Mobile/>

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
Menu - кнопка мобильного меню

3. cards-services

Карточки для слайдера Услуги: Transport, Docs, Training, Medical, Neutral

Доступны в трёх вариантах: Mobile, Small, Large. Например: 

    import Cards from '../components/cards-services';
    ...
    <Cards.Training.Mobile/>

Папки service-template-large, service-template-small, service-template-mobile
содержат шаблоны для создания новых карточек

4. cards-projects

Карточки для слайдера Проекты: Green, Technopark, Education

Доступны в двух вариантах: Mobile, Desktop. Например:

    import Cards from '../components/cards-projects';
    ...
    <Cards.Green.Mobile/>

5. cards-advantages

Карточки Преимущества: 

Ecologist, License, Technologies, Training

Пропс mobile={true} переключает на мобильный вариант

    import Cards from '../components/cards-advantages';
    ...
    <Cards.Ecologist mobile={true}/>