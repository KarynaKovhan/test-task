function multiplyOddsByMin(matrix) {
    let min = Infinity;

    matrix.forEach(row => {
        row.forEach(value => {
            if (value < min) {
                min = value;
            }
        });
    });

    const transformedMatrix = matrix.map(row =>
        row.map(value => value % 2 !== 0 ? value * min : value)
    );

    return transformedMatrix;
}
