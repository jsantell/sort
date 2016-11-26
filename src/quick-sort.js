import { swap } from './utils';

/**
 * Quick Sort
 *
 * Worst-case:       O(n^2)
 * Average-case:     O(n log n)
 * Best-case:        O(n log n) (O(n) in some optimized/good pivot selection)
 * Space complexity: O(log n) (in-place variant)
 *
 * Good for large arrays, and often implemented faster in constant values to its O(n log n) kin,
 * like merge sort, except when the array is almost sorted and the pivot is taken from an end, for example.
 * If swapping is expensive, consider merge sort (if data is a linked-list, for example).
 */

export default function quickSort (array, start=0, end=array.length - 1) {
  if (start < end) {
    const p = partition(array, start, end);
    quickSort(array, start, p - 1);
    quickSort(array, p + 1, end);
  }
  return array;
}

function partition (array, start, end) {
  // Picking a pivot point at the end results in O(n^2) runtime when the array is already
  // sorted or almost sorted.
  // Using Lomuto's partition scheme.
  const pivotValue = array[end];
  let pivotIndex = start;
  for (let i = pivotIndex; i <= end - 1; i++) {
    if (array[i] <= pivotValue) {
      swap(array, i, pivotIndex);
      pivotIndex++;
    }
  }
  swap(array, pivotIndex, end);

  return pivotIndex;
}
