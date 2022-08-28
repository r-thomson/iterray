import test from 'tape';

import iterConcat from './concat.js';

for (const input of [
    [[1, 2, 3]],
    [[1, 2, 3], [4, 5, 6]],
    [[1, 2, 3], [4, 5, 6], [7, 8, 9]],
    [[], [4, 5, 6]],
    [[1, 2, 3], []],
    [[1, 2, 3], [], [7, 8, 9]],
    [[]],
    [[], []],
]) {
    test('equivalent to Array.prototype.concat', async t => {
        const actual = Array.from(iterConcat(...input));
        const expected = input[0].concat(...input.slice(1));

        t.deepEqual(actual, expected);
    });
}
