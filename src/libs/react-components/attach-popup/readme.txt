Попап, прикрепляемый к дочернему элементу

Использование:

<AttachPopup popup={<Popup/>}>
     <ButtonOpenPopup/>
</AttachPopup>

<Popup/> - ваш попап
<ButtonOpenPopup/> - дочерний элемент, при клике на котором откроется
попап

Создать кнопку закрытия попапа можно, добавив элементу атрибут data-close-popup.

По умолчанию попап закрывается кликом по пространству вокруг него. Это можно
изменить через пропс defaultClose (см. ниже)

Props:

@param {boolean} isOpen - открыт ли попап по умолчанию
@param {String} className - css-стили попапа
@param {Node} popup - попап
@param {boolean} defaultClose - true (по умолчанию) разрешает закрывать попап
кликом по пространству вокруг него