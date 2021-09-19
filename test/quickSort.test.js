/* eslint-disable no-undef */
// chai: https://github.com/chaijs/chai
import chai from 'chai';
// chaiArrays: https://github.com/GaneshSPatil/chai-arrays
import chaiArrays from "chai-arrays";
import { quickSort } from '../src/quickSort.js';

const expect = chai.expect;
chai.use(chaiArrays);

describe('Test suite for quickSort function', function () {
    it('#1. An array of numbers sorted in descending order', function () {
        const arr = quickSort(
            [7, 13, 5, 8, 3, 4, 9],
            (a, b) => b - a);
        expect(arr).to.be.an('array');
        expect(arr).to.have.lengthOf(7);
        expect(arr).to.have.all.members([7, 13, 5, 8, 3, 4, 9]);
        expect(arr).to.be.sorted((a, b) => b - a);
    });
    it('#2. An array of numbers sorted in descending order', function () {
        const arr = quickSort(
            [66, 44, 11, 34, 17, 27, 53, 45, 21, 3, 9, 8],
            (a, b) => b - a);
        expect(arr).to.be.an('array');
        expect(arr).to.have.lengthOf(12);
        expect(arr).to.have.all.members([66, 44, 11, 34, 17, 27, 53, 45, 21, 3, 9, 8]);
        expect(arr).to.be.sorted((a, b) => b - a);
    });
    it('#3. An array of numbers (including non-unique) sorted in descending order', function () {
        const arr = quickSort(
            [11, 15, 11, 34, 17, 27, 66, 17, 27, 27],
            (a, b) => b - a);
        expect(arr).to.be.an('array');
        expect(arr).to.have.lengthOf(10);
        expect(arr).to.have.all.members([11, 15, 11, 34, 17, 27, 66, 17, 27, 27]);
        expect(arr).to.be.sorted((a, b) => b - a);
    });
    it('#4. An array of numbers (including negative) sorted in descending order', function () {
        const arr = quickSort(
            [-15, 11, 0, 31, -7, -17, 23, -16],
            (a, b) => b - a);
        expect(arr).to.be.an('array');
        expect(arr).to.have.lengthOf(8);
        expect(arr).to.have.all.members([-15, 11, 0, 31, -7, -17, 23, -16]);
        expect(arr).to.be.sorted((a, b) => b - a);
    });
    it('#5. An array of numbers sorted in ascending order', function () {
        const arr = quickSort(
            [17, 32, 5, 8, 3, 2, 21, 8, -4],
            (a, b) => a - b);
        expect(arr).to.be.an('array');
        expect(arr).to.have.lengthOf(9);
        expect(arr).to.have.all.members([17, 32, 5, 8, 3, 2, 21, 8, -4]);
        expect(arr).to.be.sorted((a, b) => a - b);
    });
    it('#6. An array of numbers sorted by default (ascending order)', function () {
        const arr = quickSort([-1, -7, 12, -3, 16, 21, 7, 5, 5, 2, -3, 11]);
        expect(arr).to.be.an('array');
        expect(arr).to.have.lengthOf(12);
        expect(arr).to.have.all.members([-1, -7, 12, -3, 16, 21, 7, 5, 5, 2, -3, 11]);
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
        expect(arr).to.be.an('array');
        expect(arr).to.have.lengthOf(8);
        expect(arr).to.have.all.deep.members([
            { Name: 'Bob', Age: 17 },
            { Name: 'Daniel', Age: 33 },
            { Name: 'Clara', Age: 41 },
            { Name: 'Ann', Age: 15 },
            { Name: 'John', Age: 36 },
            { Name: 'Jane', Age: 31 },
            { Name: 'Jack', Age: 70 },
            { Name: 'Sara', Age: 7 }
        ]);
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
        expect(arr).to.be.an('array');
        expect(arr).to.have.lengthOf(8);
        expect(arr).to.have.all.deep.members([
            { Name: 'Bob', Age: 17 },
            { Name: 'Daniel', Age: 33 },
            { Name: 'Clara', Age: 41 },
            { Name: 'Ann', Age: 15 },
            { Name: 'John', Age: 36 },
            { Name: 'Jane', Age: 31 },
            { Name: 'Jack', Age: 70 },
            { Name: 'Sara', Age: 7 }
        ]);
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
        expect(arr).to.be.an('array');
        expect(arr).to.have.lengthOf(7);
        expect(arr).to.have.all.deep.members([
            [-1, 7],
            [11, 0],
            [7, 5],
            [9, -8],
            [7, 4],
            [33, -21],
            [22, 23]
        ]);
        expect(arr).to.be.sorted((a, b) => b[0] - a[0]);
    });
    it('#10. The passed string was sorted in alphabetic order and returned', function () {
        const str = quickSort('Hello, sorting!', (a, b) => a.localeCompare(b));
        expect(str).to.be.a('string');
        expect(str).to.have.lengthOf(15);
        expect(str.split('')).to.have.all.deep.members('Hello, sorting!'.split(''));
        expect(str.split('')).to.be.sorted((a, b) => a.localeCompare(b));
    });
    it('#11. An array of strings sorted in descending order (reverse alphabetic)', function () {
        const arr = quickSort(['elephant', 'cat', 'dog', 'mouse', 'parrot'],
            (a, b) => b.localeCompare(a));
        expect(arr).to.be.an('array');
        expect(arr).to.have.lengthOf(5);
        expect(arr).to.have.all.members(['elephant', 'cat', 'dog', 'mouse', 'parrot']);
        expect(arr).to.be.sorted((a, b) => b.localeCompare(a));
    });
    it('#12. The input array isn\'t changed after sorting', function () {
        let input = [34, -20, 9, 8, 5, 45, 27, -2, 4, 5, 7, -2, 27];
        quickSort(input);
        expect(input).to.have.lengthOf(13);
        expect(input).to.deep.equal([34, -20, 9, 8, 5, 45, 27, -2, 4, 5, 7, -2, 27])
    });
    // extreme cases
    it('#13. The comparer function is not specified in attributes. In this case,\n\tthe input array sorted in ascending order by default', function () {
        const arr = quickSort([8, 9, 20, 15, 10, 6, 5, 8, 7, 6, 57, 8, 17, 8]);
        expect(arr).to.be.an('array');
        expect(arr).to.have.lengthOf(14);
        expect(arr).to.have.all.members([8, 9, 20, 15, 10, 6, 5, 8, 7, 6, 57, 8, 17, 8]);
        expect(arr).to.be.sorted((a, b) => a - b);
    });
    it('#14. The comparer function is not specified in attributes. In this case,\n\tthe input string sorted in alphabetic order by default', function () {
        const str = quickSort('lorem ipsum dolor sit amet');
        expect(str).to.be.a('string');
        expect(str).to.have.lengthOf(26);
        expect(str.split('')).to.have.all.deep.members('lorem ipsum dolor sit amet'.split(''));
        expect(str.split('')).to.be.sorted((a, b) => a.localeCompare(b));
    });
    it('#15. The comparer function is not specified in attributes. In this case,\n\t2d array can\'t be sorted because compare function doesn\'t know how so \n\tquickSort() throws TypeError', function () {
        const arr = [
            [50, 86],
            [77, 2],
            [90, 8],
            [7, 8],
            [1, 2],
            [13, 8],
            [2, 10],
            [33, 24]
        ];
        expect(quickSort.bind(null, arr)).to.throw(TypeError);
    });
    it('#16. The comparer function is not specified in attributes. In this case,\n\tarray of objects can\'t be sorted because compare function doesn\'t know\n\thow so quickSort() throws TypeError', function () {
        const arr = quickSort([
            { Name: 'Bob', Age: 17 },
            { Name: 'Daniel', Age: 33 },
            { Name: 'Clara', Age: 41 },
            { Name: 'Ann', Age: 15 },
            { Name: 'John', Age: 36 },
            { Name: 'Jane', Age: 31 },
            { Name: 'Jack', Age: 70 },
            { Name: 'Sara', Age: 7 }
        ]);
        // Bug - chai doesn't catch an error has thrown: https://github.com/chaijs/chai/issues/1414
        expect(quickSort.bind(null, arr)).to.throw(TypeError); 
    });
    it('#17. The quickSort function is called without any attributes. In this\n\tcase, it should throw a TypeError', function () {
        expect(quickSort.bind(null)).to.throw(TypeError);
    });
    it('#18. The quickSort function is called with undefined. In this case, it\n\tshould throw a TypeError', function () {
        expect(quickSort.bind(null, undefined)).to.throw(TypeError);
    });
    it('#19. The quickSort function is called with Null. In this case, it should\n\tthrow a TypeError', function () {
        expect(quickSort.bind(null, null)).to.throw(TypeError);
    });
    it('#20. The quickSort function is called with NaN. In this case, it should\n\tthrow a TypeError', function () {
        expect(quickSort.bind(null, NaN)).to.throw(TypeError);
    });
    it('#21. The quickSort function is called with []. In this case, it should\n\treturn []', function () {
        const arr = quickSort([]);
        expect(arr).to.deep.equal([]);
    });
    it("#22. The quickSort function is called with ''. In this case, it should\n\treturn ''", function () {
        const str = quickSort('');
        expect(str).to.deep.equal('');
    });
    it('#23. The quickSort function is called called for array with length 1. In\n\tthis case, it should return this array', function () {
        const arr = quickSort([5]);
        expect(arr).to.have.lengthOf(1);
        expect(arr).to.deep.equal([5]);
    });
});