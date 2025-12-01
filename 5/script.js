'use strict';

// Arrays and objects can hold other arrays and objects:

let points = [
  // An array with 2 elements.
  { x: 0, y: 0 }, // Each element is an object.
  { x: 1, y: 1 },
];

let data = {
  // An object with 2 properties
  trial1: [
    [1, 2],
    [3, 4],
  ], // The value of each property is an array.
  trial2: [
    [2, 3],
    [4, 5], // The elements of the arrays are arrays
  ],
};
