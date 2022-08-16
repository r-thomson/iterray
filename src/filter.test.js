import test from 'tape';

import iterFilter from './filter.js';

for (const [input, callbackFn, thisArg] of [
    [[], () => true],
    [[], () => false],
    [[1, 2, 3], () => true],
    [[1, 2, 3], () => false],
    [[1, 2, 3], () => 1],
    [[1, 2, 3], () => ''],
    [[1, 2, 3], () => undefined],
    [[1, 2, 3], (x) => x > 1],
    [[1, 2, 3], (_, i) => i > 0],
    [[1, 2, 3], function() { return this; }, true],
    [[1, 2, 3], function() { return this; }, false],
]) {
    test('equivalent to Array.prototype.filter', async t => {
        const actual = Array.from(iterFilter(input.values(), callbackFn, thisArg));
        const expected = input.filter(callbackFn, thisArg);

        t.deepEqual(actual, expected);
    });
}

test('throws TypeError if callback is not a function', async t => {
    t.throws(() => {
        Array.from(iterFilter([], 'not a function'));
    }, TypeError);
});
