import test from 'tape';

import iterSome from './some.js';

for (const [input, callbackFn, thisArg] of <Parameters<typeof iterSome>[]>[
	[[], () => true],
	[[], () => false],
	[[1, 2, 3], (x: number) => x > 0],
	[[1, 2, 3], (x: number) => x > 4],
	[['a', 'b', 'c'], (x: string) => x === 'b'],
	[
		[1, 2, 3],
		function (this: number, x: number) {
			this === x;
		},
		2,
	],
]) {
	test('equivalent to Array.prototype.some', async (t) => {
		const actual = iterSome(input, callbackFn, thisArg);
		const expected = Array.from(input).some(callbackFn, thisArg);

		t.equal(actual, expected);
	});
}
