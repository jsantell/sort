import nativeSort from '../src/native-sort';
import bubbleSort from '../src/bubble-sort';
import insertionSort from '../src/insertion-sort';
import selectionSort from '../src/selection-sort';
import mergeSort from '../src/merge-sort';
import quickSort from '../src/quick-sort';
import bucketSort from '../src/bucket-sort';
import * as utils from './utils';
import { expect } from 'chai';

import ints10000 from './data/ints-10000';
import floats10000 from './data/floats-10000';
// Use small arrays for testing
const ints10 = [4, 9, 8, 7, 3, 2, 6, 1, 0, 5];
const floats10 = [4.23, 9.9, 9.2, 3.9, 1.3, 2, 3.1, 0.01, 5.94, 3.2];
const clone = array => JSON.parse(JSON.stringify(array));

describe('sorts', () => {

  describe('native sort', () => {
    it('native sort sorts 10^5 integers', () => {
      expect(utils.isSorted(nativeSort(clone(ints10000)))).to.be.true;
    });
  });

  describe('bubble sort', () => {
    it('bubble sort sorts 10^5 integers', () => {
      expect(utils.isSorted(bubbleSort(clone(ints10000)))).to.be.true;
    });
  });

  describe('insertion sort', () => {
    it('insertion sort sorts 10^5 integers', () => {
      expect(utils.isSorted(insertionSort(clone(ints10000)))).to.be.true;
    });
  });

  describe('selection sort', () => {
    it('selection sort sorts 10^5 integers', () => {
      expect(utils.isSorted(selectionSort(clone(ints10000)))).to.be.true;
    });
  });

  describe('merge sort', () => {
    it('merge sort sorts 10^5 integers', () => {
      expect(utils.isSorted(mergeSort(clone(ints10000)))).to.be.true;
    });
  });

  describe('quick sort', () => {
    it('quick sort sorts 10^5 integers', () => {
      expect(utils.isSorted(quickSort(clone(ints10000)))).to.be.true;
    });
  });

  describe('bucket sort', () => {
    it('bucket sort sorts 10^5 integers', () => {
      expect(utils.isSorted(bucketSort(clone(ints10000)))).to.be.true;
    });

    it('bucket sort sorts 10^5 floats', () => {
      expect(utils.isSorted(bucketSort(clone(floats10000)))).to.be.true;
    });
  });
});
