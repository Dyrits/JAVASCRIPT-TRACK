const results = {
    0: [],
    1: [[1]],
    2: [[1], [1, 2, 1]]
}

function rows(size) {
    if (results[size]) { return results[size] }
    let result = rows(size - 1);
    let last = result[size - 2];
    let current = [];
    for (let i = 0; i < size; i++) {
        let left = last[i - 1] || 0;
        let right = last[i] || 0;
        current[i] = left + right;
    }
    results[size] = result.concat([current]);
    return [...result, current]
}


// function build(row, current, index, array) {
//     return [...row, current + (array[index + 1] || 0)];
// }
//
// function rows(size) {
//     if (!size) { return []; }
//     let result = [[1]];
//     for (let i = 1; i < size; i++) {
//         result.push(result[i - 1].reduce(build, [1]));
//     }
//     return result;
// }