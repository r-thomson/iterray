import test from 'tape';

import iterEntries from './entries.js';

for (const input of <Parameters<typeof iterEntries>[]>[
	[],
	['a'],
	['a', 'b', 'c'],
	['a', 1, false, null, undefined],
	['a', , 'c', , , 'f'],
]) {
	test('equivalent to Array.prototype.entries', async (t) => {
		const actual = Array.from(iterEntries(input));
		const expected = Array.from(input.entries());

		t.deepEqual(actual, expected);
	});
}
