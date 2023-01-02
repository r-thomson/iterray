import test from 'tape';

import iterIncludes from './includes.js';

for (const [iterable, searchElement, fromIndex] of <Parameters<typeof iterIncludes>[]>[
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
		const actual = iterIncludes(iterable, searchElement, fromIndex);
		const expected = Array.from(iterable).includes(searchElement, fromIndex);

		t.equal(actual, expected);
	});
}

test('throws RangeError if fromIndex is negative', async (t) => {
	t.throws(() => {
		iterIncludes([], undefined, -1);
	}, RangeError);
});
