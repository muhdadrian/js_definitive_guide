'use strict';

function factorial(n) {
  // Another version using a different loop
  let i,
    product = 1; // Start with 1
  for (
    i = 2;
    i <= n;
    i++ // Automatically increment i from 2 up to n
  )
    product *= i; // Do this each time. {} not needed for 1-line loops
  return product; // Return the factorial
}

console.log(factorial(5)); // => 120: 1*2*3*4*5

/*
to understand:

i = 2
product = 1 * 2
return 2

i = 3
product = 2 * 3
return 6

i = 4
product = 6 * 4
return 24

i = 24
product = 24 * 5
return 120
 */
