import test from 'tape';

import iterEvery from './every.js';

for (const [input, callbackFn, thisArg] of <Parameters<typeof iterEvery>[]>[
	[[], () => true],
	[[], () => false],
	[[1, 2, 3], (x: number) => x > 0],
	[[1, 2, 3], (x: number) => x > 1],
	[['a', 'b', 'c'], (x: string) => x === 'a'],
	[
		[1, 2, 3],
		function (this: number, x: number) {
			this <= x;
		},
		2,
	],
]) {
	test('equivalent to Array.prototype.every', async (t) => {
		const actual = iterEvery(input, callbackFn, thisArg);
		const expected = Array.from(input).every(callbackFn, thisArg);

		t.equal(actual, expected);
	});
}
