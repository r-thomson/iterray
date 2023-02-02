import test from 'tape';

import iterFind from './find.js';

for (const [iterable, callbackFn, thisArg] of <Parameters<typeof iterFind>[]>[
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
	test('equivalent to Array.prototype.find', async (t) => {
		const actual = iterFind(iterable, callbackFn, thisArg);
		const expected = Array.from(iterable).find(callbackFn, thisArg);

		t.deepEqual(actual, expected);
	});
}

test('throws TypeError if callback is not a function', async (t) => {
	t.throws(() => {
		iterFind([], 'not a function' as any);
	}, TypeError);
});
