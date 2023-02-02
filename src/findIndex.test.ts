import test from 'tape';

import iterFindIndex from './findIndex.js';

for (const [iterable, callbackFn, thisArg] of <Parameters<typeof iterFindIndex>[]>[
	[[], () => true],
	[[], () => false],
	[[1, 2, 3], () => true],
	[[1, 2, 3], () => false],
	[[1, 2, 3], () => 1],
	[[1, 2, 3], () => ''],
	[[1, 2, 3], () => undefined],
	[[1, 2, 3], (x: number) => x > 1],
	[[1, 2, 3], (_, i) => i > 0],
]) {
	test('equivalent to Array.prototype.findIndex', async (t) => {
		const actual = iterFindIndex(iterable, callbackFn, thisArg);
		const expected = Array.from(iterable).findIndex(callbackFn, thisArg);

		t.deepEqual(actual, expected);
	});
}

test('throws TypeError if callback is not a function', async (t) => {
	t.throws(() => {
		iterFindIndex([], 'not a function' as any);
	}, TypeError);
});
