Медиа-запрос

Позволяет обращаться к медиа-запросам из JavaScript. В сравнении с обработчиком
события window.onresize меньше нагружает браузер, так как событие всплывает
только на заданных размерах окна.

Использование в своём компоненте:

1. Напишем строки медиа-запросов queries для мобильного mobile и для десктопа desktop

2. Создадим состояние mobileView. Оно будет изменено в mediaQuery на true или false,
в зависимости от размера окна. Если mobileView инициализирован как undefined, то
mediaQuery сработает сразу, как только компонент смонтируется.

3. Передадим всё в mediaQuery через хук эффекта

4. В данном случае состояние инициализировано undefined, поэтому ничего не рендерим,
пока mobileView не примет значение true или false

5. Условный рендеринг в зависимости от состояния mobileView


Код:

const queries = {                                           //1
    mobile: 'screen and (max-width: 1023px)',
    desktop: 'screen and (min-width: 1024px)'
};


const [mobileView, setMobileView] = useState(undefined);    //2

useEffect(() => mediaQuery(mobileView, setMobileView, queries))   //3

if (mobileView === undefined) return null;                  //4

return(mobileView ? <MobileComponent/> : <DesktopComponent/>);  //5