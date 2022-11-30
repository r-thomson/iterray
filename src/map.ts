import iterEntries from './entries.js';

/**
 Creates a new iterable with the result of applying a function to values in the source.
 *
 * @param iterable - Source iterable.
 * @param callbackFn - Mapping function.
 * @param thisArg - Value to use as `this` in the `callbackFn` function.
 * @yields Values returned by `callbackFn`.
 * @see Array.prototype.map
 */
export default function* <T extends Iterable<V>, U, V>(
	iterable: T,
	callbackFn: (value: V, index: number, iterable: T) => U,
	thisArg = undefined
): IterableIterator<U> {
	if (typeof callbackFn !== 'function') {
		throw TypeError(`${callbackFn} is not a function`);
	}

	for (const [i, value] of iterEntries(iterable)) {
		yield callbackFn.call(thisArg, value, i, iterable);
	}
}
