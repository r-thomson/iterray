import test from 'tape';

import iterIndexOf from './indexOf.js';

for (const [iterable, searchElement, fromIndex] of <Parameters<typeof iterIndexOf>[]>[
	[[], 0, undefined],
	[[1, 2, 3], 2],
	[[1, 2, 3], 4],
	[[1, 2, 3], 1, 0],
	[[1, 2, 3], 2, 2],
	[[1, 2, 3], 2, 3],
	[['a', 'b', 'c'], 'b'],
	[[1, 2, 3], '2'],
]) {
	test('equivalent to Array.prototype.indexOf', async (t) => {
		const actual = iterIndexOf(iterable, searchElement, fromIndex);
		const expected = Array.from(iterable).indexOf(searchElement, fromIndex);

		t.equal(actual, expected);
	});
}

test('throws RangeError if fromIndex is negative', async (t) => {
	t.throws(() => {
		iterIndexOf([], undefined, -1);
	}, RangeError);
});
