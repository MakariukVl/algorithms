/* eslint-disable no-undef */
import chai from 'chai';
import chaiArrays from 'chai-arrays';
import { quickSort } from '../src/quickSort.js';

const expect = chai.expect;
chai.use(chaiArrays);

describe('Random tests for quickSort function', function () {

    const MAX = 100; // max number of iterations for random tests

    for (let i = 0; i < MAX; i++) {

        it(`#${i + 1}. Random test for quickSort`, function () {

            let input = randomArray();
            let cmp = randomComparer();

            const arr = quickSort(input, cmp);

            expect(arr).to.have.lengthOf(input.length);
            expect(arr).to.have.all.members(input);
            expect(arr).to.be.sorted(cmp);
        });
    }

    function randomArray() {
        let randomArr = [];
        let length = Math.random().toString().slice(17) || 1;

        for (let j = 0; j < length; j++) {
            let val = new Number(
                Math.random().toString().slice(16)) || 0;
            randomArr.push(val);
        }

        return randomArr;
    }

    function randomComparer() {
        return Number(Math.random().toString().slice(16)) % 2 === 0
            ? (a, b) => a - b
            : (a, b) => b - a;
    }
});