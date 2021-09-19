function quickSort(array, compare) {

    const INPUT_TYPE = Object.prototype.toString.call(array);
    const ARRAY_TYPE = '[object Array]';
    const OBJECT_TYPE = '[object Object]';
    const STRING_TYPE = '[object String]';

    if (!(INPUT_TYPE === ARRAY_TYPE) && !(INPUT_TYPE === STRING_TYPE))
        throw new TypeError('The \'array\' property must be an Array or String');

    if (array.length < 2) return array;

    compare = compare || null;
    if (INPUT_TYPE === ARRAY_TYPE) {

        if (array.filter(Array.isArray).length >= 1
            && compare == null) {
            throw new TypeError('Default compare function for multidimensional arrays is not supported')
        }
        if (array.filter(v => Object.prototype.toString.call(v) === OBJECT_TYPE).length >= 1
            && compare == null) {
            throw new TypeError('Default compare function for arrays of objects is not supported')
        }
    }

    let result, cmp;

    if (INPUT_TYPE === STRING_TYPE) {
        cmp = (a, b) => a.localeCompare(b);
        let str = array.split('');

        result = sort(str, cmp).join('');
    }
    else {  // INPUT_TYPE === ARRAY_TYPE
        cmp = compare || function (a, b) {
            return a - b;
        };
        result = sort(array, cmp);
    }

    return result;

    function sort(arr, cmp) {
        var left = [];
        var right = [];
        var indexMid = Math.floor(arr.length / 2);
        var mid = arr[indexMid];

        for (let i = 0; i < arr.length; i++) {
            if (i === indexMid) continue;
            if (cmp(mid, arr[i]) > 0) left.push(arr[i]);
            else right.push(arr[i]);
        }

        let result = [];
        result.push(...quickSort(left, cmp));
        result.push(mid);
        result.push(...quickSort(right, cmp));

        return result;
    }
}

export { quickSort };