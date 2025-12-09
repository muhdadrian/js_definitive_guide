// Conditional Property Access

/*
ES2020 adds two new kinds of property access expressions:
expression ?. identifier
expression ?.[ expression ]
*/

// In JavaScript, the values null and undefined are the only two values that do not have properties. In a regular property access expression using . or [], you get a TypeError if the expression on the left evaluates to null or undefined. You can use ?. and ?.[] syntax to guard against errors of this type.

// Consider the expression a?.b. If a is null or undefined, then the expression evaluates to undefined without any attempt to access the property b. If a is some other value, then a?.b evaluates to whatever a.b would evaluate to (and if a does not have a property named b, then the value will again be undefined).

// This form of property access expression is sometimes called “optional chaining” because it also works for longer “chained” property access expressions like this one:
let a = { b: null };
a.b?.c.d; // => undefined

// a is an object, so a.b is a valid property access expression. But the value of a.b is null, so a.b.c would throw a TypeError. By using ?. instead of . we avoid the TypeError, and a.b?.c evaluates to undefined. This means that (a.b?.c).d will throw a TypeError, because that expression attempts to access a property of the value undefined. But—and this is a very important part of “optional chaining”—a.b?.c.d (without the parentheses) simply evaluates to undefined and does not throw an error. This is because property access with ?. is “short-circuiting”: if the subexpression to the left of ?. evaluates to null or undefined, then the entire expression immediately evaluates to undefined without any further property access attempts.
