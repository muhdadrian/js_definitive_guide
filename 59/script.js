// If we want to compare two distinct objects or arrays, we must compare their properties or elements. This code defines a function to compare two arrays:

function equalArrays(a, b) {
  if (a === b) return true; // Identical arrays are equal
  if (a.length !== b.length) return false; // Different-size arrays not equal
  for (let i = 0; i < a.length; i++) {
    // Loop through all elements
    if (a[i] !== b[i]) return false;
    // If any differ, arrays not equal
  }
  return true;
  // Otherwise they are equal
}
a = [1, 2, 3]; //let a if 'use strict';
b = [1, 2, 3]; //let b if 'use strict';
console.log(equalArrays(a, b));
