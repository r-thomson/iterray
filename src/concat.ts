/**
 * Joins multiple iterables together, producing values from each in sequence.
 *
 * @param iterables - Source iterables.
 * @yields Values from `iterables` in the order they were provided.
 * @see Array.prototype.concat
 */
export default function* <T>(...iterables: Iterable<T>[]): IterableIterator<T> {
	for (const iter of iterables) {
		yield* iter;
	}
}
