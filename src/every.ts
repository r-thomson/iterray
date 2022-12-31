import iterEntries from './entries.js';

/**
 * Determines if every value in an iterable satisfies a given condition.
 *
 * @param iterable - Source iterable.
 * @param callbackFn - Predicate function.
 * @param thisArg - Used as `this` for each invocation of `callbackFn`.
 * @returns If all values in `iterable` satisfy `callbackFn`.
 * @see Array.prototype.every
 */
export default function <T>(
	iterable: Iterable<T>,
	callbackFn: (element: T, index: number, iterable: Iterable<T>) => unknown,
	thisArg = undefined
): boolean {
	for (const [i, value] of iterEntries(iterable)) {
		if (!callbackFn.call(thisArg, value, i, iterable)) {
			return false;
		}
	}

	return true;
}
