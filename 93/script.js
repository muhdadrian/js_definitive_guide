// Conditional property access is also possible using ?.[] instead of []. In the expression a?.[b][c], if the value of a is null or undefined, then the entire expression immediately evaluates to undefined, and subexpressions b and c are never even evaluated. If either of those expressions has side effects, the side effect will not occur if a is not defined:

let a; // Oops, we forgot to initialize this variable!
let index = 0;
try {
  a[index++]; // Throws TypeError
} catch (e) {
  index; // => 1: increment occurs before TypeError is thrown
}
a?.[index++]; // => undefined: because a is undefined
index; // => 1: not incremented because ?.[] short-circuits
a[index++]; // !TypeError: can't index undefined.

// Conditional property access with ?. and ?.[] is one of the newest features of JavaScript. As of early 2020, this new syntax is supported in the current or beta versions of most major browsers.
