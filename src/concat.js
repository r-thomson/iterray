/**
 * Joins multiple iterables together, producing values from each in sequence.
 *
 * @template T
 * @param {...Iterable<T>} iterables Source iterables.
 * @yields {T} Values from `iterables` in the order they were provided.
 * @see Array.prototype.concat
 */
export default function* (...iterables) {
    for (const iter of iterables) {
        yield* iter;
    }
}
