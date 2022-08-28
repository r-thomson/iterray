Versions of `Array.prototype` methods that work on iterables/iterators.

## Why Should You Use This?

You may wonder what advantage this collection has over calling `Array.from(...)` and using `Array` methods directly. The main distinction is that these work lazily, which in some cases can be more efficient. For example, consider this hypothetical function which filters an array of data by some condition (say, a search field) and show the first 20 results.

```js
const data = [/* a quite long array */];

function getVisibleData() {
    return data.filter(item => shouldBeVisible(item)).slice(0, 20);
}
```

You end up doing some unnecessary work, since `shouldBeVisible()` gets called on the entire array, even though we could stop after getting 20 `true`s. Compare that to the iterator-based solution, which only performs the work that's needed.

```js
const data = [/* a quite long array */];

function getVisibleData() {
    return Array.from(iterSlice(iterFilter(data, item => shouldBeVisible(item)), 0, 20));
}
```

## What Functions Are Included?

As a general rule, an `Array.prototype` function won't be included if:

* It's functionally equivalent to `[...iterable].whatever()` (e.g. `.forEach()`)
* It's impossible (e.g. `.sort()`)
* It's experimental (e.g. `.group()`)
* It's just not useful (e.g. `.values()`)

Here's what's currently included:

* ~~`.at()`~~
* `.concat()` ✓
* `.copyWithin()` ✗
* `.entries()` ✓
* `.every()` ✗
* `.fill()` ✗
* `.filter()` ✓
* `.find()` ✗
* `.findIndex()` ✗
* ~~`.findLast()`~~
* ~~`.findLastIndex()`~~
* `.flat()` ✓
* `.flatMap()` ✗
* ~~`.forEach()`~~
* `.includes()` ✗
* `.indexOf()` ✗
* ~~`.join()`~~
* `.keys()` ✓
* ~~`.lastIndexOf()`~~
* `.map()` ✓
* ~~`.pop()`~~
* ~~`.push()`~~
* ~~`.reduce()`~~
* ~~`.reduceRight()`~~
* ~~`.reverse()`~~
* ~~`.shift()`~~
* `.slice()` ✓
* `.some()` ✗
* ~~`.sort()`~~
* `.splice()` ✗
* ~~`.unshift()`~~
* ~~`.values()`~~
