import iterEntries from './entries.js';

/**
 * Returns the first index of a given value in an iterable.
 *
 * @param iterable - Source iterable.
 * @param searchValue - Value to search for.
 * @param fromIndex - Index to start searching.
 * @returns First index of the item, or -1 if not found.
 * @see Array.prototype.indexOf
 */
export default function <T>(iterable: Iterable<T>, searchValue: T, fromIndex?: number): number {
	if (fromIndex === undefined) {
		fromIndex = 0;
	}

	if (fromIndex < 0) {
		throw RangeError('Search index must be non-negative');
	}

	for (const [i, value] of iterEntries(iterable)) {
		if (i >= fromIndex && value === searchValue) {
			return i;
		}
	}

	return -1;
}
