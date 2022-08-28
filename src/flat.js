const isIterable = (x) => x && typeof x[Symbol.iterator] === 'function';

/**
 * Flatten the given iterable up to a specified depth.
 *
 * Note that any sub-element that implements the interator protocol is
 * eligible for recusirve flattening (arrays, strings, etc).
 *
 * @param {Iterable} iterable Source iterable.
 * @param {Number} depth Number of levels to flatten.
 * @yields {any} Values from the source after flattening.
 * @see Array.prototype.flat
 */
export default function* flat (iterable, depth = 1) {
    for (const value of iterable) {
        if (depth > 0 && isIterable(value)) {
            yield* flat(value, depth - 1);
        } else {
            yield value;
        }
    }
}
