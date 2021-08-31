import React, {useEffect, useRef} from 'react';
import {container} from './modal.module.css';
import animateOpen from './animate-open';
import animateClose from './animate-close';
/**
 * По умолчанию модальное окно закрывается кликом по пространству вокруг него
 * или через touchmove. Это можно изменить через пропс defaultClose (см. ниже)
 * 
 * Props:
 * @param {Node} modal - модальное окно
 * @@param {String} className - css-стили модального окна
 * @param {String} isOpen - true, чтобы открыть модальное окно
 * @param {function} closeModal - функция закрытия модального окна
 * @param {boolean} defaultClose - true (по умолчанию) разрешает закрывать модальное окно
 * кликом по пространству вокруг него или через touchmove
 * @param {number} duration - время анимации (мс) открытия/закрытия модального окна
 * (300 по умолчанию)
 */
function Modal(props) {
    const modalRef = useRef(null);
    const animate = useRef();   //Объект анимации
    const observer = useRef();

    //прокрутка страницы предотвращаеся?
    const scrollDisabled = useRef(false);
    
    useEffect(initialize, []);

    useEffect(toggleModal, [props.isOpen]);

    /**Инициализация */
    function initialize() {
        if (!modalRef.current) return;

        if (props.isOpen) {
            modalRef.current.style.display = 'flex';
        } else {
            modalRef.current.style.display = 'none';
        }
    }

    /**Закрыть модальное окно кликом (или через touchmove) по пустому пространству
     * вокруг него (атрибут data-close-empty) или по элементу с атрибутом
     * data-close-modal.
     * 
     * props.defaultClose === false запрещает закрывать кликом по пустому
     * пространству
    */
    function closeModal(e) {
        if (!props.isOpen) return;

        if (props.defaultClose
            && (e.target.dataset.closeModal
            || e.target.dataset.closeEmpty)) {
                //закрытие модального окна кликом по пустому пространству разрешено
                props.closeModal();

        } else if (!props.defaultClose && e.target.dataset.closeModal) {
            //закрытие модального окна кликом по пустому пространству запрещено
            props.closeModal();
        }
    }

    /**
     * #1 Анимация не требуется, если модальное окно скрыто (например, на первом рендере
     * страница только загрузилась и окно не показывается по умолчанию)
     * 
     * #2 Включить модальное окно:
     *  -блокируется прокрутка страницы
     *  -observer следит, чтобы блокировка не отключилась извне
     *  -запускается анимация
     * 
     * #3 Выключить модальное окно.
     * -удаляется observer
     * - после анимации (через колбэк) разблокируется прокрутка страницы
     * 
     * #4 Есть ли у модального окна полосы прокрутки. Если да, то они
     * должны отображаться до конца анимации, чтобы избежать возможных
     * багов анимации, когда они внезапно исчезают
     */
    function toggleModal() {

        if (!modalRef.current) return;

        //if (getComputedStyle(modalRef.current).display === 'none') return;  //#1

        const duration = props.duration;

        if (props.isOpen) {                 //#2
            scrollDisabled.current = true;
            lockPageScroll();
            createObserever();
            animateOpen({modalRef, animate, duration});

        } else if (!props.isOpen) {         //#3
            disconnectObserver();

            const scroll = hasScrollBars();     //#4
            if (scroll.xBar) modalRef.current.style.overflowX = 'scroll';
            if (scroll.yBar) modalRef.current.style.overflowY = 'scroll';

            const closeCallback = () => {
                if (!modalRef.current) return;

                scrollDisabled.current = false;
                unlockPageScroll();

                modalRef.current.style.overflowX = 'auto';
                modalRef.current.style.overflowY = 'auto';
            };

            animateClose({modalRef, animate, duration, closeCallback});
        }

        /**Почему здесь нет unlockPageScroll() на случай размонтирования компонента.
         * Компонент размонтируется всякий раз, когда меняются пропсы. Запуск
         * unlockPageScroll() приведёт к некорректной анимации закрытия
         * из-за внезапного появления полос прокрутки страницы
        */
        //return () => {};
    }
    
    /**Есть ли у модального окна полосы прокрутки */
    function hasScrollBars() {
        if (!modalRef) return;
        if (!modalRef.current) return;

        const yBar = modalRef.current.offsetWidth > modalRef.current.clientWidth;
        const xBar = modalRef.current.offsetHeight > modalRef.current.clientHeight;

        return {xBar, yBar};
    }

    /**Если document.body.style по какой-то причине изменится, то надо вернуть
     * на место стили из lockPageScroll
     */
    function createObserever() {
        observer.current = new MutationObserver(observerCallback);
        observer.current.observe(document.body, {attributes: true});

        function observerCallback(mutations) {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'style') {
                    if (scrollDisabled.current) {

                        lockPageScroll();
                        console.log(
                            `Modals. observerCallback(): модальные окна устанавливают свои значения overflow и margin-right для body`
                        );

                    } else if (!scrollDisabled.current) {

                        console.warn(`Modals. observerCallback(): Прокрутка разрешена, но observer остался! observer будет удалён.`);
                        disconnectObserver();
                    }
                }
            });
        }
    }

    function disconnectObserver() {
        if (!observer) {
            return;
        }

        if (!observer.current) {
            return;
        }

        observer.current.disconnect();
        if (observer.current) observer.current = undefined;
    }

    /**Запретить прокрутку страницы */
    function lockPageScroll() {
        const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
        const bodyMarginRight = parseInt(getComputedStyle(document.body).marginRight);

        document.body.style.overflow = 'hidden';
        document.body.style.marginRight = bodyMarginRight + scrollBarWidth + 'px';
    }

    /**Разрешить прокрутку страницы */
    function unlockPageScroll() {
        document.body.style.overflow = '';
        document.body.style.marginRight = '';
    }

    return(
        <div
            data-close-empty
            ref={modalRef}
            className={props.className || container}
            onClick={closeModal}
            onTouchMove={closeModal}
        >
            {props.modal}
        </div>
    );
}

export default Modal;

Modal.defaultProps = {
    defaultClose: true,
    modal: <div style={{backgroundColor: 'white'}}>Hello, world!</div>,
    duration: 300
};