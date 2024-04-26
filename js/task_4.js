function mapper(rules) {
    return function(item) {
        const transformed = {};

        rules.forEach(([sourceField, targetField, transformFn]) => {
            const value = item[sourceField];

            transformed[targetField] = transformFn ? transformFn(value) : value;
        });

        return transformed;
    };
}
