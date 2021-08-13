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

Принимает строку меди-запроса и возвращает true, если есть совпадение.

Использование:

const mobileView = useMediaQuery("screen and (max-width: 550px)");