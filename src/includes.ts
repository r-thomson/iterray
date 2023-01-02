import iterIndexOf from './indexOf.js';

/**
 * Determines if an iterable contains the given value.
 *
 * @param iterable - Source iterable.
 * @param searchValue - Value to search for.
 * @param fromIndex - Index to start searching.
 * @returns If `iterable` contains `searchValue`.
 * @see Array.prototype.includes
 */
export default function <T>(iterable: Iterable<T>, searchValue: T, fromIndex?: number): boolean {
	return iterIndexOf(iterable, searchValue, fromIndex) !== -1;
}
