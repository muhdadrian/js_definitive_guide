'use strict';

// JS statements include conditionals and loops using the syntax of C, C++, Java and other languages

// A function to compute the absolute value.
function abs(x) {
  // The if statement...
  if (x >= 0) {
    return x; // executes this code if the comparison is true.
  } // This is the end of the if clause.
  else {
    // The optional else clause executes its code if the comparison is false.
    return -x;
  } // Curly braces optional when 1 statement per clause. Note return statements nested inside if/else.
}

console.log(abs(-10) === abs(10)); // => true
console.log(abs(-10));
console.log(abs(10));
