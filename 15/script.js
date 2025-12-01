'use strict';

let primes = [2, 3, 5, 7, 11];
console.log(primes); // to ease my study

// Compute the sum of the elements of an array
function sum(array) {
  let sum = 0; // Start with an initial sum of 0.

  // Loop over array, assigning each element to x.
  for (let x of array) {
    sum += x; // Add the element value to the sum.
  } // This is the end of the loop.
  return sum; // Return the sum.
}

console.log(sum(primes)); // => 28: sum of the first 5 primes 2+3+5+7+11
