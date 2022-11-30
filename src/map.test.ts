import test from 'tape';

import iterMap from './map.js';

for (const [input, callbackFn, thisArg] of <Parameters<typeof iterMap>[]>[
	[[], () => {}],
	[[1], (x: number) => x + 2],
	[[1, 2, 3], () => {}],
	[[1, 2, 3], (x: number) => x * 2],
	[[1, 2, 3], (x: number, i: number) => x + i],
	[['a', 'b', 'c'], (x: string) => x.toUpperCase()],
	[[1, 2, 3], function(this: number, x: number) { return x * this }, 2],
]) {
	test('equivalent to Array.prototype.map', async t => {
		const actual = Array.from(iterMap(input, callbackFn, thisArg));
		const expected = Array.from(input).map(callbackFn, thisArg);

		t.deepEqual(actual, expected);
	});
}

test('throws TypeError if callback is not a function', async t => {
	t.throws(() => {
		Array.from(iterMap([], 'not a function' as any));
	}, TypeError);
});
