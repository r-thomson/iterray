import test from 'tape';

import iterMap from './map.js';

for (const [input, callbackFn, thisArg] of [
    [[], () => {}],
    [[1], (x) => x + 2],
    [[1, 2, 3], () => {}],
    [[1, 2, 3], (x) => x * 2],
    [[1, 2, 3], (x, i) => x + i],
    [['a', 'b', 'c'], (x) => x.toUpperCase()],
    [[1, 2, 3], function(x) { return x * this }, 2],
]) {
    test('equivalent to Array.prototype.map', async t => {
        const actual = Array.from(iterMap(input, callbackFn, thisArg));
        const expected = input.map(callbackFn, thisArg);

        t.deepEqual(actual, expected);
    });
}

test('throws TypeError if callback is not a function', async t => {
    t.throws(() => {
        Array.from(iterMap([], 'not a function'));
    }, TypeError);
});
