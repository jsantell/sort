import nativeSort from '../src/native-sort';
import bubbleSort from '../src/bubble-sort';
import insertionSort from '../src/insertion-sort';
import selectionSort from '../src/selection-sort';
import mergeSort from '../src/merge-sort';
import quickSort from '../src/quick-sort';
import * as utils from './utils';
import { expect } from 'chai';

import ints10000 from './data/ints-10000';

function getUnsorted (size) {
  const array = size === 10000 ? ints10000 :
                size === 10 ? [4, 9, 8, 7, 3, 2, 6, 1, 0, 5] : null;
  return JSON.parse(JSON.stringify(array));
}

describe('sorts', () => {
  it('native sort sorts 10^5 integers', () => {
    expect(utils.isSorted(nativeSort(getUnsorted(10000)))).to.be.true;
  });
  it('bubble sort sorts 10^5 integers', () => {
    expect(utils.isSorted(bubbleSort(getUnsorted(10000)))).to.be.true;
  });
  it('insertion sort sorts 10^5 integers', () => {
    expect(utils.isSorted(insertionSort(getUnsorted(10000)))).to.be.true;
  });
  it('selection sort sorts 10^5 integers', () => {
    expect(utils.isSorted(selectionSort(getUnsorted(10000)))).to.be.true;
  });
  it('merge sort sorts 10^5 integers', () => {
    expect(utils.isSorted(mergeSort(getUnsorted(10000)))).to.be.true;
  });
  it('quick sort sorts 10^5 integers', () => {
    expect(utils.isSorted(quickSort(getUnsorted(10000)))).to.be.true;
  });
});
