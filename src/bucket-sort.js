import insertionSort from './insertion-sort';

/**
 * Bucket Sort
 *
 * Worst-case:       O(n^2)
 * Average-case:     O(n + k)
 * Best-case:        O(n + k)
 * Space complexity: O(n * k) (worst case)
 *
 * Good for large arrays, where the number of buckets is close to n and the values are
 * evenly distributed to achieve O(n) performance. Otherwise, the subsorting method,
 * usually a O(n^2) comparison sort, dominates the runtime.
 *
 * While good performance on evenly distributed values with a good bucket size can be achieved
 * with bucket sort, it does require more memory at O(n + k).
 */

export default function bucketSort (array) {
  // This implementation assumes an array of integers, and we find the min and max
  // to dynamically compute an optimal bucket size.
  let min = Number.POSITIVE_INFINITY;
  let max = Number.NEGATIVE_INFINITY;
  for (let val of array) {
    if (val < min) min = val;
    if (val > max) max = val;
  }
  const range = max - min;

  const buckets = [];
  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    const bucketIndex = Math.floor(value);
    const bucket = buckets[bucketIndex] = buckets[bucketIndex] || [];
    bucket.push(value);
  }

  buckets.forEach(bucket => insertionSort(bucket));

  let i = 0;
  for (const bucket of buckets) {
    if (!bucket) {
      continue;
    }
    for (const value of bucket) {
      array[i++] = value;
    }
  }

  return array;
}
