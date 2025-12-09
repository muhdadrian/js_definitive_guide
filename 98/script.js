// Conditional invocation expressions with ?.() work just as well for methods as they do for functions. But because method invocation also involves property access, it is worth taking a moment to be sure you understand the differences between the following expressions:

o.m(); // Regular property access, regular invocation
o?.m(); // Conditional property access, regular invocation
o.m?.(); // Regular property access, conditional invocation

// In the first expression, o must be an object with a property m and the value of that property must be a function. In the second expression, if o is null or undefined, then the expression evaluates to undefined. But if o has any other value, then it must have a property m whose value is a function. And in the third expression, o must not be null or undefined. If it does not have a property m, or if the value of that property is null, then the entire expression evaluates to undefined.

// Conditional invocation with ?.() is one of the newest features of JavaScript. As of the first months of 2020, this new syntax is supported in the current or beta versions of most major browsers.
