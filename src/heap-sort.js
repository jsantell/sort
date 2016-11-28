import { swap } from './utils';

/**
 * Heap Sort
 *
 * Worst-case:       O(n log n)
 * Average-case:     O(n log n)
 * Best-case:        O(n log n)
 * Space complexity: O(n) or O(1)¹
 *
 * Takes O(n) time to build the heap and grabs the min/max from the heap `n` times, each causing a `log n`
 * operation, resulting in O(n log n) sort time.
 *
 * Similar to its O(n log n) sorting kin, although usually a well-implemented quick sort
 * performs better, but heap sort has a better average runtime compared to quick sort's O(n^2) worst
 * case.
 *
 * ¹ If the heap uses the input array as it's data structure, then the space complexity
 * is O(1) auxilary. Otherwise if a new heap data structure has to be generated, then the
 * space complexity is O(n).
 */

export default function heapSort(array) {
  let heapSize = array.length - 1;

  // Build heap
  for (let i = Math.floor(array.length / 2); i >= 0; i--) {
    satisfyHeap(array, i, heapSize);
  }

  // Perform `n` operations, moving elements from the heap to their place
  // in the array at the end, each call occurring an O(log n) operation.
  for (let i = heapSize; i >= 0; i--) {
    swap(array, 0, heapSize);
    heapSize--;
    satisfyHeap(array, 0, heapSize);
  }

  function satisfyHeap (array, i, heapSize) {
    let l = 2 * i;
    let r = 2 * i + 1;
    let largest;

    if (l <= heapSize && array[l] > array[i]) {
      largest = l;
    } else {
      largest = i;
    }

    if (r <= heapSize && array[r] > array[largest]) {
      largest = r;
    }

    if (largest !== i) {
      swap(array, i, largest);
      satisfyHeap(array, largest, heapSize);
    }
  }

  return array;
}
