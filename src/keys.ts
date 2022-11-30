/**
 * Produces a zero-based index for each element in the source iterable.
 *
 * @param iterable - Source iterable.
 * @yields Incrementing integers starting at zero.
 * @see Array.prototype.keys
 */
export default function* <T>(iterable: Iterable<T>): IterableIterator<Number> {
	let i = 0;
	for (const _ of iterable) {
		yield i;
		i += 1;
	}
}
