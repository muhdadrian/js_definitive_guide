'use strict';

// An expression is a phrase of JS that can be evaluated to produce a value.
// One of the most common ways to form expressions in JS is to use operators:
// Operators act on values (the operands) to produce a new value.

// Arithmetic operators are some of the simplest:
console.log(3 + 2);
console.log(3 - 2);
console.log(3 * 2);
console.log(3 / 2);

let points = [
  // An array with 2 elements.
  { x: 0, y: 0 }, // Each element is an object.
  { x: 1, y: 1 },
];

console.log(points[1].x - points[0].x); // more complicated oprands also work
console.log(points[1].x);
console.log(points[0].x);

console.log('3' + '2'); // + adds numbers, concatenates strings
