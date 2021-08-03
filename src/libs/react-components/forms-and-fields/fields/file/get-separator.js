/**Уточнить какой разделитель пути используется */
function getSeparator(value) {

    if (value.includes('/')) {

        return '/';

    } else if (value.includes('\\')) {

        return '\\';

    } else {

        return null;
    }
}

export default getSeparator;