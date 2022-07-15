/**
 * Produces a zero-based index for each element in the source iterable.
 *
 * @param {Iterable} iterable Source iterable.
 * @yields {number} Incrementing integers starting at zero.
 * @see Array.prototype.keys
 */
export default function* (iterable) {
    let i = 0;
    for (const _ of iterable) {
        yield i;
        i += 1;
    }
}
