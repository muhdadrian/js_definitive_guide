// With this conditional invocation syntax of ES2020, however, you can simply write the function invocation using ?.(), knowing that invocation will only happen if there is actually a value to be invoked:

function square(x, log) {
  // The second argument is an optional function
  log?.(x); // Call the function if there is one
  return x * x; // Return the square of the argument
}

// Note, however, that ?.() only checks whether the lefthand side is null or undefined. It does not verify that the value is actually a function. So the square() function in this example would still throw an exception if you passed two numbers to it, for example.
