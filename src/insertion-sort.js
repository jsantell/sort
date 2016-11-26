import { swap } from './utils';

/**
 * Insertion Sort
 *
 * Worst-case:       O(n^2)
 * Average-case:     O(n^2)
 * Best-case:        O(n)
 * Space complexity: O(1)
 *
 * Good for small arrays, better than Selection Sort when data is mostly sorted.
 *
 * Bad for large arrays, when writing to memory is expensive (n^2 swaps compared to Selection Sort's
 * n swaps).
 */

export default function insertionSort(array) {

  for (let i = 1; i < array.length; i++) {
    for (let j = i; j > 0; j--) {
      if (array[j] < array[j - 1]) {
        swap(array, j, j - 1);
      }
    }
  }

  return array;
}
