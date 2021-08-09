function getClassNames(className) {
    const undefClass = {
        active: undefined,
        inactive: undefined,
        error: undefined
    };

    if (!className) {

        return undefClass;

    } else if (typeof className === 'string') {
        
        const classNames = {
            active: className,
            inactive: className,
            error: className
        };

        return classNames;

    } else if (typeof className === 'object'
        && !Array.isArray(className)
        && className !== null) {

        const classNames = {
            active: className.active || undefined,
            inactive: className.inactive || undefined,
            error: className.error || undefined
        };

        return classNames;

    } else {

        return undefClass;
    }
}

export default getClassNames;