// Conditional Invocation
/*
In ES2020, you can also invoke a function using ?.() instead of (). Normally when you invoke a function, if the expression to the left of the parentheses is null or undefined or any other non-function, a TypeError is thrown. With the new ?.() invocation syntax, if the expression to the left of the ?. evaluates to null or undefined, then the entire invocation expression evaluates to undefined and no exception is thrown.

Array objects have a sort() method that can optionally be passed a function argument that defines the desired sorting order for the array elements. Before ES2020, if you wanted to write a method like sort() that takes an optional function argument, you would typically use an if statement to check that the function argument was defined before invoking it in the body of the if:
*/

function square(x, log) {
  // The second argument is an optional function
  if (log) {
    // If the optional function is passed
    log(x); // Invoke it
  }
  return x * x; // Return the square of the argument
}
