/**
 * Radix Sort
 *
 * Worst-case:       O(n*k) (where n is the number of keys, and k the max word size
 * Average-case:     O(n*k)
 * Best-case:        O(n*k)
 * Space complexity: O(n)
 *
 * Radix sort is a sort run on fixed-length strings, or integers, where `k` is the word length for strings,
 * or the digit count of integers. If all `n` values are unique, then `k` must be atleast `log n`.
 * Example: if n=10000 of unique items (1-10000), then `log n` == log(10, 256) == 5, or 5
 * digits for `k=5`.
 *
 * If `k` is considered a constant because it's far less than `log n`, then we can get O(n)
 * performance, so radix sort is useful for small `k` compared to `n`. Otherwise, more generalized sorts
 * like Quick Sort can get more realiable and average runtimes of O(n log n).
 */

export default function radixSort (array) {

  let isSorted = false;
  let powerOfTen = 0;

  while (!isSorted) {
    const tenToTheNth = Math.pow(10, powerOfTen);
    const tenToTheNthPlusOne = Math.pow(10, powerOfTen + 1);

    const buckets = fillBuckets(array, val => Math.floor(val % tenToTheNthPlusOne / tenToTheNth));
    isSorted = mergeBuckets(array, buckets);
    powerOfTen++;
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
