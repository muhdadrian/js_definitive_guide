'use strict';

// A function to compute factorials
function factorial(n) {
  let product = 1; // Start with a product of 1

  // Repeat statements in {} while expr in () is true
  while (n > 1) {
    product *= n; // Shortcut for product = product * n;
    n--; // Shortcut for n = n - 1;
  } // End of loop
  return product; // Return the product
}

console.log(factorial(4)); // => 24: 1*4*3*2

/*
to understand the code above:

product = 1 * 4
return 4

product = 4 * 3
return 12

product = 12 * 2
return 24
*/

/*
4 - 1 = 3
3 - 1 = 2
2 - 1 = 1
 */
