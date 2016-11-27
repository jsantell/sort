/**
 * Counting Sort
 *
 * Worst-case:       O(n + k)
 * Average-case:     O(n + k)
 * Best-case:        O(n + k)
 * Space complexity: O(k)
 *
 * Good for sorting a range of integers, where `k` is a number such that all keys are between 0 and k.
 * Takes up minimal extra space (essentially storing a histogram of integers).
 */

export default function countingSort (array) {
  let max = Number.NEGATIVE_INFINITY;
  for (let val of array) {
    if (val > max) max = val;
  }

  const histogram = [];

  for (let val of array) {
    histogram[val] = (histogram[val] || 0) + 1;
  }

  let total = 0;
  for (let i = 0; i <= max; i++) {
    if (histogram[i]) {
      let temp = histogram[i];
      histogram[i] = total;
      total += temp;
    }
  }

  // TODO This implementation, unliked the other sorts here, is non-destructive
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output[histogram[array[i]]] = array[i];
    histogram[array[i]] += 1;
  }

  return output;
}
