import getSeparator from "./get-separator";

/**Показывается только имя файла + расширение */
function getFileName(value) {
    const separator = getSeparator(value);

    if (!separator) return value;

    const name = value.split(separator).slice(-1);

    return name;
}

export default getFileName;