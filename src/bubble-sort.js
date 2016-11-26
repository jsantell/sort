import { swap } from './utils';

/**
 * Bubble Sort
 *
 * Worst-case:       O(n^2)
 * Average-case:     O(n^2)
 * Best-case:        O(n^2)
 * Space complexity: O(1)
 *
 * Good for arrays that are already sorted (?!) as it can detect presorted lists as its built in,
 * running in O(n), but insertion sort also has this feature and tends to be faster with less swaps.
 * Pretty much there's not much use in using this.
 *
 * Bad for large arrays, and out performed by almost all other sorting methods.
 */

export default function bubbleSort(array) {

  function bubble () {
    let arrayIsSorted = true;
    for (let i = 1; i < array.length; i++) {
      if (array[i] < array[i - 1]) {
        arrayIsSorted = false;
        swap(array, i, i - 1);
      }
    }
    return arrayIsSorted;
  }

  while (!bubble()) {}

  return array;
}
