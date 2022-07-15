/**
 * Produces `[index, value]` pairs for each value in an iterable. The index
 * will always start at 0.
 *
 * @template T
 * @param {Iterable<T>} iterable Source iterable.
 * @yields {[number, T]} Incrementing integers starting at zero, and the
 *  original value from the source iterable.
 * @see Array.prototype.entries
 */
export default function* (iterable) {
    let i = 0;
    for (const value of iterable) {
        yield [i, value];
        i += 1;
    }
}
