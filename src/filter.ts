import iterEntries from './entries.js';

/**
 * Removes values from the iterable that do not match the predicate.
 *
 * @param iterable - Source iterable.
 * @param callbackFn - Predicate function.
 * @param thisArg - Used as `this` for each invocation of `callbackFn`.
 * @yields Values of `iterable` matching `callbackFn`.
 * @see Array.prototype.filter
 */
export default function* <T>(
	iterable: Iterable<T>,
	callbackFn: (value: T, index: number, iterable: Iterable<T>) => unknown,
	thisArg = undefined
): IterableIterator<T> {
	if (typeof callbackFn !== 'function') {
		throw TypeError(`${callbackFn} is not a function`);
	}

	for (const [i, value] of iterEntries(iterable)) {
		if (callbackFn.call(thisArg, value, i, iterable)) {
			yield value;
		}
	}
}
