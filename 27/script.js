'use strict';

let zero = 0; // Regular zero
let negz = -0; // Negative zero
console.log(zero === negz); // => true: zero and negative zero are equal
console.log(1 / zero === 1 / negz); // => false: Infinity and -Infinity are not equal
