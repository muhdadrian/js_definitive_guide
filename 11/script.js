'use strict';

// Arrow functions are most commonly used when you want to pass an unnamed function as an argument to another function. The preceding code looks like this when rewritten to use arrow functions:

const plus1 = x => x + 1; // The input x maps to the output x + 1

const square = x => x * x; // The input x maps to the output x * x

//plus1(y); // => 4: function invocation is the same
console.log(plus1(3));

//square(plus1(y)); // => 16
console.log(square(plus1(3)));
console.log(square(4));
