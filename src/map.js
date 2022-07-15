import iterEntries from './entries.js';

/**
 * Creates a new iterable with the result of applying a function to values in the source.
 *
 * @template T,U
 * @param {Iterable<T>} iterable Source iterable.
 * @param {function(T, number, Iterable<T>): U} callbackFn Mapping function.
 * @param {any} [thisArg] Value to use as `this` in the `callbackFn` function.
 * @yields {U} Values returned by `callbackFn`.
 * @see Array.prototype.map
 */
export default function* (iterable, callbackFn, thisArg = undefined) {
    if (typeof callbackFn !== 'function') {
        throw TypeError(`${callbackFn} is not a function`);
    }

    for (const [i, value] of iterEntries(iterable)) {
        yield callbackFn.call(thisArg, value, i, iterable);
    }
}
