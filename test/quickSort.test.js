import chai from 'chai';
import chaiArrays  from "chai-arrays";
import { quickSort } from '../src/quickSort.js';

const expect = chai.expect;
chai.use(chaiArrays);

describe('Test suite for quickSort function', function () {
    it('#1. An array of numbers sorted in descending order', function () {
        const arr = quickSort(
            [7, 13, 5, 8, 3, 4, 9],
            (a, b) => b - a);
        expect(arr).to.be.sorted((a, b) => b - a);
    });
    it('#2. An array of numbers sorted in descending order', function () {
        const arr = quickSort(
            [66, 44, 11, 34, 17, 27, 53, 45, 21, 3, 9, 8],
            (a, b) => b - a);
        expect(arr).to.be.sorted((a, b) => b - a);
    });
    it('#3. An array of numbers (including non-unique) sorted in descending order', function () {
        const arr = quickSort(
            [11, 15, 11, 34, 17, 27, 66, 17, 27, 27],
            (a, b) => b - a);
        expect(arr).to.be.sorted((a, b) => b - a);
    });
    it('#4. An array of numbers (including negative) sorted in descending order', function () {
        const arr = quickSort(
            [-15, 11, 0, 31, -7, -17, 23, -16],
            (a, b) => b - a);
        expect(arr).to.be.sorted((a, b) => b - a);
    });
    it('#5. An array of numbers sorted in ascending order', function () {
        const arr = quickSort(
            [17, 32, 5, 8, 3, 2, 21, 8, -4],
            (a, b) => a - b);
        expect(arr).to.be.sorted((a, b) => a - b);
    });
    it('#6. An array of numbers sorted by default (ascending order)', function () {
        const arr = quickSort([-1, -7, 12, -3, 16, 21, 7, 5, 5, 2, -3, 11]);
        expect(arr).to.be.sorted((a, b) => a - b);
    });
    it('#7. An array of objects sorted by Age in descending order', function () {
        const arr = quickSort([
            { Name: 'Bob', Age: 17 },
            { Name: 'Daniel', Age: 33 },
            { Name: 'Clara', Age: 41 },
            { Name: 'Ann', Age: 15 },
            { Name: 'John', Age: 36 },
            { Name: 'Jane', Age: 31 },
            { Name: 'Jack', Age: 70 },
            { Name: 'Sara', Age: 7 }
        ], (a, b) => b.Age - a.Age);
        expect(arr).to.be.sorted((a, b) => b.Age - a.Age);
    });
    it('#8. An array of objects sorted by Name in ascending (alphabetical) order', function () {
        const arr = quickSort([
            { Name: 'Bob', Age: 17 },
            { Name: 'Daniel', Age: 33 },
            { Name: 'Clara', Age: 41 },
            { Name: 'Ann', Age: 15 },
            { Name: 'John', Age: 36 },
            { Name: 'Jane', Age: 31 },
            { Name: 'Jack', Age: 70 },
            { Name: 'Sara', Age: 7 }
        ], (a, b) => a.Name.localeCompare(b.Name));
        expect(arr).to.be.sorted((a, b) => a.Name.localeCompare(b.Name));
    });
    it('#9. An 2d array sorted in descending order', function () {
        const arr = quickSort(
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
        expect(arr).to.be.sorted((a, b) => b[0] - a[0]);
    });
});