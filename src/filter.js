import iterEntries from './entries.js';

/**
 * Removes values from the iterable that do not match the predicate.
 *
 * @template T
 * @param {Iterable<T>} iterable Source iterable.
 * @param {function(T, number, Iterable<T>): any} callbackFn Predicate function.
 * @param {any} [thisArg] Used as `this` for each invocation of `callbackFn`.
 * @yields {T} Values of `iterable` matching `callbackFn`.
 * @see Array.prototype.filter
 */
export default function* (iterable, callbackFn, thisArg = undefined) {
    if (typeof callbackFn !== 'function') {
        throw TypeError(`${callbackFn} is not a function`);
    }

    for (const [i, value] of iterEntries(iterable)) {
        if (callbackFn.call(thisArg, value, i, iterable)) {
            yield value;
        }
    }
}
