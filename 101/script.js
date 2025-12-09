// property access and invocation expressions have higher precedence than any of the operators. Consider this expression:

// my is an object with a property named functions whose value is an array of functions. We invoke function number x, passing it argument y, and then we ask for the type of the value returned.
typeof my.functions[x](y);

// Although typeof is one of the highest-priority operators, the typeof operation is performed on the result of the property access, array index, and function invocation, all of which have higher priority than operators.

// In practice, if you are at all unsure about the precedence of your operators, the simplest thing to do is to use parentheses to make the evaluation order explicit. The rules that are important to know are these: multiplication and division are performed before addition and subtraction, and assignment has very low precedence and is almost always performed last.

// The ?? operator is shown in the table as lower-precedence than || and &&, but, in fact, its precedence relative to those operators is not defined, and ES2020 requires you to explicitly use parentheses if you mix ?? with either || or &&. Similarly, the new ** exponentiation operator does not have a well-defined precedence relative to the unary negation operator, and you must use parentheses when combining negation with exponentiation.
