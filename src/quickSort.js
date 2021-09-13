function quickSort(array, compare) {

    if (array.length < 2) return array;

    var left = [];
    var right = [];
    var indexMid = Math.floor(array.length / 2);
    var mid = array[indexMid];

    const cmp = compare || function (a, b) {
        return a - b;
    };

    for (let i = 0; i < array.length; i++) {
        if (i === indexMid) continue;
        if (cmp(mid, array[i]) > 0) left.push(array[i]);
        else right.push(array[i]);
    }

    let result = [];
    result.push(...quickSort(left, cmp));
    result.push(mid);
    result.push(...quickSort(right, cmp));

    return result;
}

export { quickSort };