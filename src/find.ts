import iterEntries from './entries.js';

/**
 * Returns the first value in an iterable matching the predicate.
 *
 * @param iterable - Source iterable.
 * @param callbackFn - Predicate function.
 * @param thisArg - Used as `this` for each invocation of `callbackFn`.
 * @returns First value from `iterable` matching `callbackFn`.
 * @see Array.prototype.find
 */
export default function <T>(
	iterable: Iterable<T>,
	callbackFn: (value: T, index: number, iterable: Iterable<T>) => unknown,
	thisArg = undefined
): T | undefined {
	if (typeof callbackFn !== 'function') {
		throw TypeError(`${callbackFn} is not a function`);
	}

	for (const [i, value] of iterEntries(iterable)) {
		if (callbackFn.call(thisArg, value, i, iterable)) {
			return value;
		}
	}

	return undefined;
}
