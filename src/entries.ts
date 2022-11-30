/**
 * Produces `[index, value]` pairs for each value in an iterable. The index
 * will always start at 0.
 *
 * @param iterable - Source iterable.
 * @yields Incrementing integers starting at zero, and the original value
 *  from the source iterable.
 * @see Array.prototype.entries
 */
export default function* <T>(iterable: Iterable<T>): IterableIterator<[number, T]> {
	let i = 0;
	for (const value of iterable) {
		yield [i, value];
		i += 1;
	}
}
