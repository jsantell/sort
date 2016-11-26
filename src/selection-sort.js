import { swap } from './utils';

/**
 * Selection Sort
 *
 * Worst-case:       O(n^2)
 * Average-case:     O(n^2)
 * Best-case:        O(n^2)
 * Space complexity: O(1)
 *
 * Good for small arrays, most other simple sorts are better unless writing to memory is expensive,
 * as selection sort has O(n) swaps.
 *
 * Bad for large arrays, and most scenarios, as other simple sorts are usually better.
 */

export default function selectionSort(array) {

  for (let i = 0; i < array.length; i++) {
    let min = Number.POSITIVE_INFINITY;
    let minIndex = -1;
    for (let j = i; j < array.length; j++) {
      if (array[j] <= min) {
        min = array[j];
        minIndex = j;
      }
    }

    swap(array, minIndex, i);
 }

  return array;
}
