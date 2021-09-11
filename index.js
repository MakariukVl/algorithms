import {quickSort} from './src/quickSort.js';

var arr = [7, 13, 5, 8, 3, 4, 9];

console.log("Initial array:", arr);

console.log("Sorted desc:", quickSort(arr, (a, b) => b - a));
console.log("Sorted asc:", quickSort(arr, (a, b) => a - b));
console.log("Sorted default:", quickSort(arr));
