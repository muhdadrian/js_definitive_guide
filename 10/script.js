'use strict';

// Functions are parameterized blocks of JS code that we can invoke.

// Define a function named 'plus1' with parameter 'x'
function plus1(x) {
  return x + 1; // Return a value one larger than the value passed in
} // Functions are enclosed in curly braces

console.log(plus1(3)); // => 4: plus1(y), y is 3, so this invocation returns 3 + 1

//Functions are values and can be assigned to vars
let square = function (x) {
  return x * x; // Compute the function's value
}; // Semicolon marks the end of the assignment.

console.log(square(plus1(3))); // => 16: invoke two functions in one expression

/*
ChatGPT:
- Invoking square with the result of plus1(3) as the argument
- plus1(3) returns 4, so square(4) returns 16
*/

/*
please help explain further why the answer is 16

ChatGPT
Of course! Let's break down why the output of console.log(square(plus1(3))); is 16.

First, the inner function plus1(3) is evaluated.
plus1(3) returns 4, because it adds 1 to the input 3.

The result of plus1(3) is then passed as an argument to the outer function square.
So, effectively, it becomes square(4).

The square function calculates the square of its input.
square(4) returns 4 * 4, which equals 16.

Therefore, when you invoke console.log(square(plus1(3)));, you're effectively calculating the square of the result of adding 1 to 3. This results in 16.

In summary, the function composition allows you to combine the output of one function with the input of another function, in this case, first incrementing the input by 1 and then squaring the result.
*/
