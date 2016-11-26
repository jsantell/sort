/**
 * Radix Sort
 *
 * Worst-case:       O(n*k) (where n is the number of keys, and k the max word size
 * Average-case:     O(n*k)
 * Best-case:        O(n*k)
 * Space complexity: O(n * k) (worst case)
 *
 * As a runtime of O(n*k), `k` can sometimes be considered a constant, but if all `n` are distinct, then `k`
 * at best can be log n, resulting in O(n log n).
 *
 * Radix sort is good to use for small amounts of `k` (fixed integer lengths, capped word length, etc.),
 * when `k` is less than `log n` -- otherwise, sorts like Quick Sort are more general and appropriate with
 * average case of O(n log n), using less space complexity and a less specific sort.
 */

export default function radixSort (array) {

  let isSorted = false;
  let powerOfTen = 0;

  while (!isSorted) {
    const buckets = fillBuckets(array, val => {
      return ~~(val / (Math.pow(10, powerOfTen)) % 10);
    });
    powerOfTen++;
    isSorted = mergeBuckets(array, buckets);
  }

  function fillBuckets (array, hash) {
    const buckets = [];
    for (let i = 0; i < array.length; i++) {
      const value = array[i];
      const bucketIndex = hash(value);
      const bucket = buckets[bucketIndex] = buckets[bucketIndex] || [];
      bucket.push(value);
    }
    return buckets;
  }

  function mergeBuckets (array, buckets) {
    let i = 0;
    let lastVal = Number.NEGATIVE_INFINITY;
    let isSorted = true;

    for (const bucket of buckets) {
      if (!bucket) {
        continue;
      }
      for (const value of bucket) {
        if (value < lastVal) {
          isSorted = false;
        }
        lastVal = array[i++] = value;
      }
    }
    return isSorted;
  }

  return array;
}
