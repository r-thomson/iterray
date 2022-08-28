import test from 'tape';

import iterFlat from './flat.js';

for (const [input, depth] of [
    [[]],
    [[1, [2, [3]]]],
    [[1, [2, [3]]], 1],
    [[1, [2, [3]]], 2],
    [[1, [2, [3]]], Infinity],
    [[1, [2, [3]]], -Infinity],
    [[[[1]]], 2],
    [[[[]]], 1],
    [[[[]]], 2],
    [[[[]]], Infinity],
]) {
    test('equivalent to Array.prototype.flat', async t => {
        const actual = Array.from(iterFlat(input, depth));
        const expected = input.flat(depth);

        t.deepEqual(actual, expected);
    });
}
