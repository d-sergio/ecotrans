> components

1. root-layout

2. buttons

Доступны как свойство при импорте компонента Buttons:

    import Buttons from '../components/buttons';
    ...
    <Buttons.Contact.Mobile/>

Все кнопки:
Detailed - Подробнее
Look - Смотреть
Order.Desktop Order.Mobile - Заказать
Contact.Mobile Contact.Desktop - Связаться (с нами)
Choose.Mobile Choose.Desktop - Выбрать
Call.Mobile Call.Desktop - Позвонить
Send.Mobile Send.Desktop - Отправить
Subscribe.Mobile Subscribe.Desktop - Подписаться
Arrow.MobileLeft Arrow.DesktopLeft - Стрелка влево
Arrow.MobileRight Arrow.DesktopRight - Стрелка вправо
Menu - кнопка мобильного меню
ScrollUp - кнопка прокрутки страницы наверх

Кнопка мобильного меню Buttons.Menu меняет вид через пропс open (true / false)

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



6. cards-statistics

Карточки статистики (10 лет успешной работы, 2396 Контрагентов ТКО и т.д.):

DangerClass, TenYears, Tko, WasteClass, MedicalWaste

Пропс mobile={true} переключает на мобильный вариант.
Пропс active={true} делает элемент больше (активный)

    import Cards from '../components/cards-statistics
    ...
    <Cards.DangerClass mobile={true} active={true}/>

Также переходят в активное состояние под курсором мыши. Но после этого теряют
способность активироваться через пропс ---Сейчас эта возможность закомментирована
и не активна



7. cards-partners

Карточки Наши партнёры:

EcoFund, EcoLab, EcoSputnik, Filippov, Leader, BuisnessRussia

Пропс mobile={true} переключает на мобильный вариант.
Пропс active={true} делает элемент больше и подсвечивает зелёным (активный)

    import Cards from '../components/cards-partners
    ...
    <Cards.EcoFund mobile={true} active={true}/>

Также переходят в активное состояние под курсором мыши. Но после этого теряют
способность активироваться через пропс ---Сейчас эта возможность закомментирована
и не активна





> Вёрстка

Компонент block-contact сдвигается вверх под header. При этом margin-top зависит
от высоты header.