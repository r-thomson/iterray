import iterEntries from './entries.js';

/**
 * Returns the index of the first value in an iterable matching the predicate.
 *
 * @param iterable - Source iterable.
 * @param callbackFn - Predicate function.
 * @param thisArg - Used as `this` for each invocation of `callbackFn`.
 * @returns Index of the first value in `iterable` matching `callbackFn`.
 * @see Array.prototype.findIndex
 */
export default function <T>(
	iterable: Iterable<T>,
	callbackFn: (value: T, index: number, iterable: Iterable<T>) => unknown,
	thisArg = undefined
): number {
	if (typeof callbackFn !== 'function') {
		throw TypeError(`${callbackFn} is not a function`);
	}

	for (const [i, value] of iterEntries(iterable)) {
		if (callbackFn.call(thisArg, value, i, iterable)) {
			return i;
		}
	}

	return -1;
}
