const isIterable = (x: unknown): x is Iterable<unknown> =>
	!!x && typeof (x as any)[Symbol.iterator] === 'function';

/**
 * Flatten the given iterable up to a specified depth.
 *
 * Note that any sub-element that implements the interator protocol is
 * eligible for recusirve flattening (arrays, strings, etc).
 *
 * @param iterable - Source iterable.
 * @param depth - Number of levels to flatten.
 * @yields Values from the source after flattening.
 * @see Array.prototype.flat
 */
export default function* flat<T>(iterable: Iterable<T>, depth = 1): IterableIterator<any> {
	for (const value of iterable) {
		if (depth > 0 && isIterable(value)) {
			yield* flat(value, depth - 1);
		} else {
			yield value;
		}
	}
}
