import test from 'tape';

import iterSlice from './slice.js';

for (const [input, start, end] of <Parameters<typeof iterSlice>[]>[
	[[]],
	[[1, 2, 3]],
	[[1, 2, 3], 0],
	[[1, 2, 3], 1],
	[[1, 2, 3], 0, 2],
	[[1, 2, 3], 0, 3],
	[[1, 2, 3], 2, 2],
	[[1, 2, 3], 4, 0],
	[[1, 2, 3], 0, 4],
	[[1, 2, 3], 4, 4],
]) {
	test('equivalent to Array.prototype.slice', async t => {
		const actual = Array.from(iterSlice(input, start, end));
		const expected = Array.from(input).slice(start, end);

		t.deepEqual(actual, expected);
	});
}

test('does not close iterable', async t => {
	const iterable = [1, 2, 3, 4, 5].values();
	const sliced = iterSlice(iterable, 1, 3);

	Array.from(sliced);
	t.deepEquals(Array.from(iterable), [4, 5]);
});

test('throws RangeError if start is negative', async t => {
	t.throws(() => {
		Array.from(iterSlice([], -1));
	}, RangeError);
});

test('throws RangeError if end is negative', async t => {
	t.throws(() => {
		Array.from(iterSlice([], 0, -1));
	}, RangeError);
});
