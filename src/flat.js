const isIterable = (x) => x && typeof x[Symbol.iterator] === 'function';

export default function* flat (iterable, depth = 1) {
    for (const value of iterable) {
        if (depth > 0 && isIterable(value)) {
            yield* flat(value, depth - 1);
        } else {
            yield value;
        }
    }
}
