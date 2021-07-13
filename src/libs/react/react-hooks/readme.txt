Хуки React

usePrevious сохраняет предыдущее состояние/пропс

Использование:

function SomeComponent() {
    const [state, setState] = useState(initState);
    const prevState = usePrevious(state);

    useEffect(() => console.log(prevState));
}