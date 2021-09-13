import { quickSort } from './src/quickSort.js';

var arr = [7, 13, 5, 8, 3, 4, 9];

console.log("Initial array:", arr);

console.log("Sorted desc:", quickSort(arr, (a, b) => b - a));
// expecting [13, 9, 8, 7, 5, 4, 3]
console.log("Sorted asc:", quickSort(arr, (a, b) => a - b));
// expecting [3, 4, 5, 7, 8, 9, 13]
console.log("Sorted default:", quickSort(arr));
// expecting [3, 4, 5, 7, 8, 9, 13]

const names = quickSort([
    { Name: 'Bob', Age: 17 },
    { Name: 'Daniel', Age: 33 },
    { Name: 'Clara', Age: 41 },
    { Name: 'Ann', Age: 15 },
    { Name: 'John', Age: 36 },
    { Name: 'Jane', Age: 31 },
    { Name: 'Jack', Age: 70 },
    { Name: 'Sara', Age: 7 }
], (a, b) => a.Name.localeCompare(b.Name)).map(v => v.Name);
console.log("\nSorted by Names in alphabetical order:\n", names);
// expecting [Ann, Bob, Clara, Daniel, Jack, Jane, John, Sara]

const sorted2d = quickSort(
    [
        [-1, 7],
        [11, 0],
        [7, 5],
        [9, -8],
        [7, 4],
        [33, -21],
        [22, 23]
    ],
    (a, b) => b[0] - a[0]);
console.log('sorted 2d array by val[0] in descending order:', sorted2d);
// expecting [[33, -21], [22, 23], [11, 0], [9, -8], [7, 5], [7, 4], [-1, 7]] 