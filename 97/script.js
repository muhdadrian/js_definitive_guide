// Like conditional property access expressions, function invocation with ?.() is short-circuiting: if the value to the left of ?. is null or undefined, then none of the argument expressions within the parentheses are evaluated:

let f = null,
  x = 0;
try {
  f(x++); // Throws TypeError because f is null
} catch (e) {
  x; // => 1: x gets incremented before the exception is thrown
}
f?.(x++); // => undefined: f is null, but no exception thrown
x; // => 1: increment is skipped because of short-circuiting
