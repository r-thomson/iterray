import iterEntries from './entries.js';

/**
 * Determines if any value in an iterable satisfies a given condition.
 *
 * @param iterable - Source iterable.
 * @param callbackFn - Predicate function.
 * @param thisArg - Used as `this` for each invocation of `callbackFn`.
 * @returns If any value in `iterable` satisfy `callbackFn`.
 * @see Array.prototype.some
 */
export default function <T>(
	iterable: Iterable<T>,
	callbackFn: (element: T, index: number, iterable: Iterable<T>) => unknown,
	thisArg = undefined
): boolean {
	for (const [i, value] of iterEntries(iterable)) {
		if (callbackFn.call(thisArg, value, i, iterable)) {
			return true;
		}
	}

	return false;
}
