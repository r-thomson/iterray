import test from 'tape';

import iterKeys from './keys.js';

for (const input of [
    [],
    ['a'],
    ['a', 'b', 'c'],
    ['a', 1, false, null, undefined],
    ['a', , 'c', , , 'f'],
]) {
    test('equivalent to Array.prototype.keys', async t => {
        const actual = Array.from(iterKeys(input));
        const expected = Array.from(input.keys());

        t.deepEqual(actual, expected);
    });
}
