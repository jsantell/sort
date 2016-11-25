
export function isSorted (array) {
  let lastValue = Number.NEGATIVE_INFINITY;
  for (const value of array) {
    if (!Number.isInteger(value) || value < lastValue) {
      return false;
    }
    lastValue = value;
  }
  return true;
}
