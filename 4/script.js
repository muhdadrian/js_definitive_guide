'use strict';

//JavaScript also supports arrays (numerically indexed lists) of values:

let primes = [2, 3, 5, 7]; // An array of 4 values, delimited with [ and ].

console.log(primes[0]); // the first element (index 0) of the array.

console.log(primes.length); // how many elements in the array.

console.log(primes[primes.length - 1]); // the last element of the array.

primes[4] = 9; // Add a new element by assignment.

console.log(primes);

primes[4] = 11; // Or alter an existing element by assignment.

console.log(primes);

let empty = []; // [] is an empty array with no elements.

console.log(empty.length);
