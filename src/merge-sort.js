/**
 * Merge Sort
 *
 * Worst-case:       O(n log n)
 * Average-case:     O(n log n)
 * Best-case:        O(n log n)
 * Space complexity: O(n)
 *
 * Good for large arrays, and compared to its O(n log n) kin, and handling slow-to-access data, like
 * linked lists (which would then only require O(1) extra space).
 *
 * Bad for small arrays (use a O(n^2) sort for that), and generally outperformed by quicksort, with
 * heapsort having similar performance, but ensuring only O(1) space complexity.
 */

export default function mergeSort(array) {
  // List is considered sorted that have 0 or 1 elements.
  if (array.length <= 1) {
    return array;
  }

  // A list is considered sorted if all its elements
  // are equal as well.
  if (array.every(n => n === array[0])) {
    return array;
  }

  const pivot = Math.floor(array.length / 2);
  let left = [];
  let right = [];

  for (let i = 0; i < array.length; i++) {
    if (i < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  left = mergeSort(left);
  right = mergeSort(right);

  return merge(left, right);
}

function merge (left, right) {
  const merged = [];

  while (left.length || right.length) {
    if (left.length === 0 || right[0] < left[0]) {
      merged.push(right.shift())
    } else {
      merged.push(left.shift())
    }
  }

  return merged;
}
