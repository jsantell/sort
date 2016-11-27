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
 * as selection sort has O(n) swaps -- although, in that case, cycle sort may be better as it has
 * the minimal possible about of writes and has the same runtime at O(n^2).
 *
 * Bad for large arrays, and most scenarios, as other simple sorts are usually better, as insertion sort
 * has the same average and worst case runtime O(n^2), but runs at close to O(n) when sorting an
 * almost sorted array.
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
