/**
 * Keeps a portion of the source iterable while discaring the rest. Unlike
 * `Array.prototype.slice`, negative (end-relative) slicing is not supported.
 *
 * Note that the source iterator will remain open when this function exits if
 * it hasn't already been exhausted.
 *
 * @template T
 * @param {Iterable<T>} iterable Source iterable.
 * @param {number} [start] Index of the first value to keep.
 * @param {number} [end] Index of the value to stop at.
 * @yields {T} Values from the source iterable.
 * @see Array.prototype.slice
 */
export default function* (iterable, start = 0, end = undefined) {
    if (start < 0 || end < 0) {
        throw RangeError('Slice indices must be non-negative');
    }

    const iterator = iterable[Symbol.iterator]();
    for (let i = 0; end === undefined || i < end; i++) {
        const { value, done } = iterator.next();

        if (done) {
            return;
        } else if (start <= i) {
            yield value;
        }
    }
}
