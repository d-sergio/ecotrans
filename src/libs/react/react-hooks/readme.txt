Хуки React

*****usePrevious сохраняет предыдущее состояние/пропс

Использование:

function SomeComponent() {
    const [state, setState] = useState(initState);
    const prevState = usePrevious(state);

    useEffect(() => console.log(prevState));
}




*****useForceUpdate выполняет forceUpdate для функциональных компонентов

Использование:

const forceUpdate = useForceUpdate();

forceUpdate();




*****useMediaQuery

Медиа-запрос

Позволяет обращаться к медиа-запросам из JavaScript. В сравнении с обработчиком
события window.onresize меньше загружает браузер, так как событие всплывает
только на заданных размерах окна.

Принимает объект, содержащий два поля с медиа-запросами: small и large. Вернёт
true, если размер окна соответствует small, и false для large.

Использование компоненте:

1. Напишем строки медиа-запросов queries для мобильного small и для десктопа large

2. Передадим queries в хук useMediaQuery. Этот хук лучше поместить первым среди
хуков, так как от него зависит, что вообще будет рендериться.

3. В данном случае состояние инициализировано undefined, поэтому ничего не рендерим,
пока mobileView не примет значение true или false

4. Условный рендеринг в зависимости от состояния mobileView


Код:

const queries = {                                           //1
    small: 'screen and (max-width: 1023px)',
    large: 'screen and (min-width: 1024px)'
};

const mobileView = useMediaQuery(queries);  //2

if (mobileView === undefined) return null;                  //3

return(mobileView ? <MobileComponent/> : <DesktopComponent/>);  //4