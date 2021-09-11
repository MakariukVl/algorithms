function quickSort(array, compare) {

    if (array.length < 2) return array;

    var left = [];
    var right = [];
    var indexMid = Math.floor(array.length / 2);
    var mid = array[indexMid];

    const cmp = compare || function (a, b) {
        return a - b;
    };

    fillLeftRight(0, indexMid);
    fillLeftRight(indexMid + 1, array.length);

    return quickSort(left, cmp).concat(mid, quickSort(right, cmp));

    function fillLeftRight(l, r) {
        for (let i = l; i < r; i++) {
            if (cmp(mid, array[i]) > 0) left.push(array[i]);
            else right.push(array[i]);
        }
    }
}

export {quickSort};