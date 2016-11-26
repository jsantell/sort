import { swap } from './utils';

/**
 * Cycle Sort
 *
 * Worst-case:       O(n^2)
 * Average-case:     O(n^2)
 * Best-case:        O(n^2)
 * Space complexity: O(n)
 *
 * A slow sort, but good for minimizing the number of writes done. Each element is moved either
 * 0 times (already in place) or once (to its final sorting place), so the most optimal in-place
 * writing sort; useful when writing is expensive.
 */

export default function cycleSort (array) {
  // Store writes for debugging purposes
  let writes = 0;

  for (let cycleStart = 0; cycleStart < array.length - 1; cycleStart++) {

    let position = findCycle(array, cycleStart);

    if (position === -1) {
      continue;
    }

    writes++;
    swap(array, cycleStart, position);

    // Rotate the rest of the cycle
    while (position !== cycleStart) {
      position = findCycle(array, cycleStart);
      if (position === -1) {
        break;
      }

      writes++;
      swap(array, cycleStart, position);
    }
  }

  return array;
}

function findCycle (array, cycleStart) {
  const item = array[cycleStart];
  let position = cycleStart;

  // Find where to put the item
  for (let i = cycleStart + 1; i < array.length; i++) {
    if (array[i] < item) {
      position++;
    }
  }

  // If item already there, this is not a cycle
  if (position === cycleStart) {
    return -1;
  }

  // So now we put the item in place, after iterating
  // over any potential duplicates
  while (item === array[position]) {
    position++;
  }

  return position;
}
