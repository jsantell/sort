
export function isSorted (array) {
  let lastValue = Number.NEGATIVE_INFINITY;
  for (const value of array) {
    if (value < lastValue) {
      return false;
    }
    lastValue = value;
  }
  return true;
}
