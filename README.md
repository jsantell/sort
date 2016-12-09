# sort

Sorting algorithms in JavaScript. For academic purposes rather than production.

## Sorts

Type                                    | Best       | Average    | Worst      | Space
----------------------------------------|------------|------------|------------|-------------
[Bubble Sort](src/bubble-sort.js)       | Ω(n)       | Θ(n²)      | O(n²)      | O(1)
[Insertion Sort](src/insertion-sort.js) | Ω(n)       | Θ(n²)      | O(n²)      | O(1)
[Selection Sort](src/selection-sort.js) | Ω(n²)      | Θ(n²)      | O(n²)      | O(1)
[Heap Sort](src/heap-sort.js)           | Ω(n log n) | Θ(n log n) | O(n log n) | O(1)
[Merge Sort](src/merge-sort.js)         | Ω(n log n) | Θ(n log n) | O(n log n) | O(n)
[Quick Sort](src/quick-sort.js)         | Ω(n log n) | Θ(n log n) | O(n²)      | O(log n)
[Bucket Sort](src/bucket-sort.js)       | Ω(n + k)   | Θ(n + k)   | O(n²)      | O(n)
[Counting Sort](src/counting-sort.js)   | Ω(n + k)   | Θ(n + k)   | O(n + k)   | O(k)
[Radix Sort](src/radix-sort.js)         | Ω(nk)      | Θ(nk)      | O(nk)      | O(n + k)
[Cycle Sort](src/cycle-sort.js)         | Ω(n²)      | Θ(n²)      | O(n²)      | O(1)

## Run/Tests

Can run tests via `npm test`

## License

MIT License, Copyright (c) 2016 Jordan Santell
